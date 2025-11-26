'use client';

interface SlideSectionProps {
    children: React.ReactNode;
    className?: string;
    index: number;
}

const SlideSection = ({ children, className = "", index }: SlideSectionProps) => {
    return (
        <div 
            className={`sticky top-0 h-[100dvh] w-full overflow-hidden shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.5)] ${className}`}
            style={{ zIndex: index }}
        >
            {/* 
               Internal Scroll Container:
               This ensures that if content (like Projects) is taller than the screen, 
               the user can scroll INSIDE this card. Once they hit the bottom, 
               the window scroll takes over and the next card slides up.
            */}
            <div className="h-full w-full overflow-y-auto scrollbar-none touch-pan-y">
                {children}
            </div>
        </div>
    );
};

export default SlideSection;