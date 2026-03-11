"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type GlobeCanvasProps = {
  // add options like point count, colors, etc.
  position?: number;
  cameraStartSize?: number;
  cameraEndSize?: number;
  disableAutoRotate?: boolean;
  disableMouseControl?: boolean;
  disableScrollEffect?: boolean;
  disableResize?: boolean;
};

export default function GlobeCanvas({
  position = 15,
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

    // Use canvas own size for correct aspect ratio
    let W = canvas.clientWidth;
    let H = canvas.clientHeight;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H, false);
    renderer.setClearColor(0x080808, 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 1000);
    const CAMERA_Z_START = cameraStartSize;
    const CAMERA_Z_END = cameraEndSize;
    camera.position.set(0, 0, CAMERA_Z_START);

    // ── GLOBE POINTS ──
    const RADIUS = 1.15;
    const N = 800;

    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(N * 3);
    const colors = new Float32Array(N * 3);

    const colBase = new THREE.Color(0.55, 0.52, 0.48);
    const colAmber = new THREE.Color(0.96, 0.65, 0.14);

    for (let i = 0; i < N; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      positions[i * 3] = RADIUS * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = RADIUS * Math.cos(phi);
      positions[i * 3 + 2] = RADIUS * Math.sin(phi) * Math.sin(theta);
      const c = Math.random() < 0.12 ? colAmber : colBase;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.018,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // ── CONNECTIONS ──
    const MAX_CONNECTIONS = 1400;
    const linePosArr = new Float32Array(MAX_CONNECTIONS * 2 * 3);
    const lineColArr = new Float32Array(MAX_CONNECTIONS * 2 * 3);
    const lineGeo = new THREE.BufferGeometry();
    const linePosBuf = new THREE.BufferAttribute(linePosArr, 3).setUsage(
      THREE.DynamicDrawUsage
    );
    const lineColBuf = new THREE.BufferAttribute(lineColArr, 3).setUsage(
      THREE.DynamicDrawUsage
    );
    lineGeo.setAttribute("position", linePosBuf);
    lineGeo.setAttribute("color", lineColBuf);

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    const THRESH = 0.52;
    const amberLine = new THREE.Color(0.96, 0.65, 0.14);
    const dimLine = new THREE.Color(0.22, 0.21, 0.19);

    function updateConnections() {
      const pos = geo.attributes.position.array as Float32Array;
      let ci = 0;
      for (let i = 0; i < N && ci < MAX_CONNECTIONS; i++) {
        const ax = pos[i * 3],
          ay = pos[i * 3 + 1],
          az = pos[i * 3 + 2];
        for (let j = i + 1; j < N && ci < MAX_CONNECTIONS; j++) {
          const bx = pos[j * 3],
            by = pos[j * 3 + 1],
            bz = pos[j * 3 + 2];
          const dot = (ax * bx + ay * by + az * bz) / (RADIUS * RADIUS);
          const ang = Math.acos(Math.max(-1, Math.min(1, dot)));
          if (ang < THRESH) {
            const t = 1 - ang / THRESH;
            const isAmber = colors[i * 3] > 0.8 || colors[j * 3] > 0.8;
            const c = isAmber ? amberLine : dimLine;
            const f = t * (isAmber ? 0.9 : 0.55);
            linePosArr[ci * 6] = ax;
            linePosArr[ci * 6 + 1] = ay;
            linePosArr[ci * 6 + 2] = az;
            linePosArr[ci * 6 + 3] = bx;
            linePosArr[ci * 6 + 4] = by;
            linePosArr[ci * 6 + 5] = bz;
            lineColArr[ci * 6] = c.r * f;
            lineColArr[ci * 6 + 1] = c.g * f;
            lineColArr[ci * 6 + 2] = c.b * f;
            lineColArr[ci * 6 + 3] = c.r * f;
            lineColArr[ci * 6 + 4] = c.g * f;
            lineColArr[ci * 6 + 5] = c.b * f;
            ci++;
          }
        }
      }
      lineGeo.setDrawRange(0, ci * 2);
      linePosBuf.needsUpdate = true;
      lineColBuf.needsUpdate = true;
    }

    updateConnections();

    // ── RINGS — built as LineLoop for clean single-line circles ──
    function makeRing(
      radius: number,
      segments: number,
      opacity: number
    ): THREE.LineLoop {
      const pts: THREE.Vector3[] = [];
      for (let i = 0; i <= segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        pts.push(
          new THREE.Vector3(Math.cos(a) * radius, Math.sin(a) * radius, 0)
        );
      }
      const rGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const rMat = new THREE.LineBasicMaterial({
        color: 0xf5a623,
        transparent: true,
        opacity,
      });
      return new THREE.LineLoop(rGeo, rMat);
    }

    const ring1 = makeRing(RADIUS * 1.01, 120, 0.18);
    ring1.rotation.x = Math.PI / 2;
    scene.add(ring1);

    const ring2 = makeRing(RADIUS * 1.01, 120, 0.09);
    ring2.rotation.set(Math.PI * 0.35, 0, Math.PI * 0.15);
    scene.add(ring2);

    // ── MOUSE ──
    let targetRotX = 0,
      targetRotY = 0;
    let currentRotX = 0,
      currentRotY = 0;
    let autoRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      if (disableMouseControl) return;
      targetRotX = (e.clientY / window.innerHeight - 0.5) * 0.5;
      targetRotY = (e.clientX / window.innerWidth - 0.5) * 0.8;
    };
    document.addEventListener("mousemove", onMouseMove);

    // ── SCROLL → slide globe from left to center + zoom in ──
    const bannerHeight = window.innerHeight - 64;
    let scrollProgress = 0;
    const onScroll = () => {
      if (disableScrollEffect) return;
      scrollProgress = Math.min(1, window.scrollY / bannerHeight);
      canvas.style.transform = `translateX(${(1 - scrollProgress) * position}%)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // set initial position

    // ── RESIZE via ResizeObserver ──
    const ro = new ResizeObserver(() => {
      if (disableResize) return;
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      renderer.setSize(W, H, false);
      camera.aspect = W / H;
      camera.updateProjectionMatrix();
    });
    ro.observe(canvas);

    // ── ANIMATION LOOP ──
    let rafId: number;

    function animate(_t: number) {
      rafId = requestAnimationFrame(animate);

      autoRotY += disableAutoRotate ? 0 : 0.0028;
      currentRotX += (targetRotX - currentRotX) * 0.04;
      currentRotY += (targetRotY - currentRotY) * 0.04;

      points.rotation.y = autoRotY + currentRotY;
      points.rotation.x = currentRotX;
      lines.rotation.copy(points.rotation);

      ring1.rotation.x = Math.PI / 2 + currentRotX * 0.3;
      ring1.rotation.y = autoRotY * 0.4;
      ring2.rotation.y = autoRotY * 0.25 + currentRotY;

      // Zoom in as globe moves to center
      camera.position.z +=
        (CAMERA_Z_START +
          (CAMERA_Z_END - CAMERA_Z_START) * scrollProgress -
          camera.position.z) *
        0.05;

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
