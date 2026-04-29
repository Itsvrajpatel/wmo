import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './ProductModal.module.css';

export default function ProductModal({ product, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [product]);

  if (!product) return null;

  const images = product.images || [product.image];

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.content}>
          {/* Left: Image Gallery */}
          <div className={styles.gallery}>
            <div className={styles.mainImageContainer}>
              <Image
                src={images[activeImage]}
                alt={`${product.name} view ${activeImage + 1}`}
                fill
                className={styles.mainImage}
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.badge}>{product.category}</div>
            </div>

            {images.length > 1 && (
              <div className={styles.thumbnails}>
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`${styles.thumbnailBtn} ${activeImage === idx ? styles.activeThumbnail : ''}`}
                    onClick={() => setActiveImage(idx)}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      fill
                      className={styles.thumbnailImg}
                      style={{ objectFit: 'cover' }}
                    />
                    <span className={styles.viewLabel}>{idx === 0 ? 'Front' : 'Back'}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className={styles.info}>
            <div className={styles.header}>
              <div className={styles.rating}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--clr-blue)" stroke="var(--clr-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>{product.rating}</span>
              </div>
              <h2 className={styles.title}>{product.name}</h2>
              <p className={styles.price}>${product.price.toFixed(2)}</p>
            </div>

            <div className={styles.description}>
              <h3>About this print</h3>
              <p>{product.description}</p>
            </div>

            <div className={styles.details}>
              <h3>Curated Details</h3>
              <ul>
                {product.details?.map((detail, idx) => (
                  <li key={idx}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--clr-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.addToCartBtn}>
                Contact to Buy — ${product.price.toFixed(2)}
              </Link>
              <p className={styles.shippingInfo}>Free shipping on orders over $100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
