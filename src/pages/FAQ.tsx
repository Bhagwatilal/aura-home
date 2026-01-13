import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    category: 'Orders & Shipping',
    questions: [
      {
        q: 'How long does shipping take?',
        a: 'Standard shipping within India takes 5-7 business days. Express shipping is available for 2-3 business days delivery. Remote areas may take an additional 2-3 days.',
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Yes! We offer free standard shipping on all orders above ₹1,999. Orders below this amount have a flat shipping fee of ₹99.',
      },
      {
        q: 'Can I track my order?',
        a: 'Absolutely! Once your order is shipped, you will receive a tracking number via email and SMS. You can also track your order from the "Track Order" page on our website.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Currently, we only ship within India. We are working on expanding our shipping to other countries. Stay tuned for updates!',
      },
    ],
  },
  {
    category: 'Returns & Refunds',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 7-day easy return policy. If you are not satisfied with your purchase, you can return it within 7 days of delivery for a full refund or exchange.',
      },
      {
        q: 'How do I initiate a return?',
        a: 'You can initiate a return from your account page under "Order History" or contact our customer support. We will arrange a pickup from your location.',
      },
      {
        q: 'When will I receive my refund?',
        a: 'Refunds are processed within 5-7 business days after we receive the returned item. The amount will be credited to your original payment method.',
      },
      {
        q: 'Are there any items that cannot be returned?',
        a: 'Customized or personalized items, items marked as final sale, and items that have been damaged after delivery cannot be returned.',
      },
    ],
  },
  {
    category: 'Products & Care',
    questions: [
      {
        q: 'Are your products handmade?',
        a: 'Many of our products are handcrafted by skilled artisans. Each product description mentions whether it is handmade or machine-made.',
      },
      {
        q: 'How do I care for my home décor items?',
        a: 'Care instructions vary by product. Generally, dust regularly with a soft cloth, avoid direct sunlight for fabric items, and keep away from moisture. Specific care instructions are included with each product.',
      },
      {
        q: 'Do you offer gift wrapping?',
        a: 'Yes! We offer premium gift wrapping for ₹149. You can select this option at checkout and also include a personalized message.',
      },
    ],
  },
  {
    category: 'Payment & Security',
    questions: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit/debit cards (Visa, MasterCard, Rupay), UPI, net banking, and popular wallets like Paytm, PhonePe, and Google Pay. We also offer Cash on Delivery (COD) for orders up to ₹10,000.',
      },
      {
        q: 'Is my payment information secure?',
        a: 'Yes, absolutely! We use industry-standard SSL encryption and partner with trusted payment gateways to ensure your payment information is always secure.',
      },
      {
        q: 'Do you offer EMI options?',
        a: 'Yes, we offer No-Cost EMI on orders above ₹3,000 for select credit cards. EMI options will be displayed at checkout.',
      },
    ],
  },
];

const FAQ = () => {
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
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about orders, shipping, returns, and more.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="mb-8"
              >
                <h2 className="font-serif text-2xl text-foreground mb-4">
                  {section.category}
                </h2>
                <div className="glass-card rounded-2xl overflow-hidden">
                  <Accordion type="single" collapsible>
                    {section.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${sectionIndex}-${index}`}>
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-secondary/50">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4 text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
