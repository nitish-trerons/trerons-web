import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingAnimationProps {
    size?: 'sm' | 'md' | 'lg';
    color?: string;
    className?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
    size = 'md',
    color = 'primary',
    className = ''
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const circlesRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const circles = circlesRef.current;

        // Initial setup
        gsap.set(circles, {
            scale: 0,
            opacity: 0
        });

        // Create staggered animation
        const tl = gsap.timeline({ repeat: -1 });

        circles.forEach((circle, index) => {
            tl.to(circle, {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
                delay: index * 0.1
            }, index * 0.1);
        });

        // Add floating animation
        circles.forEach((circle, index) => {
            gsap.to(circle, {
                y: -20,
                duration: 1.5,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
                delay: index * 0.2
            });
        });

        // Add rotation animation
        gsap.to(containerRef.current, {
            rotation: 360,
            duration: 3,
            ease: "none",
            repeat: -1
        });

    }, []);

    const sizeClasses = {
        sm: 'w-16 h-16',
        md: 'w-24 h-24',
        lg: 'w-32 h-32'
    };

    const circleSizeClasses = {
        sm: 'w-3 h-3',
        md: 'w-4 h-4',
        lg: 'w-5 h-5'
    };

    const colorClasses = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        accent: 'bg-accent',
        white: 'bg-white',
        black: 'bg-black'
    };

    return (
        <div
            ref={containerRef}
            className={`relative ${sizeClasses[size]} ${className}`}
        >
            {/* Create 8 circles in a circular pattern */}
            {Array.from({ length: 8 }).map((_, index) => {
                const angle = (index * 45) * (Math.PI / 180);
                const radius = size === 'sm' ? 24 : size === 'md' ? 36 : 48;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <div
                        key={index}
                        ref={el => {
                            if (el) circlesRef.current[index] = el;
                        }}
                        className={`absolute ${circleSizeClasses[size]} ${colorClasses[color as keyof typeof colorClasses]} rounded-full`}
                        style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                            transform: 'translate(-50%, -50%)'
                        }}
                    />
                );
            })}
        </div>
    );
};

export default LoadingAnimation;
