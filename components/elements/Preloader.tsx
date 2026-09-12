"use client";

import { JSX, useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps): JSX.Element | null {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const finish = () => {
      setIsLoading(false);
      onComplete?.();
    };

    const timer = window.setTimeout(finish, 400);

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", finish);
    };
  }, [onComplete]);

  if (!isLoading) return null;

  return (
    <div className="preloader" aria-hidden="true">
      <div className="loader"></div>
    </div>
  );
}
