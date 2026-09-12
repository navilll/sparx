"use client";

import { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  duration: number;
}

export default function Counter({ end, duration }: CounterProps): JSX.Element {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const [inViewport, setInViewport] = useState(false);
    const increment = end / duration;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInViewport(true);
                    observer.disconnect();
                }
            },
            { threshold: 0 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;

        if (inViewport) {
            setCount(0);
            intervalId = setInterval(() => {
                setCount((prevCount) => {
                    const newCount = prevCount + increment;
                    if (newCount >= end) {
                        if (intervalId) clearInterval(intervalId);
                        return end;
                    } else {
                        return newCount;
                    }
                });
            }, 1000 / duration);
        }

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [end, increment, inViewport]);

    return (
        <span ref={countRef}>
            <span>{Math.round(count)}</span>
        </span>
    );
}