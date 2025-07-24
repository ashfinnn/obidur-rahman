// app/components/HeroBackground.tsx
'use client';

import { useEffect, useRef } from 'react';
import { throttle } from '../utils/throttle'; // Import the new performance utility

const HeroBackground = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!gridRef.current) return;
            const { clientX, clientY } = event;
            const x = (clientX - window.innerWidth / 2) / 35;
            const y = (clientY - window.innerHeight / 2) / 35;

            gridRef.current.style.transform = `perspective(1000px) rotateX(${y * -1}deg) rotateY(${x}deg) scale(1.2)`;
        };

        // Throttle the event listener to fire at most once every 16ms (~60fps) for performance
        const throttledMouseMove = throttle(handleMouseMove, 16);

        window.addEventListener('mousemove', throttledMouseMove);
        return () => window.removeEventListener('mousemove', throttledMouseMove);
    }, []);

    return (
        <div
            className="absolute inset-0 z-0 overflow-hidden bg-white"
            style={{
                maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)',
            }}
        >
            <div
                ref={gridRef}
                 className="absolute inset-[-20%] h-[140%] w-[140%] animate-pan-grid transition-transform duration-300 ease-out"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\' width=\'100\' height=\'100\'%3e%3cpath d=\'M0 1L100 1M1 0L1 100\' stroke=\'black\' stroke-width=\'0.5\' stroke-opacity=\'0.1\'/%3e%3c/svg%3e")',
                    backgroundSize: '75px 75px',
                }}
            />
        </div>
    );
};

export default HeroBackground;