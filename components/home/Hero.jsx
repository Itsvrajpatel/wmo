'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { FileText, Eye, Package, Zap, Leaf } from 'lucide-react';
import styles from './Hero.module.css';

const BADGES = [
    { icon: Package, text: 'Bulk Order Experts' },
    { icon: Zap, text: 'Fast Delivery' },
    { icon: Leaf, text: 'Premium Bio-Cotton' },
];

export default function Hero() {
    const heroRef = useRef(null);
    const headlineRef = useRef(null);
    const subRef = useRef(null);
    const ctaRef = useRef(null);
    const badgesRef = useRef(null);
    const glowRef = useRef(null);

    /* Mouse-parallax glow */
    useEffect(() => {
        const hero = heroRef.current;
        const glow = glowRef.current;
        if (!hero || !glow) return;

        const onMove = (e) => {
            const { left, top, width, height } = hero.getBoundingClientRect();
            const x = ((e.clientX - left) / width - 0.5) * 40;
            const y = ((e.clientY - top) / height - 0.5) * 40;
            glow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        };

        hero.addEventListener('mousemove', onMove, { passive: true });
        return () => hero.removeEventListener('mousemove', onMove);
    }, []);

    /* GSAP entrance animations */
    useEffect(() => {
        let ctx;
        import('gsap').then(({ gsap }) => {
            ctx = gsap.context(() => {
                const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

                tl.fromTo(
                    headlineRef.current?.querySelectorAll('[data-anim]'),
                    { y: 80, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, stagger: 0.12 }
                )
                    .fromTo(
                        subRef.current,
                        { y: 30, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8 },
                        '-=0.5'
                    )
                    .fromTo(
                        ctaRef.current?.querySelectorAll('a'),
                        { y: 20, opacity: 0, scale: 0.95 },
                        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 },
                        '-=0.4'
                    )
                    .fromTo(
                        badgesRef.current?.querySelectorAll('[data-badge]'),
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
                        '-=0.2'
                    );
            }, heroRef);
        });

        return () => ctx?.revert?.();
    }, []);

    return (
        <section className={styles.hero} ref={heroRef} id="hero">

            {/* Ambient glow orb */}
            <div className={styles.glowWrap}>
                <div className={styles.glowOrb} ref={glowRef} />
            </div>

            {/* Grid overlay */}
            <div className={styles.gridOverlay} aria-hidden="true" />

            {/* Vignette frame — mimics the reference's rectangular glow border */}
            <div className={styles.frameGlow} aria-hidden="true" />

            {/* Content */}
            <div className={`container ${styles.content}`}>

                {/* Pill badge */}
                <div className={styles.pill}>
                    <span className={styles.pillDot} />
                    Premium Streetwear Printing
                </div>

                {/* Headline */}
                <div className={styles.headlineWrap} ref={headlineRef}>
                    <h1 className={styles.h1}>
                        <span data-anim className={styles.lineWhite}>WEAR YOUR</span>
                        <span data-anim className={styles.lineAccent}>IDENTITY.</span>
                    </h1>
                    <p data-anim className={styles.tagline}>
                        Print Your Style.
                    </p>
                </div>

                {/* Sub-copy */}
                <p className={styles.sub} ref={subRef}>
                    High-voltage custom streetwear production. Premium manufacturing,
                    industrial-grade inks, zero apologies.{' '}
                    <Link href="/shop" className={styles.inlineLink}>View our catalogue</Link>
                    {' '}or start your custom order.
                </p>

                {/* CTAs */}
                <div className={styles.ctas} ref={ctaRef}>
                    <Link href="/contact" className={styles.btnPrimary} id="hero-cta-quote">
                        <FileText size={18} strokeWidth={2.5} />
                        Get a Quote
                    </Link>
                    <Link href="/shop" className={styles.btnOutline} id="hero-cta-showcase">
                        <Eye size={18} strokeWidth={2} />
                        View Showcase
                    </Link>
                </div>
            </div>

            {/* Bottom badges strip */}
            <div className={styles.badgesStrip} ref={badgesRef}>
                <div className={`container ${styles.badgesInner}`}>
                    {BADGES.map(({ icon: Icon, text }) => (
                        <div key={text} className={styles.badge} data-badge>
                            <Icon size={18} className={styles.badgeIcon} />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
