import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Truck, Shield, Repeat, Gift } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $150',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% protected checkout',
  },
  {
    icon: Repeat,
    title: 'Easy Returns',
    description: '30-day return policy',
  },
  {
    icon: Gift,
    title: 'Gift Wrapping',
    description: 'Complimentary service',
  },
];

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 border-y border-border">
      <div className="container-luxury">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center"
              >
                <feature.icon className="w-6 h-6 text-accent" />
              </motion.div>
              <h3 className="font-medium text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
