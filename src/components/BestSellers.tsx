import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

const BestSellers = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Get featured products from different categories
  const featuredProducts = products.slice(0, 8);

  return (
    <section id="new-arrivals" className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-4">
              Trending Now
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              Best Sellers
            </h2>
          </div>
          <Link to="/search">
            <motion.span
              whileHover={{ x: 5 }}
              className="text-foreground font-medium link-underline inline-flex items-center gap-2"
            >
              View All Products
              <span className="text-accent">→</span>
            </motion.span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              category={product.category}
              isNew={product.isNew}
              isSale={product.isSale}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
