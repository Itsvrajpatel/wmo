import Link from 'next/link';
import { Mail } from 'lucide-react';
import styles from './Footer.module.css';

const FOOTER_LINKS = [
  { label: 'Consultation Policy', href: '/consultation-policy' },
  { label: 'Privacy Policy',      href: '/privacy-policy' },
  { label: 'Production Info',     href: '/production-info' },
  { label: 'Bulk Inquiries',      href: '/bulk-inquiries' },
  { label: 'Partners',            href: '/partners' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      {/* Top divider line */}
      <div className={styles.topRule} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>

        {/* Brand block */}
        <div className={styles.brand}>
          <span className={styles.brandName}>
            <span className={styles.brandAccent}>Wear</span>MeOut
          </span>
          <p className={styles.tagline}>
            © {new Date().getFullYear()} WearMeOut. Raw Energy. Unapologetic Style.
          </p>
        </div>

        {/* Nav links */}
        <nav className={styles.links} aria-label="Footer navigation">
          {FOOTER_LINKS.map(({ label, href }) => (
            <Link key={href} href={href} className={styles.link}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Mail CTA */}
        <a
          href="mailto:hello@wearmeout.in"
          className={styles.mailBtn}
          aria-label="Send us an email"
          id="footer-email-cta"
        >
          <Mail size={20} strokeWidth={2} />
        </a>

      </div>
    </footer>
  );
}
