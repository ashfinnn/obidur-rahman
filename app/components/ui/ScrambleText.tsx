"use client";

import { useState, useEffect, useRef } from "react";

const CHARS = "-_~=+*^!@#&[]/";

interface ScrambleProps {
    text: string;
    className?: string;
    hoverTrigger?: boolean;
}

export const ScrambleText = ({
    text,
    className = "",
    hoverTrigger = true,
}: ScrambleProps) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const animatingRef = useRef(false); // prevents spam-hover overlap

    const scramble = () => {
        if (animatingRef.current) return; // ignore if already scrambling
        animatingRef.current = true;

        clearInterval(intervalRef.current!);

        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = text
                .split("")
                .map((char, i) => {
                    if (char === " ") return " ";
                    if (i < pos) return text[i];
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("");

            setDisplayText(scrambled);
            pos += 0.5; // smoother reveal speed

            if (pos >= text.length) {
                clearInterval(intervalRef.current!);
                animatingRef.current = false;
                setDisplayText(text); // ensure final state is clean
            }
        }, 35);
    };

    useEffect(() => {
        // cleanup on unmount
        return () => clearInterval(intervalRef.current!);
    }, []);

    return (
        <span
            onMouseEnter={hoverTrigger ? scramble : undefined}
            className={className}
        >
            {displayText}
        </span>
    );
};
