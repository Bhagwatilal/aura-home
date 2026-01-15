import { motion, useInView, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';

import categoryWallDecor from '@/assets/category-wall-decor.jpg';
import categoryPlants from '@/assets/category-plants.jpg';
import categoryLighting from '@/assets/category-lighting.jpg';
import categoryDecorAccents from '@/assets/category-decor-accents.jpg';
import collectionFurniture from '@/assets/collection-furniture.jpg';
import collectionFurniture2 from '@/assets/collection-furniture-2.jpg';
import collectionTextiles from '@/assets/collection-textiles.jpg';
import collectionTextiles2 from '@/assets/collection-textiles-2.jpg';
import collectionVases from '@/assets/collection-vases.jpg';
import collectionVases2 from '@/assets/collection-vases-2.jpg';
import collectionLighting2 from '@/assets/collection-lighting-2.jpg';

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
    title: 'Furniture',
    description: 'Modern & classic pieces',
    images: [
      collectionFurniture,
      collectionFurniture2,
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800',
    ],
    items: 65,
    slug: 'furniture',
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
    title: 'Textiles',
    description: 'Soft comfort for every space',
    images: [
      collectionTextiles,
      collectionTextiles2,
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800',
    ],
    items: 42,
    slug: 'textiles',
  },
  {
    title: 'Lighting & Ambience',
    description: 'Illuminate with elegance',
    images: [
      categoryLighting,
      collectionLighting2,
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800',
    ],
    items: 42,
    slug: 'lighting-ambience',
  },
  {
    title: 'Vases & Ceramics',
    description: 'Artisan pottery collection',
    images: [
      collectionVases,
      collectionVases2,
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800',
    ],
    items: 38,
    slug: 'decor-accents',
  },
  {
    title: 'Decor Accents',
    description: 'Finishing touches for every room',
    images: [
      categoryDecorAccents,
      'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=800',
      'https://images.unsplash.com/photo-1602523961358-f9f03a97d2e7?w=800',
    ],
    items: 54,
    slug: 'decor-accents',
  },
];

// Bento grid positions - 7 cards layout
const gridPositions = [
  'md:col-span-1 md:row-span-2', // Tall left
  'md:col-span-1 md:row-span-1', // Top middle
  'md:col-span-1 md:row-span-2', // Tall right
  'md:col-span-1 md:row-span-1', // Middle row - left
  'md:col-span-1 md:row-span-1', // Middle row - center
  'md:col-span-1 md:row-span-1', // Bottom row - left
  'md:col-span-1 md:row-span-1', // Bottom row - right (new 7th card)
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
  gridClass,
}: {
  collection: CollectionType;
  index: number;
  gridClass: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Parallax effect for each card
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const isTall = gridClass.includes('row-span-2');

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
    <Link to={`/category/${collection.slug}`} className={gridClass}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative group cursor-pointer overflow-hidden rounded-3xl h-full ${
          isTall ? 'min-h-[450px] md:min-h-[500px]' : 'min-h-[220px] md:min-h-[240px]'
        }`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              style={{ y: parallaxY }}
              className="absolute inset-[-30px]"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={collection.images[currentImageIndex]}
                alt={collection.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

          {/* Navigation Arrows */}
          {collection.images.length > 1 && isHovered && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors z-10"
              >
                <ChevronLeft className="w-4 h-4 text-foreground" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={goToNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors z-10"
              >
                <ChevronRight className="w-4 h-4 text-foreground" />
              </motion.button>
            </>
          )}
        </div>

        <div className={`absolute inset-0 p-5 md:p-6 flex flex-col justify-end`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-primary-foreground/70 text-xs font-medium mb-1">
              {collection.items} Items
            </p>
            <h3 className={`font-serif text-primary-foreground mb-1 ${
              isTall ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
            }`}>
              {collection.title}
            </h3>
            <p className={`text-primary-foreground/80 mb-3 ${
              isTall ? 'text-sm' : 'text-xs'
            }`}>
              {collection.description}
            </p>

            {/* Dots Indicator - Now between description and button */}
            {collection.images.length > 1 && (
              <div className="flex gap-1.5 mb-3">
                {collection.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => goToIndex(e, idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? 'bg-primary-foreground w-4'
                        : 'bg-primary-foreground/50 hover:bg-primary-foreground/70 w-1.5'
                    }`}
                  />
                ))}
              </div>
            )}

            <motion.span
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-1.5 text-primary-foreground font-medium text-xs group/btn"
            >
              Explore
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

const FeaturedCollections = () => {
  const headerRef = useRef(null);
  const sectionRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Parallax for section header
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const headerY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={sectionRef} id="collections" className="section-padding bg-background overflow-hidden">
      <div className="container-luxury">
        <motion.div
          ref={headerRef}
          style={{ y: headerY }}
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

        {/* Bento Grid Layout - 7 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-auto md:grid-rows-[repeat(3,_minmax(240px,_auto))]">
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.title}
              collection={collection}
              index={index}
              gridClass={gridPositions[index] || ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
