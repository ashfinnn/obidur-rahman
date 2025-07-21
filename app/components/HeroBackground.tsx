// app/components/HeroBackground.tsx
'use client';

import { useEffect, useRef } from 'react';

const HeroBackground = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (!gridRef.current) return;
            const { clientX, clientY } = event;
            const x = (clientX - window.innerWidth / 2) / 20;
            const y = (clientY - window.innerHeight / 2) / 20;
            
            // Apply a 3D parallax effect to the grid
            gridRef.current.style.transform = `perspective(1000px) rotateX(${y * -1}deg) rotateY(${x}deg) scale(1.2)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
            className="absolute inset-0 z-[-1] overflow-hidden opacity-70" 
            style={{
                // A radial gradient mask to fade out the edges, focusing the view
                maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)',
            }}
        >
            <div 
                ref={gridRef}
                className="absolute inset-[-20%] h-[140%] w-[140%] animate-pan-grid transition-transform duration-300 ease-out"
                style={{
                    backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\' width=\'100\' height=\'100\'%3e%3cpath d=\'M0 1L100 1M1 0L1 100\' stroke=\'%23000000\' stroke-width=\'0.5\' stroke-opacity=\'0.1\'/%3e%3ccircle cx=\'50\' cy=\'50\' r=\'0.5\' fill=\'%23000000\' fill-opacity=\'0.2\'/%3e%3c/svg%3e")',
                    backgroundSize: '100px 100px',
                }}
            />
        </div>
    );
};

export default HeroBackground;