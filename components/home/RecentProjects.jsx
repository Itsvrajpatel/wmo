'use client';

import Link from 'next/link';
import styles from './RecentProjects.module.css';

const projects = [
  {
    id: 'neo-static-tee',
    title: 'Neo-Static Tee',
    projectHandle: '@CyberArtist',
    // tag: 'CASE STUDY',
    tagHighlight: true,
    bg: '#0d0d0d',
    image: '/projects/neo-static.jpg',
    // placeholder gradient if image missing
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
  },
  {
    id: 'draft-01-white',
    title: 'Draft-01 White',
    projectHandle: '@Architex',
    bg: '#0d0d0d',
    image: '/projects/draft-01.jpg',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
  },
  {
    id: 'glow-character',
    title: 'Glow Character',
    projectHandle: '@Stencil.Kid',
    bg: '#0a0a0a',
    image: '/projects/glow-character.jpg',
    gradient: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)',
  },
  {
    id: 'backtrack-v2',
    title: 'Backtrack V2',
    projectHandle: '@NaxMaster',
    bg: '#141414',
    image: '/projects/backtrack-v2.jpg',
    gradient: 'linear-gradient(135deg, #1c1c1c 0%, #141414 100%)',
  },
];

export default function RecentProjects() {
  return (
    <section className={styles.section} id="recent-projects" aria-labelledby="projects-heading">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Portfolio Highlights</span>
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
