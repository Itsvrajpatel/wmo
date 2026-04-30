import styles from './Contact.module.css';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us | WearMeOut',
  description: 'Get in touch with WearMeOut for your custom T-shirt printing needs. Fill out our contact form and our team will get back to you.',
};

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Info Column */}
          <div className={styles.infoColumn}>
            <div>
              <h1 className={styles.title}>
                Let's Make <span>Something</span> Awesome.
              </h1>
              <p className={styles.subtitle}>
                Got an idea for custom apparel? We're here to bring it to life. Fill out the form and our team will get back to you within 24 hours.
              </p>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Email Us</span>
                <span className={styles.detailValue}>wearmeoutin.com@gmail.com</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Call Us</span>
                <span className={styles.detailValue}>+91 8980361368</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Visit Us</span>
                <span className={styles.detailValue}>Nadiad-387001, Gujarat, India</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
