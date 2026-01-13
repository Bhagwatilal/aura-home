import { motion } from 'framer-motion';
import { Truck, Clock, MapPin, Package } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="container-luxury py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              Shipping Policy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our shipping process and delivery times.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* Shipping Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Truck className="w-6 h-6 text-accent" />
                <h2 className="font-serif text-2xl text-foreground">Shipping Options</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <div>
                    <p className="font-medium text-foreground">Standard Shipping</p>
                    <p className="text-sm text-muted-foreground">5-7 business days</p>
                  </div>
                  <p className="text-foreground">₹99 (Free above ₹1,999)</p>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <div>
                    <p className="font-medium text-foreground">Express Shipping</p>
                    <p className="text-sm text-muted-foreground">2-3 business days</p>
                  </div>
                  <p className="text-foreground">₹199</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-foreground">Same Day Delivery</p>
                    <p className="text-sm text-muted-foreground">Available in select cities</p>
                  </div>
                  <p className="text-foreground">₹299</p>
                </div>
              </div>
            </motion.div>

            {/* Processing Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-accent" />
                <h2 className="font-serif text-2xl text-foreground">Processing Time</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All orders are processed within 1-2 business days. Orders placed on weekends or
                  holidays will be processed on the next business day.
                </p>
                <p>
                  You will receive a confirmation email with your order details once your order
                  has been placed, and another email with tracking information once your order
                  has been shipped.
                </p>
              </div>
            </motion.div>

            {/* Delivery Areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-accent" />
                <h2 className="font-serif text-2xl text-foreground">Delivery Areas</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We currently ship to all major cities and towns across India. Delivery to remote
                  areas may take an additional 2-3 business days.
                </p>
                <p>
                  <strong className="text-foreground">Same Day Delivery Available in:</strong>
                  <br />
                  Mumbai, Delhi NCR, Bangalore, Hyderabad, Chennai, Pune, Kolkata, Ahmedabad
                </p>
              </div>
            </motion.div>

            {/* Packaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-6 h-6 text-accent" />
                <h2 className="font-serif text-2xl text-foreground">Safe Packaging</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We take great care in packaging your items to ensure they arrive in perfect
                  condition. All fragile items are wrapped in bubble wrap and placed in sturdy
                  boxes with additional padding.
                </p>
                <p>
                  For eco-conscious customers, we use recyclable and biodegradable packaging
                  materials wherever possible.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingPolicy;
