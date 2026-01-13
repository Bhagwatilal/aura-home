import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Last updated: January 13, 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert"
          >
            <div className="glass-card rounded-2xl p-8 space-y-8">
              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, such as when you create an
                  account, make a purchase, subscribe to our newsletter, or contact us for support.
                </p>
                <ul className="text-muted-foreground list-disc pl-6 mt-4 space-y-2">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Shipping and billing addresses</li>
                  <li>Payment information (processed securely by our payment partners)</li>
                  <li>Order history and preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground">We use the information we collect to:</p>
                <ul className="text-muted-foreground list-disc pl-6 mt-4 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Respond to your questions and provide customer support</li>
                  <li>Send promotional emails (you can opt out anytime)</li>
                  <li>Improve our website and services</li>
                  <li>Detect and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Information Sharing
                </h2>
                <p className="text-muted-foreground">
                  We do not sell, trade, or rent your personal information to third parties. We
                  may share your information with:
                </p>
                <ul className="text-muted-foreground list-disc pl-6 mt-4 space-y-2">
                  <li>Shipping partners to deliver your orders</li>
                  <li>Payment processors to handle transactions</li>
                  <li>Service providers who assist our operations</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your personal
                  information. All payment transactions are encrypted using SSL technology. However,
                  no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground">You have the right to:</p>
                <ul className="text-muted-foreground list-disc pl-6 mt-4 space-y-2">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  <br />
                  Email: privacy@bhagwatidecor.com
                  <br />
                  Phone: +91 98765 43210
                </p>
              </section>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
