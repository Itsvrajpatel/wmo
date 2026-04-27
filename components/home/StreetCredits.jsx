'use client';

import { useRef, useEffect, useState } from 'react';
import styles from './StreetCredits.module.css';

const reviews = [
  {
    id: 'r1',
    name: 'Arjun Mehta',
    handle: '@arjun.fits',
    rating: 5,
    text: `Bro, the Neo-Static tee hit different. Print quality is insane — colours haven't faded after 10+ washes. This is literally my most-complimented fit.`,
    tag: 'Verified Drop',
    avatar: 'AM',
    accent: '#CCFF00',
  },
  {
    id: 'r2',
    name: 'Priya Sharma',
    handle: '@priya.streetwear',
    rating: 5,
    text: `Ordered a custom design and they nailed it on the first try. Turnaround was fast and the GSM feels premium — not that cheap thin stuff you find elsewhere.`,
    tag: 'Custom Order',
    avatar: 'PS',
    accent: '#CCFF00',
  },
  {
    id: 'r3',
    name: 'Zaid Khan',
    handle: '@zkhan.daily',
    rating: 5,
    text: `Glow Character tee was everything. The print is crisp, edges are clean, and it actually looks exactly like the mock-up. Will 100% order again.`,
    tag: 'Verified Drop',
    avatar: 'ZK',
    accent: '#CCFF00',
  },
  {
    id: 'r4',
    name: 'Rhea Verma',
    handle: '@rheafits',
    rating: 4,
    text: `Solid quality and packaging was sick. Would love a wider size range but the XXL fit me perfectly and the ink sits sharp. Already recommended to 3 friends.`,
    tag: 'Repeat Buyer',
    avatar: 'RV',
    accent: '#CCFF00',
  },
  {
    id: 'r5',
    name: 'Dev Patel',
    handle: '@devonstreet',
    rating: 5,
    text: `Backtrack V2 is a statement piece. Wore it to a streetwear meetup and people kept asking where I got it. The weight of the fabric alone screams quality.`,
    tag: 'Verified Drop',
    avatar: 'DP',
    accent: '#CCFF00',
  },
  {
    id: 'r6',
    name: 'Sneha Roy',
    handle: '@snehawears',
    rating: 5,
    text: `Their customer service is as good as the tees. Had a question about the print size and got a reply within hours with a revised mock-up. Rare these days.`,
    tag: 'Custom Order',
    avatar: 'SR',
    accent: '#CCFF00',
  },
];

function StarRating({ count }) {
  return (
    <div className={styles.stars} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${styles.star} ${i < count ? styles.starFilled : styles.starEmpty}`}
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M8 1.2l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.3l-3.6 1.9.7-4L2.2 5.4l4-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function StreetCredits() {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate reviews for seamless infinite scroll
  const doubled = [...reviews, ...reviews];

  return (
    <section className={styles.section} id="street-credits" aria-labelledby="credits-heading">
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Customer Reviews</span>
          <h2 id="credits-heading" className={styles.title}>Street Credits</h2>
          <p className={styles.subtitle}>
            Real fits. Real people. Real talk.
          </p>
        </div>

        {/* Stats bar */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4.9</span>
            <span className={styles.statLabel}>Avg Rating</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>200+</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.statItem}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Would Reorder</span>
          </div>
        </div>
      </div>

      {/* Scrolling carousel — full-bleed */}
      <div
        className={styles.carouselViewport}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className={`${styles.track} ${isPaused ? styles.trackPaused : ''}`}
          aria-label="Customer reviews carousel"
        >
          {doubled.map((review, idx) => (
            <article
              key={`${review.id}-${idx}`}
              className={styles.card}
              style={{ '--accent': review.accent }}
              aria-label={`Review by ${review.name}`}
            >
              {/* Tag */}
              <span className={styles.cardTag}>{review.tag}</span>

              {/* Rating */}
              <StarRating count={review.rating} />

              {/* Quote */}
              <blockquote className={styles.quote}>
                <span className={styles.quoteMarks}>&ldquo;</span>
                {review.text}
                <span className={styles.quoteMarks}>&rdquo;</span>
              </blockquote>

              {/* Author */}
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {review.avatar}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{review.name}</span>
                  <span className={styles.authorHandle}>{review.handle}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
