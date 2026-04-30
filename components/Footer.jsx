import Link from 'next/link';
import Image from 'next/image';
import { Mail } from 'lucide-react';

const InstagramIcon = ({ size = 24, strokeWidth = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
import styles from './Footer.module.css';

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      {/* Top divider line */}
      <div className={styles.topRule} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>

        {/* Left: Brand block */}
        <div className={styles.brand}>
          <Image
            src="/assets/Logo.PNG"
            alt="WearMeOut Logo"
            width={180}
            height={60}
            style={{ display: 'block', width: '150px', height: 'auto' }}
          />
        </div>

        {/* Center: Nav links */}
        <nav className={styles.links} aria-label="Footer navigation">
          {FOOTER_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} className={styles.link}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Right: Socials CTA */}
        <div className={styles.socials}>
          <a
            href="https://instagram.com/wearmeout"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="Follow us on Instagram"
          >
            <InstagramIcon size={20} strokeWidth={2} />
          </a>
          <a
            href="mailto:hello@wearmeout.in"
            className={styles.socialBtn}
            aria-label="Send us an email"
            id="footer-email-cta"
          >
            <Mail size={20} strokeWidth={2} />
          </a>
        </div>

      </div>

      {/* Bottom Center: Tagline */}
      <div className={styles.bottomBar}>
        <p className={styles.tagline}>
          © {new Date().getFullYear()} WearMeOut. Every way. Every Day.
        </p>
      </div>
    </footer>
  );
}
