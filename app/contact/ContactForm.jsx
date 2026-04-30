"use client";

import { useState } from 'react';
import styles from './Contact.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    comments: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, address, comments } = formData;

    if (!name.trim() || !email.trim() || !mobile.trim() || !address.trim() || !comments.trim()) {
      alert("Please fill out all fields before sending the message.");
      return;
    }

    setIsSubmitting(true);

    const whatsappNumber = "8980361368"; // your number (no +)

    const message = `
📢 *New T-Shirt Order Inquiry*

━━━━━━━━━━━━━━━

👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Mobile:* ${mobile}

📍 *Address:* 
${address}

━━━━━━━━━━━━━━━

📝 *Order Details:*
${comments}

━━━━━━━━━━━━━━━
🌐 From WearMeOut Website
  `;

    const encodedMessage = encodeURIComponent(message.trim());

    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;

    // Optional UI reset
    setIsSubmitting(false);
    setSubmitStatus('success');
  };

  return (
    <div className={styles.formColumn}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="mobile" className={styles.label}>Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            className={styles.input}
            placeholder="+1 (555) 000-0000"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address" className={styles.label}>Shipping Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className={styles.input}
            placeholder="123 Main St, Apt 4B, City, State, Zip"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="comments" className={styles.label}>Comments</label>
          <textarea
            id="comments"
            name="comments"
            className={styles.textarea}
            placeholder="Tell us about your custom t-shirt requirements, quantity, and design ideas..."
            value={formData.comments}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
          {isSubmitting ? 'Opening WhatsApp...' : 'Send via WhatsApp'}
        </button>

        {submitStatus === 'success' && (
          <div style={{ color: 'var(--clr-blue)', marginTop: '1rem', fontWeight: '500', textAlign: 'center' }}>
            WhatsApp opened! Please click send to complete your request.
          </div>
        )}
      </form>
    </div>
  );
}
