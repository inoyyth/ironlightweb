"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { LineSegments2 } from "three/addons/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";

type GlobeCanvasProps = {
  position?: number;
  xOffset?: number;
  yOffset?: number;
  cameraStartSize?: number;
  cameraEndSize?: number;
  disableAutoRotate?: boolean;
  disableMouseControl?: boolean;
  disableScrollEffect?: boolean;
  disableResize?: boolean;
};

export default function GlobeCanvas({
  position = 15,
  xOffset = 0,
  yOffset = 0,
  cameraStartSize = 3.8,
  cameraEndSize = 7,
  disableAutoRotate = false,
  disableMouseControl = false,
  disableScrollEffect = false,
  disableResize = false,
}: GlobeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let W = canvas.clientWidth;
    let H = canvas.clientHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H, false);
    renderer.setClearColor(0x080808, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
    camera.position.set(0, 0, cameraStartSize);

    const RADIUS = 1.15;
    const N = 400;              // Sparse enough for large triangular faces
    const CONN_THRESH = 0.34;   // Angular threshold (radians) for edges
    const MAGNET_RADIUS = 0.72; // Influence radius in local units
    const MAGNET_STRENGTH = 0.30; // Pull magnitude as fraction of RADIUS
    const LIGHTNING_MAX_SEGS = 1600;

    // ── VERTEX DATA ──
    const basePositions = new Float32Array(N * 3);
    const currentPositions = new Float32Array(N * 3);
    const currentDisp = new Float32Array(N * 3);
    const dispTargets = new Float32Array(N * 3);
    const colors = new Float32Array(N * 3);

    const colGrey = new THREE.Color(0.50, 0.50, 0.53);
    const colBlue = new THREE.Color(0.22, 0.52, 1.00);

    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const x = RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = RADIUS * Math.cos(phi);
      const z = RADIUS * Math.sin(phi) * Math.sin(theta);
      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;
      currentPositions[i * 3] = x;
      currentPositions[i * 3 + 1] = y;
      currentPositions[i * 3 + 2] = z;

      const c = Math.random() < 0.05 ? colBlue : colGrey;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    // ── GLOBE GROUP — points + lines rotate together ──
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Points
    const geo = new THREE.BufferGeometry();
    const posBuf = new THREE.BufferAttribute(currentPositions, 3).setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute("position", posBuf);
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    globeGroup.add(
      new THREE.Points(
        geo,
        new THREE.PointsMaterial({
          size: 0.028,
          vertexColors: true,
          transparent: true,
          opacity: 0.90,
          sizeAttenuation: true,
        })
      )
    );

    // ── CONNECTIONS — irregular topology ──
    // Very close: always connect. Near-threshold: 70% chance. Far: rare random skip.
    const connPairs: number[] = [];
    for (let i = 0; i < N; i++) {
      const ax = basePositions[i * 3], ay = basePositions[i * 3 + 1], az = basePositions[i * 3 + 2];
      for (let j = i + 1; j < N; j++) {
        const bx = basePositions[j * 3], by = basePositions[j * 3 + 1], bz = basePositions[j * 3 + 2];
        const dot = (ax * bx + ay * by + az * bz) / (RADIUS * RADIUS);
        const ang = Math.acos(Math.max(-1, Math.min(1, dot)));
        if (ang < CONN_THRESH * 0.55) {
          connPairs.push(i, j);                           // very close → always
        } else if (ang < CONN_THRESH) {
          if (Math.random() < 0.68) connPairs.push(i, j); // medium → 68%
        } else if (ang < CONN_THRESH * 2.8) {
          if (Math.random() < 0.007) connPairs.push(i, j); // far → rare skip
        }
      }
    }

    const numConn = connPairs.length / 2;
    // linePosArr: flat [x0,y0,z0, x1,y1,z1, ...] — one pair per segment
    const linePosArr = new Float32Array(numConn * 6);

    const lineSegGeo = new LineSegmentsGeometry();
    lineSegGeo.setPositions(linePosArr); // stores reference to linePosArr
    const lineInstBuf = lineSegGeo.getAttribute("instanceStart").data; // InstancedInterleavedBuffer

    const lineMat = new LineMaterial({
      color: 0x909098,
      transparent: true,
      opacity: 0.38,
      linewidth: 1.6, // pixels — works on all platforms
      resolution: new THREE.Vector2(W, H),
    });
    globeGroup.add(new LineSegments2(lineSegGeo, lineMat));

    function updateLines() {
      for (let k = 0; k < numConn; k++) {
        const i = connPairs[k * 2], j = connPairs[k * 2 + 1];
        linePosArr[k * 6]     = currentPositions[i * 3];
        linePosArr[k * 6 + 1] = currentPositions[i * 3 + 1];
        linePosArr[k * 6 + 2] = currentPositions[i * 3 + 2];
        linePosArr[k * 6 + 3] = currentPositions[j * 3];
        linePosArr[k * 6 + 4] = currentPositions[j * 3 + 1];
        linePosArr[k * 6 + 5] = currentPositions[j * 3 + 2];
      }
      lineInstBuf.needsUpdate = true;
    }

    updateLines();

    // ── LIGHTNING GEOMETRY ──
    const lightningPosArr = new Float32Array(LIGHTNING_MAX_SEGS * 6);
    const lightningGeo = new THREE.BufferGeometry();
    const lightningPosBuf = new THREE.BufferAttribute(lightningPosArr, 3).setUsage(THREE.DynamicDrawUsage);
    lightningGeo.setAttribute("position", lightningPosBuf);
    lightningGeo.setDrawRange(0, 0);

    // Bright white core
    const lightningCoreMat = new THREE.LineBasicMaterial({ color: 0xddeeff, transparent: true, opacity: 0 });
    globeGroup.add(new THREE.LineSegments(lightningGeo, lightningCoreMat));
    // Blue glow layer (same geometry)
    const lightningGlowMat = new THREE.LineBasicMaterial({ color: 0x3399ff, transparent: true, opacity: 0 });
    globeGroup.add(new THREE.LineSegments(lightningGeo, lightningGlowMat));

    // Adjacency map for branching along mesh edges
    const adjacency = new Map<number, number[]>();
    for (let k = 0; k < connPairs.length; k += 2) {
      const a = connPairs[k], b = connPairs[k + 1];
      if (!adjacency.has(a)) adjacency.set(a, []);
      if (!adjacency.has(b)) adjacency.set(b, []);
      adjacency.get(a)!.push(b);
      adjacency.get(b)!.push(a);
    }

    // Recursive midpoint-displacement to produce jagged bolt segments
    function genJagged(
      out: number[],
      ax: number, ay: number, az: number,
      bx: number, by: number, bz: number,
      depth: number,
      jitter: number
    ) {
      if (depth === 0 || out.length >= LIGHTNING_MAX_SEGS * 6 - 6) {
        out.push(ax, ay, az, bx, by, bz);
        return;
      }
      const mx = (ax + bx) * 0.5, my = (ay + by) * 0.5, mz = (az + bz) * 0.5;
      const dx = bx - ax, dy = by - ay, dz = bz - az;
      const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (len < 0.0001) { out.push(ax, ay, az, bx, by, bz); return; }

      // Two perpendicular axes to the bolt direction
      let px: number, py: number, pz: number;
      if (Math.abs(dy / len) < 0.9) { px = dz / len; py = 0; pz = -dx / len; }
      else { px = 0; py = -dz / len; pz = dy / len; }
      const qx = dy * pz - dz * py, qy = dz * px - dx * pz, qz = dx * py - dy * px;
      const ql = Math.sqrt(qx * qx + qy * qy + qz * qz) || 1;
      const r1 = (Math.random() - 0.5) * 2 * jitter;
      const r2 = (Math.random() - 0.5) * 2 * jitter;
      const jx = mx + px * r1 + (qx / ql) * r2;
      const jy = my + py * r1 + (qy / ql) * r2;
      const jz = mz + pz * r1 + (qz / ql) * r2;
      genJagged(out, ax, ay, az, jx, jy, jz, depth - 1, jitter * 0.65);
      genJagged(out, jx, jy, jz, bx, by, bz, depth - 1, jitter * 0.65);
    }

    function spawnLightning(hx: number, hy: number, hz: number) {
      const segs: number[] = [];

      // Find nearest vertices
      const closest: { i: number; d: number }[] = [];
      for (let i = 0; i < N; i++) {
        const i3 = i * 3;
        const dx = basePositions[i3] - hx, dy = basePositions[i3 + 1] - hy, dz = basePositions[i3 + 2] - hz;
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < MAGNET_RADIUS * 1.6) closest.push({ i, d });
      }
      closest.sort((a, b) => a.d - b.d);

      for (const { i } of closest.slice(0, 4)) {
        const i3 = i * 3;
        const ex = basePositions[i3], ey = basePositions[i3 + 1], ez = basePositions[i3 + 2];

        // Primary bolt: hit point → vertex
        genJagged(segs, hx, hy, hz, ex, ey, ez, 3, 0.09);

        // Branch along 1–2 edges from this vertex
        const nbrs = (adjacency.get(i) ?? []).slice().sort(() => Math.random() - 0.5);
        const branchCount = Math.random() < 0.5 ? 2 : 1;
        for (let b = 0; b < branchCount && b < nbrs.length; b++) {
          const ni = nbrs[b], n3 = ni * 3;
          genJagged(segs, ex, ey, ez, basePositions[n3], basePositions[n3 + 1], basePositions[n3 + 2], 2, 0.055);
          // Second-level branch
          const nbrs2 = adjacency.get(ni) ?? [];
          if (nbrs2.length > 0 && Math.random() < 0.45) {
            const ni2 = nbrs2[Math.floor(Math.random() * nbrs2.length)], n23 = ni2 * 3;
            genJagged(segs, basePositions[n3], basePositions[n3 + 1], basePositions[n3 + 2],
              basePositions[n23], basePositions[n23 + 1], basePositions[n23 + 2], 1, 0.03);
          }
        }
      }

      const count = Math.min(Math.floor(segs.length / 6), LIGHTNING_MAX_SEGS);
      for (let k = 0; k < count * 6; k++) lightningPosArr[k] = segs[k];
      lightningGeo.setDrawRange(0, count * 2);
      lightningPosBuf.needsUpdate = true;

    }

    // ── MOUSE ──
    let targetRotX = 0, targetRotY = 0;
    let currentRotX = 0, currentRotY = 0;
    let autoRotY = 0;

    const mouse2D = new THREE.Vector2(-999, -999);
    const raycaster = new THREE.Raycaster();
    const invMatrix = new THREE.Matrix4();
    const localOrigin = new THREE.Vector3();
    const localDir = new THREE.Vector3();
    const localRay = new THREE.Ray();
    const hitPt = new THREE.Vector3();
    const hitSphere = new THREE.Sphere(new THREE.Vector3(), RADIUS);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse2D.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse2D.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      if (!disableMouseControl) {
        targetRotX = (e.clientY / window.innerHeight - 0.5) * 0.5;
        targetRotY = (e.clientX / window.innerWidth - 0.5) * 0.8;
      }
    };
    document.addEventListener("mousemove", onMouseMove);

    // ── SCROLL ──
    const bannerHeight = window.innerHeight - 64;
    let scrollProgress = 0;
    const onScroll = () => {
      if (disableScrollEffect) return;
      scrollProgress = Math.min(1, window.scrollY / bannerHeight);
      canvas.style.transform = `translateX(${(1 - scrollProgress) * position}%)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ── RESIZE ──
    const ro = new ResizeObserver(() => {
      if (disableResize) return;
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      renderer.setSize(W, H, false);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
      lineMat.resolution.set(W, H);
    });
    ro.observe(canvas);

    // ── ANIMATION LOOP ──
    let rafId: number;
    let wasDisplaced = false;
    let lightningOpacity = 0;
    let lightningTick = 0;

    function animate() {
      rafId = requestAnimationFrame(animate);

      // Rotation
      autoRotY += disableAutoRotate ? 0 : 0.0006;
      currentRotX += (targetRotX - currentRotX) * 0.04;
      currentRotY += (targetRotY - currentRotY) * 0.04;
      globeGroup.position.x = xOffset;
      globeGroup.position.y = yOffset;
      globeGroup.rotation.y = autoRotY + currentRotY;
      globeGroup.rotation.x = currentRotX;

      // Camera zoom on scroll
      camera.position.z +=
        (cameraStartSize + (cameraEndSize - cameraStartSize) * scrollProgress - camera.position.z) * 0.14;

      // ── MAGNETIC EFFECT ──
      // Transform mouse ray into globeGroup local space
      globeGroup.updateMatrixWorld();
      invMatrix.copy(globeGroup.matrixWorld).invert();
      raycaster.setFromCamera(mouse2D, camera);
      localOrigin.copy(raycaster.ray.origin).applyMatrix4(invMatrix);
      localDir.copy(raycaster.ray.direction).transformDirection(invMatrix);
      localRay.set(localOrigin, localDir);

      const hits = localRay.intersectSphere(hitSphere, hitPt);

      if (hits) {
        // Attract nearby vertices toward the hit point
        for (let i = 0; i < N; i++) {
          const i3 = i * 3;
          const dx = basePositions[i3] - hitPt.x;
          const dy = basePositions[i3 + 1] - hitPt.y;
          const dz = basePositions[i3 + 2] - hitPt.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < MAGNET_RADIUS && dist > 0.0001) {
            const t = 1 - dist / MAGNET_RADIUS;
            const pull = (t * t * MAGNET_STRENGTH * RADIUS) / dist;
            dispTargets[i3] = -dx * pull;
            dispTargets[i3 + 1] = -dy * pull;
            dispTargets[i3 + 2] = -dz * pull;
          } else {
            dispTargets[i3] = 0;
            dispTargets[i3 + 1] = 0;
            dispTargets[i3 + 2] = 0;
          }
        }
      } else if (wasDisplaced) {
        dispTargets.fill(0);
      }

      // Smooth displacement + write into position buffer
      let anyDisp = false;
      for (let i = 0; i < N; i++) {
        const i3 = i * 3;
        currentDisp[i3] += (dispTargets[i3] - currentDisp[i3]) * 0.10;
        currentDisp[i3 + 1] += (dispTargets[i3 + 1] - currentDisp[i3 + 1]) * 0.10;
        currentDisp[i3 + 2] += (dispTargets[i3 + 2] - currentDisp[i3 + 2]) * 0.10;
        currentPositions[i3] = basePositions[i3] + currentDisp[i3];
        currentPositions[i3 + 1] = basePositions[i3 + 1] + currentDisp[i3 + 1];
        currentPositions[i3 + 2] = basePositions[i3 + 2] + currentDisp[i3 + 2];
        if (
          Math.abs(currentDisp[i3]) > 0.0005 ||
          Math.abs(currentDisp[i3 + 1]) > 0.0005 ||
          Math.abs(currentDisp[i3 + 2]) > 0.0005
        ) anyDisp = true;
      }

      if (anyDisp || wasDisplaced) {
        posBuf.needsUpdate = true;
        updateLines();
      }
      wasDisplaced = anyDisp;

      // ── LIGHTNING ──
      if (hits) {
        if (lightningTick % 3 === 0) spawnLightning(hitPt.x, hitPt.y, hitPt.z);
        lightningTick++;
        lightningOpacity = Math.min(1, lightningOpacity + 0.22);
      } else {
        lightningTick = 0;
        lightningOpacity = Math.max(0, lightningOpacity - 0.10);
      }
      const flicker = hits ? 0.65 + Math.random() * 0.35 : 1.0;
      lightningCoreMat.opacity = lightningOpacity * flicker * 0.95;
      lightningGlowMat.opacity = lightningOpacity * flicker * 0.50;
      renderer.render(scene, camera);
    }

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      renderer.dispose();
    };
  }, [
    position,
    xOffset,
    yOffset,
    cameraStartSize,
    cameraEndSize,
    disableAutoRotate,
    disableMouseControl,
    disableScrollEffect,
    disableResize,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
