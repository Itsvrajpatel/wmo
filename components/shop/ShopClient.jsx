'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import styles from './Shop.module.css';

import ProductModal from './ProductModal';

const PRODUCTS = [
  { id: 1, name: "Skull Print", price: 450, category: "Skull", image: "/assets/shop/skull_front.jpeg", images: ["/assets/shop/skull_front.jpeg", "/assets/shop/skull_back.jpeg"], rating: 4.8, description: "Turn heads with this bold statement t-shirt featuring a striking skull and snake graphic design. Crafted for those who embrace edgy streetwear fashion, this oversized tee blends comfort with attitude.", details: ["100% Premium cotton comfort ", "Relaxed oversized fit", "V Breathable & all-day easy", "Built for bold, everyday looks", "Unisex"] },
  { id: 2, name: "Minion Print", price: 450, category: "Cartoon", image: "/assets/shop/minnion_front.jpeg", images: ["/assets/shop/minnion_front.jpeg", "/assets/shop/minnion_back.jpeg"], rating: 4.9, description: "'Endless Summer' isn’t just a print - it’s a reminder to slow down, chill, and live in the moment. Designed for those who carry summer energy wherever they go.", details: ["100% Premium cotton comfort ", "Relaxed oversized fit", "V Breathable & all-day easy", "Built for bold, everyday looks", "Unisex"] },
  { id: 3, name: "Cat Print", price: 450, category: "Animal", image: "/assets/shop/cat_front.jpeg", images: ["/assets/shop/cat_front.jpeg", "/assets/shop/cat_back.jpeg"], rating: 4.5, description: "Inspired by strength, mystery, and fearless individuality, this design blends a fierce wolf illustration with intricate tribal elements to create a bold visual statement. The detailed artwork represents confidence and instinct - made for those who move with purpose and stand out without trying.", details: ["100% Premium cotton comfort ", "Relaxed oversized fit", "V Breathable & all-day easy", "Built for bold, everyday looks", "Unisex"] },
  { id: 4, name: "Nature Print", price: 450, category: "Nature", image: "/assets/shop/nature_front.jpeg", images: ["/assets/shop/nature_front.jpeg", "/assets/shop/nature_back.jpeg"], rating: 4.5, description: "Inspired by optimism and fresh beginnings, this design captures the feeling of moving forward with a positive mindset. The warm tones, playful typography, and nature elements like sun, clouds, and rainbow come together to symbolize brighter days ahead.", details: ["100% Premium cotton comfort ", "Relaxed oversized fit", "V Breathable & all-day easy", "Built for bold, everyday looks", "Unisex"] },
  { id: 5, name: "Hulk print", price: 450, category: "Cartoon", image: "/assets/shop/hulk_front.jpeg", images: ["/assets/shop/hulk_front.jpeg", "/assets/shop/hulk_back.jpeg"], rating: 4.8, description: "Inspired by raw strength and unstoppable energy, this design captures the moment of breaking through limits. The bold hand graphic emerging with power reflects inner rage, resilience, and transformation - a symbol of pushing past boundaries.", details: ["100% Premium cotton comfort ", "Relaxed oversized fit", "V Breathable & all-day easy", "Built for bold, everyday looks", "Unisex"] },
  { id: 6, name: "Leopard Print", price: 450, category: "Animal", image: "/assets/shop/leopard_front.jpeg", images: ["/assets/shop/leopard_front.jpeg", "/assets/shop/leopard_back.jpeg"], rating: 4.4, description: "Inspired by raw confidence and untamed spirit, this design captures the essence of moving boldly through life. The detailed leopard artwork reflects strength, focus, and quiet dominance - a symbol of staying wild while remaining in control.", details: ["100% Premium cotton comfort ", "Relaxed oversized fit", "V Breathable & all-day easy", "Built for bold, everyday looks", "Unisex"] },
  { id: 7, name: "Popeye Print", price: 450, category: "Cartoon", image: "/assets/shop/popeye_front.jpeg", images: ["/assets/shop/popeye_front.jpeg", "/assets/shop/popeye_back.jpeg"], rating: 4.7, description: "Inspired by classic cartoon strength and timeless confidence, this design brings a playful yet powerful vibe to life. Featuring a bold, nostalgic character graphic paired with vibrant colors, it represents energy, resilience, and a never-give-up attitude.", details: ["100% Premium cotton comfort ", "Relaxed oversized fit", "V Breathable & all-day easy", "Built for bold, everyday looks", "Unisex"] },
  { id: 8, name: "Solid Brand Print", price: 450, category: "Brand", image: "/assets/shop/blue_front.jpeg", images: ["/assets/shop/blue_front.jpeg"], rating: 4.9, description: "Built around a bold and minimal aesthetic, this design focuses on clean typography that speaks confidence without overdoing it. The “Wear Me Out” print reflects a carefree, go-all-in attitude - simple, strong, and effortlessly expressive.", details: ["100% Premium cotton comfort ", "Relaxed oversized fit", "V Breathable & all-day easy", "Built for bold, everyday looks", "Unisex"]}
];

const CATEGORIES = ["All", "Nature", "Animal", "Cartoon", "Skull", "Brand"];


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
                      <p className={styles.productPrice}>₹{product.price.toFixed(2)}</p>
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
