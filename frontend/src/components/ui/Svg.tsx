"use client";

import { icons, IconName } from "@/lib/icons";
import { useEffect, useState } from "react";

interface SvgProps {
  name: IconName;
  className?: string;
}

export default function Svg({ name, className }: SvgProps) {
  const [markup, setMarkup] = useState<string>("");

  useEffect(() => {
    fetch(icons[name])
      .then((res) => res.text())
      .then(setMarkup)
      .catch(() => setMarkup(""));
  }, [name]);

  if (!markup) return null;

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}
