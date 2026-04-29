'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import styles from './Shop.module.css';

import ProductModal from './ProductModal';

const PRODUCTS = [
  { id: 1, name: "Formula 1 Racing Tee", price: 35.00, category: "Sports", image: "/assets/F1.jpeg", images: ["/assets/F1.jpeg", "/assets/Wild.jpeg"], rating: 4.8, description: "A high-octane racing tee featuring classic F1 styling. Perfect for race day or streetwear styling.", details: ["100% Premium Cotton", "Heavyweight 240gsm", "Oversized fit", "Screen printed design"] },
  { id: 2, name: "Luffy Anime Special", price: 40.00, category: "Anime", image: "/assets/Luffy.jpeg", images: ["/assets/Luffy.jpeg", "/assets/Popeye.jpeg"], rating: 4.9, description: "Show off your love for anime with this premium Luffy print. High quality print that won't fade after washing.", details: ["100% Premium Cotton", "Heavyweight 240gsm", "Oversized fit", "DTG print"] },
  { id: 3, name: "Popeye Classic", price: 30.00, category: "Cartoon", image: "/assets/Popey.jpeg", images: ["/assets/Popey.jpeg", "/assets/Hero_popye.png"], rating: 4.5, description: "A nostalgic classic. The Popeye graphic print brings back childhood memories in a stylish, modern fit.", details: ["100% Premium Cotton", "Heavyweight 240gsm", "Boxy fit", "Vintage wash"] },
  { id: 4, name: "Wild Graphic Print", price: 45.00, category: "Graphic", image: "/assets/Wild.jpeg", images: ["/assets/Wild.jpeg", "/assets/F1.jpeg"], rating: 5.0, description: "Go wild with this intricate graphic print. A bold statement piece for any wardrobe.", details: ["100% Premium Cotton", "Heavyweight 240gsm", "Oversized fit", "Screen printed design"] },
  { id: 5, name: "Hero Popeye Edition", price: 35.00, category: "Cartoon", image: "/assets/Hero_popye.png", images: ["/assets/Hero_popye.png", "/assets/Popey.jpeg"], rating: 4.6, description: "The classic hero in a new light. This edition features a vibrant, high-contrast print.", details: ["100% Premium Cotton", "Heavyweight 240gsm", "Standard fit", "DTG print"] },
  { id: 6, name: "Hero Wild Edition", price: 45.00, category: "Graphic", image: "/assets/Hero_wild.png", images: ["/assets/Hero_wild.png", "/assets/Wild.jpeg"], rating: 4.7, description: "A darker, grittier take on our wild graphic. Perfect for those who prefer an edgy look.", details: ["100% Premium Cotton", "Heavyweight 240gsm", "Oversized fit", "Screen printed design"] },
  { id: 7, name: "Popeye Vintage", price: 32.00, category: "Cartoon", image: "/assets/Popeye.jpeg", images: ["/assets/Popeye.jpeg", "/assets/Hero_popye.png"], rating: 4.4, description: "A faded, vintage look for the ultimate retro feel. This tee feels like it's been your favorite for years.", details: ["100% Premium Cotton", "Heavyweight 240gsm", "Boxy fit", "Vintage wash"] },
];

const CATEGORIES = ["All", "Sports", "Anime", "Cartoon", "Graphic"];


export default function ShopClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceSort, setPriceSort] = useState('none');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Prevent scrolling when mobile filter drawer is open
  useEffect(() => {
    if (filterOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [filterOpen]);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (searchQuery.trim() !== '') {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (priceSort === 'low') {
      result.sort((a, b) => a.price - b.price);
    } else if (priceSort === 'high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [searchQuery, activeCategory, priceSort]);

  return (
    <section className={styles.shopSection}>
      <div className={styles.container}>
        
        {/* Page Header */}
        <div className={styles.header}>
          <h1 className={styles.title}>All Collections</h1>
          <p className={styles.subtitle}>Discover our premium printed t-shirts.</p>
        </div>

        {/* Mobile Filter Toggle */}
        <button 
          className={styles.filterToggle} 
          onClick={() => setFilterOpen(true)}
          aria-label="Open filters"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="21" x2="4" y2="14"></line>
            <line x1="4" y1="10" x2="4" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12" y2="3"></line>
            <line x1="20" y1="21" x2="20" y2="16"></line>
            <line x1="20" y1="12" x2="20" y2="3"></line>
            <line x1="1" y1="14" x2="7" y2="14"></line>
            <line x1="9" y1="8" x2="15" y2="8"></line>
            <line x1="17" y1="16" x2="23" y2="16"></line>
          </svg>
          Filters
        </button>

        <div className={styles.layout}>
          {/* Backdrop overlay for mobile */}
          {filterOpen && (
            <div className={styles.backdrop} onClick={() => setFilterOpen(false)} />
          )}

          {/* Sidebar / Filters */}
          <aside className={`${styles.sidebar} ${filterOpen ? styles.sidebarOpen : ''}`}>
            {/* Mobile close button */}
            <div className={styles.sidebarHeader}>
              <h2 className={styles.sidebarHeading}>Filters</h2>
              <button 
                className={styles.closeBtn} 
                onClick={() => setFilterOpen(false)}
                aria-label="Close filters"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Search</h3>
              <div className={styles.searchWrapper}>
                <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input 
                  type="text" 
                  placeholder="Find your style..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Categories</h3>
              <ul className={styles.categoryList}>
                {CATEGORIES.map(cat => (
                  <li key={cat}>
                    <button 
                      className={`${styles.categoryBtn} ${activeCategory === cat ? styles.activeCategory : ''}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                      {activeCategory === cat && (
                        <span className={styles.activeIndicator} />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.filterGroup}>
              <h3 className={styles.filterTitle}>Sort By Price</h3>
              <select 
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className={styles.selectInput}
              >
                <option value="none">Recommended</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
              </select>
            </div>
            

            {/* Mobile apply button */}
            <button 
              className={styles.applyBtn} 
              onClick={() => setFilterOpen(false)}
            >
              Show {filteredProducts.length} Results
            </button>
          </aside>

          {/* Main Products Area */}
          <main className={styles.mainContent}>
            <div className={styles.resultsHeader}>
              <span>Showing {filteredProducts.length} results</span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className={styles.productGrid}>
                {filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className={styles.productCard}
                    onClick={() => setSelectedProduct(product)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className={styles.imageContainer}>
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill
                        className={styles.productImage}
                        style={{ objectFit: 'cover' }}
                      />
                      <div className={styles.badge}>{product.category}</div>
                    </div>
                    
                    <div className={styles.productInfo}>
                      <div className={styles.rating}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--clr-blue)" stroke="var(--clr-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        <span>{product.rating}</span>
                      </div>
                      <h3 className={styles.productName}>{product.name}</h3>
                      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--clr-muted)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <h3>No products found</h3>
                <p>Try adjusting your search or filters to find what you&apos;re looking for.</p>
                <button 
                  className={styles.resetBtn}
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                    setPriceSort('none');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
      
      {/* Product Details Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </section>
  );
}
