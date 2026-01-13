import { motion } from 'framer-motion';
import { Heart, Award, Truck, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const values = [
  {
    icon: Heart,
    title: 'Passion for Design',
    description:
      'We are passionate about bringing beautiful, thoughtfully designed home décor to every home.',
  },
  {
    icon: Award,
    title: 'Quality First',
    description:
      'Every piece we offer is carefully selected and quality-checked to meet our high standards.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description:
      'We ensure safe packaging and timely delivery so your items arrive in perfect condition.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description:
      'Your satisfaction is our priority. Our team is always here to help with any queries.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="container-luxury py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              About Bhagwati Décor Hub
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transforming houses into homes with carefully curated décor pieces since 2015.
            </p>
          </motion.div>

          {/* Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Bhagwati Décor Hub was born from a simple belief: every home deserves to be
                  beautiful. What started as a small family business in Mumbai has grown into a
                  trusted destination for home décor enthusiasts across India.
                </p>
                <p>
                  Our founder, Mrs. Bhagwati Sharma, began curating unique décor pieces from
                  local artisans in 2015. Her vision was to bridge the gap between traditional
                  craftsmanship and modern design sensibilities, making premium home décor
                  accessible to everyone.
                </p>
                <p>
                  Today, we collaborate with over 100 artisans and designers, bringing you an
                  exclusive collection of wall art, plants, lighting, textiles, and decorative
                  accents. Each piece in our collection tells a story and is chosen to help you
                  create spaces that reflect your personality.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-3xl overflow-hidden aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"
                alt="Our Store"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do at Bhagwati Décor Hub.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-medium text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-12"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-serif text-4xl text-accent mb-2">8+</p>
                <p className="text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-accent mb-2">50K+</p>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-accent mb-2">100+</p>
                <p className="text-muted-foreground">Artisan Partners</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-accent mb-2">5000+</p>
                <p className="text-muted-foreground">Products Delivered</p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
