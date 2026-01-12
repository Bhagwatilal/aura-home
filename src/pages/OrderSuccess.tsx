import { motion } from 'framer-motion';
import { CheckCircle2, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-green-100 flex items-center justify-center"
            >
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl text-foreground mb-4"
            >
              Order Placed!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground mb-8"
            >
              Thank you for shopping with Bhagwati Décor Hub. Your order has been confirmed and will be shipped soon.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6 mb-8"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <Package className="w-6 h-6 text-accent" />
                <p className="text-foreground font-medium">Order #BDH{Date.now().toString().slice(-8)}</p>
              </div>
              <p className="text-sm text-muted-foreground">
                A confirmation email has been sent to your email address.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/account">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-luxury-outline"
                >
                  View Order Details
                </motion.button>
              </Link>
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-accent"
                >
                  Continue Shopping
                  <ArrowRight className="ml-2 w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
