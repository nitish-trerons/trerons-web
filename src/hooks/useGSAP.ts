import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
    const elementRef = useRef<HTMLElement>(null);

    // Fade in animation
    const fadeIn = (duration = 1, delay = 0) => {
        if (elementRef.current) {
            gsap.fromTo(
                elementRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration,
                    delay,
                    ease: "power2.out"
                }
            );
        }
    };

    // Slide in from left
    const slideInLeft = (duration = 1, delay = 0) => {
        if (elementRef.current) {
            gsap.fromTo(
                elementRef.current,
                { opacity: 0, x: -100 },
                {
                    opacity: 1,
                    x: 0,
                    duration,
                    delay,
                    ease: "power2.out"
                }
            );
        }
    };

    // Slide in from right
    const slideInRight = (duration = 1, delay = 0) => {
        if (elementRef.current) {
            gsap.fromTo(
                elementRef.current,
                { opacity: 0, x: 100 },
                {
                    opacity: 1,
                    x: 0,
                    duration,
                    delay,
                    ease: "power2.out"
                }
            );
        }
    };

    // Scale in animation
    const scaleIn = (duration = 1, delay = 0) => {
        if (elementRef.current) {
            gsap.fromTo(
                elementRef.current,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration,
                    delay,
                    ease: "back.out(1.7)"
                }
            );
        }
    };

    // Stagger animation for multiple elements
    const staggerFadeIn = (selector: string, stagger = 0.2, duration = 0.8) => {
        if (elementRef.current) {
            gsap.fromTo(
                elementRef.current.querySelectorAll(selector),
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration,
                    stagger,
                    ease: "power2.out"
                }
            );
        }
    };

    // Scroll-triggered animation
    const scrollTriggerAnimation = (
        trigger: string,
        animation: gsap.TweenVars,
        scrollTrigger: ScrollTrigger.Vars = {}
    ) => {
        if (elementRef.current) {
            gsap.fromTo(
                elementRef.current,
                { opacity: 0, y: 50 },
                {
                    ...animation,
                    scrollTrigger: {
                        trigger,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse",
                        ...scrollTrigger
                    }
                }
            );
        }
    };

    // Floating animation
    const floatingAnimation = (y = 20, duration = 2) => {
        if (elementRef.current) {
            gsap.to(elementRef.current, {
                y: `-=${y}`,
                duration,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            });
        }
    };

    // Parallax effect
    const parallaxEffect = (speed = 0.5) => {
        if (elementRef.current) {
            gsap.to(elementRef.current, {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    };

    // Text reveal animation
    const textReveal = (duration = 1, delay = 0) => {
        if (elementRef.current) {
            const text = elementRef.current.textContent || "";
            elementRef.current.innerHTML = "";

            const chars = text.split("").map(char =>
                char === " " ? "&nbsp;" : char
            );

            chars.forEach((char, index) => {
                const span = document.createElement("span");
                span.innerHTML = char;
                span.style.opacity = "0";
                span.style.display = "inline-block";
                elementRef.current?.appendChild(span);

                gsap.to(span, {
                    opacity: 1,
                    duration: 0.05,
                    delay: delay + index * 0.03,
                    ease: "power2.out"
                });
            });
        }
    };

    // Morphing background animation
    const morphingBackground = (colors: string[], duration = 3) => {
        if (elementRef.current) {
            const tl = gsap.timeline({ repeat: -1 });

            colors.forEach((color, index) => {
                tl.to(elementRef.current, {
                    backgroundColor: color,
                    duration: duration / colors.length,
                    ease: "power2.inOut"
                });
            });
        }
    };

    // Cleanup function
    const cleanup = () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

    useEffect(() => {
        return cleanup;
    }, []);

    return {
        elementRef,
        fadeIn,
        slideInLeft,
        slideInRight,
        scaleIn,
        staggerFadeIn,
        scrollTriggerAnimation,
        floatingAnimation,
        parallaxEffect,
        textReveal,
        morphingBackground,
        cleanup
    };
};
