import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

import categoryWallDecor from '@/assets/category-wall-decor.jpg';
import categoryPlants from '@/assets/category-plants.jpg';
import categoryLighting from '@/assets/category-lighting.jpg';
import categoryDecorAccents from '@/assets/category-decor-accents.jpg';

const collections = [
  {
    title: 'Wall Decor',
    description: 'Art, mirrors & tapestries',
    images: [
      categoryWallDecor,
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800',
      'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=800',
    ],
    items: 48,
    slug: 'wall-decor',
  },
  {
    title: 'Plants & Greenery',
    description: 'Bring nature indoors',
    images: [
      categoryPlants,
      'https://images.unsplash.com/photo-1614594975525-e45c8f8e6ac4?w=800',
      'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800',
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800',
    ],
    items: 36,
    slug: 'plants-greenery',
  },
  {
    title: 'Lighting & Ambience',
    description: 'Illuminate with elegance',
    images: [
      categoryLighting,
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800',
    ],
    items: 42,
    slug: 'lighting-ambience',
  },
  {
    title: 'Decor Accents',
    description: 'Finishing touches for every room',
    images: [
      categoryDecorAccents,
      'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800',
      'https://images.unsplash.com/photo-1602523961358-f9f03a97d2e7?w=800',
      'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800',
    ],
    items: 54,
    slug: 'decor-accents',
  },
];

interface CollectionType {
  title: string;
  description: string;
  images: string[];
  items: number;
  slug: string;
}

const CollectionCard = ({
  collection,
  index,
}: {
  collection: CollectionType;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = useCallback(() => {
    if (collection.images.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % collection.images.length);
    }, 1500);
  }, [collection.images.length]);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isHovered && collection.images.length > 1) {
      startAutoScroll();
    } else {
      stopAutoScroll();
      setCurrentImageIndex(0);
    }
    return () => stopAutoScroll();
  }, [isHovered, startAutoScroll, stopAutoScroll, collection.images.length]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    stopAutoScroll();
    setCurrentImageIndex((prev) => (prev - 1 + collection.images.length) % collection.images.length);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    stopAutoScroll();
    setCurrentImageIndex((prev) => (prev + 1) % collection.images.length);
  };

  const goToIndex = (e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    e.stopPropagation();
    stopAutoScroll();
    setCurrentImageIndex(idx);
  };

  return (
    <Link to={`/category/${collection.slug}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.15 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative group cursor-pointer overflow-hidden rounded-3xl ${
          index === 0 ? 'md:col-span-2 md:row-span-2' : ''
        }`}
      >
        <div className="aspect-square md:aspect-auto md:h-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={collection.images[currentImageIndex]}
              alt={collection.title}
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

          {/* Navigation Arrows */}
          {collection.images.length > 1 && isHovered && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </motion.button>
            </>
          )}

          {/* Dots Indicator */}
          {collection.images.length > 1 && (
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {collection.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => goToIndex(e, idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentImageIndex
                      ? 'bg-primary-foreground w-5'
                      : 'bg-primary-foreground/50 hover:bg-primary-foreground/70'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-primary-foreground/70 text-sm font-medium mb-2">
              {collection.items} Items
            </p>
            <h3 className="font-serif text-2xl md:text-3xl text-primary-foreground mb-2">
              {collection.title}
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              {collection.description}
            </p>
            <motion.span
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-primary-foreground font-medium text-sm group/btn"
            >
              Explore
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

const FeaturedCollections = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="collections" className="section-padding bg-background">
      <div className="container-luxury">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-accent mb-4">
            Our Collections
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Curated for Your Home
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully selected collections, each piece chosen for
            its exceptional craftsmanship and timeless design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.title}
              collection={collection}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
