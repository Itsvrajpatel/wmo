import styles from './TheProcess.module.css';

const steps = [
  {
    num: '01',
    icon: (
      // T-shirt silhouette
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
      </svg>
    ),
    title: 'Choose',
    body: 'Select from our curated range of oversized tees, boxy hoodies, and premium basics. All heavyweight 300GSM+ cotton.',
  },
  {
    num: '02',
    icon: (
      // Edit / pen icon
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: 'Customize',
    body: 'Share your creative vision or art files. Our team works with you to ensure technical precision and industrial-grade quality.',
  },
  {
    num: '03',
    icon: (
      // Chat / consult icon
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: 'Consult',
    body: 'Contact our production team for a final quote and timeline. We handle the DTG printing and ship your custom drip straight to your door.',
  },
];

export default function TheProcess() {
  return (
    <section className={styles.section} id="the-process" aria-labelledby="process-heading">
      <div className="container">

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.titleWrap}>
            <span className={styles.eyebrow}>How It Works</span>
            <h2 id="process-heading" className={styles.title}>The Process</h2>
          </div>
          {/* <div className={styles.headerLine} aria-hidden="true" /> */}
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {steps.map(({ num, icon, title, body }) => (
            <article key={num} className={styles.card}>
              <span className={styles.numBadge} aria-hidden="true">{num}</span>
              <div className={styles.iconWrap} aria-hidden="true">{icon}</div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
