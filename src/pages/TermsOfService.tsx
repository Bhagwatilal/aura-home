import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Last updated: January 13, 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto"
          >
            <div className="glass-card rounded-2xl p-8 space-y-8">
              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground">
                  By accessing and using the Bhagwati Décor Hub website, you accept and agree to be
                  bound by these Terms of Service. If you do not agree to these terms, please do
                  not use our website.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">Use of Website</h2>
                <p className="text-muted-foreground">You agree to:</p>
                <ul className="text-muted-foreground list-disc pl-6 mt-4 space-y-2">
                  <li>Use the website only for lawful purposes</li>
                  <li>Not interfere with the website's operation</li>
                  <li>Not attempt to gain unauthorized access</li>
                  <li>Provide accurate information when making purchases</li>
                  <li>Not use the website for fraudulent purposes</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">Products & Pricing</h2>
                <p className="text-muted-foreground">
                  We strive to display accurate product descriptions and pricing. However, we
                  reserve the right to correct any errors. Prices are subject to change without
                  notice. All prices are in Indian Rupees (₹) and include applicable taxes unless
                  otherwise stated.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">Orders & Payment</h2>
                <p className="text-muted-foreground">
                  By placing an order, you are making an offer to purchase products. We reserve the
                  right to refuse or cancel any order for any reason. Payment must be received in
                  full before order processing.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content on this website, including text, graphics, logos, images, and
                  software, is the property of Bhagwati Décor Hub and is protected by intellectual
                  property laws. You may not reproduce, distribute, or modify any content without
                  our written consent.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  Limitation of Liability
                </h2>
                <p className="text-muted-foreground">
                  Bhagwati Décor Hub shall not be liable for any indirect, incidental, or
                  consequential damages arising from your use of the website or products. Our
                  liability is limited to the amount paid for the specific product in question.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground">
                  These Terms of Service are governed by the laws of India. Any disputes arising
                  from these terms shall be subject to the exclusive jurisdiction of the courts in
                  Mumbai, Maharashtra.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground">
                  We may update these Terms of Service from time to time. Any changes will be posted
                  on this page with an updated revision date. Your continued use of the website
                  after any changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="font-serif text-2xl text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground">
                  For any questions regarding these Terms of Service, please contact us at:
                  <br />
                  <br />
                  Email: legal@bhagwatidecor.com
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

export default TermsOfService;
