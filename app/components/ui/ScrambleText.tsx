'use client';
import { useState, useEffect, useRef } from 'react';

const CHARS = "-_~=+*^!@#&[]/\\";

interface ScrambleProps {
    text: string;
    className?: string;
    hoverTrigger?: boolean;
}

export const ScrambleText = ({ text, className = "", hoverTrigger = true }: ScrambleProps) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = () => {
        let pos = 0;
        clearInterval(intervalRef.current!);

        intervalRef.current = setInterval(() => {
            const scrambled = text.split("").map((char, index) => {
                if (index < pos) return text[index];
                return CHARS[Math.floor(Math.random() * CHARS.length)];
            }).join("");

            setDisplayText(scrambled);
            pos += 1 / 3; // Speed of decode

            if (pos >= text.length) {
                clearInterval(intervalRef.current!);
            }
        }, 30);
    };

    return (
        <span 
            onMouseEnter={hoverTrigger ? scramble : undefined}
            className={className}
        >
            {displayText}
        </span>
    );
};