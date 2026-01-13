import { motion } from 'framer-motion';
import { RotateCcw, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ReturnsPolicy = () => {
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
              Returns & Refund Policy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We want you to be completely satisfied with your purchase. Here's our return policy.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* Return Window */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <RotateCcw className="w-6 h-6 text-accent" />
                <h2 className="font-serif text-2xl text-foreground">7-Day Easy Returns</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  We offer a hassle-free 7-day return policy. If you're not completely satisfied
                  with your purchase, you can return it within 7 days of delivery for a full
                  refund or exchange.
                </p>
                <p>
                  Items must be unused, in their original packaging, and in the same condition
                  that you received them.
                </p>
              </div>
            </motion.div>

            {/* Eligible Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h2 className="font-serif text-2xl text-foreground">Eligible for Returns</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Unused items in original packaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Items with manufacturing defects</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Damaged items (must be reported within 48 hours of delivery)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                  <span>Wrong items received</span>
                </li>
              </ul>
            </motion.div>

            {/* Non-Returnable Items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-6 h-6 text-red-500" />
                <h2 className="font-serif text-2xl text-foreground">Non-Returnable Items</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>Customized or personalized items</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>Items marked as "Final Sale" or "Non-Returnable"</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>Used or damaged items (damage caused after delivery)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <span>Items without original packaging or tags</span>
                </li>
              </ul>
            </motion.div>

            {/* Refund Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-accent" />
                <h2 className="font-serif text-2xl text-foreground">Refund Process</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Step 1:</strong> Initiate return from your
                  account or contact customer support.
                </p>
                <p>
                  <strong className="text-foreground">Step 2:</strong> We'll arrange a pickup
                  from your location (free for defective/wrong items).
                </p>
                <p>
                  <strong className="text-foreground">Step 3:</strong> Once we receive and
                  inspect the item, we'll process your refund.
                </p>
                <p>
                  <strong className="text-foreground">Step 4:</strong> Refund will be credited
                  to your original payment method within 5-7 business days.
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

export default ReturnsPolicy;
