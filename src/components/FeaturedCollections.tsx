import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import categoryWallDecor from '@/assets/category-wall-decor.jpg';
import categoryPlants from '@/assets/category-plants.jpg';
import categoryLighting from '@/assets/category-lighting.jpg';
import categoryDecorAccents from '@/assets/category-decor-accents.jpg';

const collections = [
  {
    title: 'Wall Decor',
    description: 'Art, mirrors & tapestries',
    image: categoryWallDecor,
    items: 48,
    slug: 'wall-decor',
  },
  {
    title: 'Plants & Greenery',
    description: 'Bring nature indoors',
    image: categoryPlants,
    items: 36,
    slug: 'plants-greenery',
  },
  {
    title: 'Lighting & Ambience',
    description: 'Illuminate with elegance',
    image: categoryLighting,
    items: 42,
    slug: 'lighting-ambience',
  },
  {
    title: 'Decor Accents',
    description: 'Finishing touches for every room',
    image: categoryDecorAccents,
    items: 54,
    slug: 'decor-accents',
  },
];

interface CollectionType {
  title: string;
  description: string;
  image: string;
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className={`relative group cursor-pointer overflow-hidden rounded-3xl ${
        index === 0 ? 'md:col-span-2 md:row-span-2' : ''
      }`}
    >
      <div className="aspect-square md:aspect-auto md:h-full relative overflow-hidden">
        <motion.img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
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
          <Link to={`/category/${collection.slug}`}>
            <motion.button
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-primary-foreground font-medium text-sm group/btn"
            >
              Explore
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
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
