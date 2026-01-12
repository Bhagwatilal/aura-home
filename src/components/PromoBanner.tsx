import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import collectionFurniture from '@/assets/collection-furniture.jpg';

const PromoBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%']);

  return (
    <section ref={containerRef} className="relative overflow-hidden">
      <div className="container-luxury">
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
          {/* Parallax Background */}
          <motion.div style={{ y }} className="absolute inset-0 z-0">
            <img
              src={collectionFurniture}
              alt="Designer furniture"
              className="w-full h-[140%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-gold" />
                <span className="text-sm font-medium tracking-[0.3em] uppercase text-gold">
                  Limited Offer
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 leading-tight">
                Up to 30% Off
                <br />
                Designer Furniture
              </h2>

              <p className="text-primary-foreground/80 text-lg mb-8 max-w-md">
                Transform your living space with our curated selection of
                premium furniture pieces. Limited time only.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 bg-primary-foreground text-foreground font-medium rounded-full hover:shadow-lg transition-all group"
              >
                Shop the Sale
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* Decorative Element */}
          <div className="absolute top-1/2 right-16 -translate-y-1/2 hidden xl:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-40 h-40 rounded-full glass flex items-center justify-center"
            >
              <div className="text-center">
                <span className="block text-4xl font-serif text-foreground">30%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Off</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
