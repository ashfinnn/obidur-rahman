// app/components/HeroBackground.tsx
'use client';

import { useEffect, useRef } from 'react';

const HeroBackground = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!gridRef.current) return;
            const { clientX, clientY } = event;
            const x = (clientX - window.innerWidth / 2) / 25;
            const y = (clientY - window.innerHeight / 2) / 25;
            
            gridRef.current.style.transform = `perspective(1000px) rotateX(${y * -1}deg) rotateY(${x}deg) scale(1.2)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
            className="absolute inset-0 z-[-1] overflow-hidden bg-white"
            style={{
                // A radial gradient mask to fade out the edges, focusing the view.
                maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 90%)',
            }}
        >
            <div 
                ref={gridRef}
                className="absolute inset-[-20%] h-[140%] w-[140%] animate-subtle-drift transition-transform duration-300 ease-out"
                style={{
                    // Updated: Using low-opacity black for the grid lines on a light background.
                    backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\' width=\'100\' height=\'100\'%3e%3cpath d=\'M0 1L100 1M1 0L1 100\' stroke=\'black\' stroke-width=\'0.5\' stroke-opacity=\'0.1\'/%3e%3c/svg%3e")',
                    backgroundSize: '75px 75px',
                }}
            />
        </div>
    );
};

export default HeroBackground;
