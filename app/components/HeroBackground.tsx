'use client';

import { useMotionValue, useSpring, motion, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth out the mouse movement for the spotlight
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    // Tilt calculations
    const rotateX = useTransform(y, [0, window.innerHeight], [15, -15]);
    const rotateY = useTransform(x, [0, window.innerWidth], [-15, 15]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 -z-10 bg-[#050505] overflow-hidden perspective-[1000px]">
            
            {/* 1. The Spotlight Gradient (Moves with mouse) */}
            <motion.div
                className="absolute inset-0 z-10 opacity-20"
                style={{
                    background: useTransform(
                        [x, y],
                        ([latestX, latestY]) => 
                            `radial-gradient(600px circle at ${latestX}px ${latestY}px, rgba(6,182,212,0.15), transparent 40%)`
                    )
                }}
            />

            {/* 2. The 3D Grid (Reacts to mouse tilt) */}
            <motion.div
                style={{ 
                    rotateX: useTransform(y, [0, 1000], [20, 25]), // Slight constant tilt
                    rotateY: 0,
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-[-50%] w-[200%] h-[200%] origin-center"
            >
                <div 
                    className="w-full h-full opacity-[0.2]"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px',
                        // The grid fades out at the edges
                        maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
                    }} 
                />
            </motion.div>
        </div>
    );
};

export default HeroBackground;