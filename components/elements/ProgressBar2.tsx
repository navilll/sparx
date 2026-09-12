"use client";

import React, { useEffect, useState } from "react";

interface ProgressBarProps {
  label?: string;
  percentage: number; // e.g. 90
  duration?: number; // in milliseconds
}

const ProgressBar2: React.FC<ProgressBarProps> = ({
  label = "Skill",
  percentage,
  duration = 3000,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(percentage / (duration / 30));
    const interval = setInterval(() => {
      start += step;
      if (start >= percentage) {
        setProgress(percentage);
        clearInterval(interval);
      } else {
        setProgress(start);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [percentage, duration]);

  return (
    <div className="skill-bar">
      <div className="bar-inner">
        <div
          className="bar progress-line"
          style={{ width: `${progress}%`, transition: "width 0.3s ease" }}
        >
          <div className="skill-percentage">
            <div className="count-box">
              <span className="count-text">{progress}</span>%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar2;