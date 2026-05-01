import styles from './PrivacyPolicy.module.css';

export const metadata = {
  title: 'Privacy Policy | WearMeOut',
  description: 'Learn how WearMeOut collects, uses, and protects your personal information.',
};

const LAST_UPDATED = 'May 1, 2026';

export default function PrivacyPolicyPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Legal</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.meta}>Last updated: {LAST_UPDATED}</p>
          <p className={styles.intro}>
            At <strong>WearMeOut</strong>, your privacy matters. This policy explains what
            information we collect, how we use it, and the choices you have. By using our
            website or placing an order, you agree to the practices described here.
          </p>
        </div>

        {/* Sections */}
        <div className={styles.body}>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
            <p>We collect information you provide directly to us, including:</p>
            <ul className={styles.list}>
              <li><strong>Contact details</strong> - name, email address, and phone number when you fill out our contact or quote form.</li>
              <li><strong>Order information</strong> - shipping address, design files, and order preferences when you place a custom order.</li>
              <li><strong>Communications</strong> - messages you send us via email or the contact form.</li>
            </ul>
            <p>We also collect certain information automatically when you visit our site:</p>
            <ul className={styles.list}>
              <li>IP address, browser type, and device information.</li>
              <li>Pages visited, time spent, and referring URLs via standard server logs.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className={styles.list}>
              <li>Process and fulfill your custom printing orders.</li>
              <li>Respond to your inquiries and provide customer support.</li>
              <li>Send order confirmations and updates.</li>
              <li>Improve our website, products, and services.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p>We do <strong>not</strong> sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Sharing of Information</h2>
            <p>
              We may share your information only in the following limited circumstances:
            </p>
            <ul className={styles.list}>
              <li><strong>Service providers</strong> - trusted partners who assist with order fulfillment, shipping, or payment processing, bound by confidentiality agreements.</li>
              <li><strong>Legal requirements</strong> - when required by law, court order, or to protect the rights and safety of WearMeOut or others.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Cookies</h2>
            <p>
              Our website may use cookies and similar technologies to enhance your browsing
              experience and analyze site traffic. You can control cookie settings through
              your browser preferences. Disabling cookies may affect some site functionality.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Data Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your
              personal information from unauthorized access, loss, or misuse. However, no
              method of transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill
              the purposes outlined in this policy, or as required by applicable law. Order
              records may be kept for accounting and legal compliance purposes.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className={styles.list}>
              <li>Access the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data, subject to legal obligations.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:wearmeoutin.com@gmail.com" className={styles.link}>
                wearmeoutin.com@gmail.com
              </a>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible
              for the privacy practices or content of those sites. We encourage you to review
              their privacy policies before providing any personal information.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 13. We do not
              knowingly collect personal information from children. If you believe we have
              inadvertently collected such information, please contact us immediately.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will
              revise the "Last updated" date at the top of this page. We encourage you to
              review this policy periodically to stay informed about how we protect your
              information.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Contact Us</h2>
            <p>If you have any questions or concerns about this Privacy Policy, reach out to us:</p>
            <ul className={styles.list}>
              <li><strong>Email:</strong> <a href="mailto:wearmeoutin.com@gmail.com" className={styles.link}>wearmeoutin.com@gmail.com</a></li>
              <li><strong>Phone:</strong> +91 8980361368</li>
              <li><strong>Address:</strong> Nadiad-387001, Gujarat, India</li>
            </ul>
          </section>

        </div>
      </div>
    </section>
  );
}
