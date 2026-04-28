'use client';

import Link from 'next/link';
import styles from './RecentProjects.module.css';

const projects = [
  {
    id: 'luffy-print',
    title: 'Luffy Print',
    projectHandle: '@AnimeStyle',
    // tag: 'FEATURED',
    tagHighlight: true,
    bg: '#0d0d0d',
    image: '/assets/Luffy.jpeg',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
  },
  {
    id: 'wild-print',
    title: 'Wild Print',
    projectHandle: '@NatureVibes',
    bg: '#0d0d0d',
    image: '/assets/Wild.jpeg',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
  },
  {
    id: 'f1-print',
    title: 'F1 Print',
    projectHandle: '@SpeedRacer',
    bg: '#0a0a0a',
    image: '/assets/F1.jpeg',
    gradient: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)',
  },
  {
    id: 'popey-print',
    title: 'Popey Print',
    projectHandle: '@ClassicToon',
    bg: '#141414',
    image: '/assets/Popey.jpeg',
    gradient: 'linear-gradient(135deg, #1c1c1c 0%, #141414 100%)',
  },
];

export default function RecentProjects() {
  return (
    <section className={styles.section} id="recent-projects" aria-labelledby="projects-heading">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Design Highlights</span>
          <h2 id="projects-heading" className={styles.title}>Recent Prints</h2>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {projects.map((p) => (
            <article key={p.id} className={styles.card} style={{ '--card-bg': p.bg }}>

              {/* Case study badge */}
              {p.tag && (
                <span className={`${styles.tag} ${p.tagHighlight ? styles.tagHighlight : ''}`}>
                  {p.tag}
                </span>
              )}

              {/* Image area */}
              <div className={styles.imageWrap} style={{ background: p.gradient }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className={styles.image}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>

              {/* Card footer */}
              <div className={styles.cardFooter}>
                <div className={styles.cardInfo}>
                  <span className={styles.cardTitle}>{p.title}</span>
                  <div className={styles.cardMeta}>
                    <span className={styles.metaLabel}>Project:</span>
                    <span className={styles.metaHandle}>{p.projectHandle}</span>
                  </div>
                </div>
                <Link href="/contact" className={styles.requestBtn} aria-label={`Request info for ${p.title}`}>
                  Request<br />Info
                </Link>
              </div>


            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
