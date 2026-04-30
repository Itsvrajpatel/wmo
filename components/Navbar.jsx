'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag } from 'lucide-react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* close menu on route change */
    useEffect(() => { setMenuOpen(false); }, [pathname]);

    return (
        <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.inner}`}>

                {/* Logo */}
                <Link href="/" className={styles.logo} aria-label="WearMeOut home">
                    <Image
                        src="/assets/Logo.PNG"
                        alt="WearMeOut Logo"
                        width={200}
                        height={200}
                        style={{ objectFit: 'contain', display: 'block' }}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav} aria-label="Main navigation">
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`${styles.navLink} ${pathname === href ? styles.active : ''}`}
                        >
                            {label}
                            <span className={styles.linkUnderline} />
                        </Link>
                    ))}
                </nav>

                {/* CTA + Hamburger */}
                <div className={styles.actions}>
                    <Link href="/shop" className={styles.ctaBtn} id="navbar-shop-cta">
                        <ShoppingBag size={16} strokeWidth={2.5} />
                        Shop Now
                    </Link>
                    <button
                        className={styles.hamburger}
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ''}`} aria-hidden={!menuOpen}>
                <nav className={styles.mobileNav} aria-label="Mobile navigation">
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`${styles.mobileLink} ${pathname === href ? styles.mobileActive : ''}`}
                            tabIndex={menuOpen ? 0 : -1}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
