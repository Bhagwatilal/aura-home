import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import ProductCard from './ProductCard';

import productCeramicBowl from '@/assets/product-ceramic-bowl.jpg';
import productPendantLamp from '@/assets/product-pendant-lamp.jpg';
import productArmchair from '@/assets/product-armchair.jpg';
import productWovenBasket from '@/assets/product-woven-basket.jpg';

const products = [
  {
    id: 1,
    name: 'Artisan Ceramic Bowl',
    price: 89,
    image: productCeramicBowl,
    category: 'Ceramics',
    isNew: true,
  },
  {
    id: 2,
    name: 'Brass Pendant Lamp',
    price: 349,
    originalPrice: 420,
    image: productPendantLamp,
    category: 'Lighting',
    isSale: true,
  },
  {
    id: 3,
    name: 'Velvet Accent Chair',
    price: 1299,
    image: productArmchair,
    category: 'Furniture',
    isNew: true,
  },
  {
    id: 4,
    name: 'Handwoven Storage Basket',
    price: 145,
    image: productWovenBasket,
    category: 'Accessories',
  },
];

const BestSellers = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

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
          <motion.a
            href="#"
            whileHover={{ x: 5 }}
            className="text-foreground font-medium link-underline inline-flex items-center gap-2"
          >
            View All Products
            <span className="text-accent">→</span>
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
