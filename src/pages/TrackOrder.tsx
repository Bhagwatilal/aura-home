import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Package, Truck, CheckCircle, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const TrackOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [trackingResult, setTrackingResult] = useState<null | 'found' | 'not_found'>(null);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo tracking - in real app, this would call an API
    if (orderId.length > 0) {
      setTrackingResult(orderId.toLowerCase().startsWith('bdh') ? 'found' : 'not_found');
    }
  };

  const trackingSteps = [
    { status: 'completed', label: 'Order Placed', date: 'Jan 10, 2026 - 10:30 AM', icon: Package },
    { status: 'completed', label: 'Processing', date: 'Jan 10, 2026 - 2:15 PM', icon: Package },
    { status: 'completed', label: 'Shipped', date: 'Jan 11, 2026 - 9:00 AM', icon: Truck },
    { status: 'current', label: 'Out for Delivery', date: 'Jan 13, 2026 - 8:30 AM', icon: MapPin },
    { status: 'pending', label: 'Delivered', date: 'Expected Today', icon: CheckCircle },
  ];

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
              Track Your Order
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enter your order ID to track the status of your delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl mx-auto"
          >
            <form onSubmit={handleTrack} className="glass-card rounded-2xl p-8">
              <div className="flex gap-4">
                <Input
                  type="text"
                  placeholder="Enter Order ID (e.g., BDH123456)"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit" className="btn-accent">
                  <Search className="w-4 h-4 mr-2" />
                  Track
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Your order ID can be found in your order confirmation email.
              </p>
            </form>
          </motion.div>

          {/* Tracking Result */}
          {trackingResult === 'found' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto mt-12"
            >
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Order ID</p>
                    <p className="font-medium text-foreground">{orderId.toUpperCase()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                    <p className="font-medium text-accent">Today, by 6:00 PM</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                  {trackingSteps.map((step, index) => (
                    <div key={step.label} className="flex gap-4 mb-6 last:mb-0">
                      <div className="relative">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step.status === 'completed'
                              ? 'bg-green-500 text-white'
                              : step.status === 'current'
                              ? 'bg-accent text-accent-foreground'
                              : 'bg-secondary text-muted-foreground'
                          }`}
                        >
                          <step.icon className="w-5 h-5" />
                        </div>
                        {index < trackingSteps.length - 1 && (
                          <div
                            className={`absolute left-1/2 top-10 w-0.5 h-12 -translate-x-1/2 ${
                              step.status === 'completed' ? 'bg-green-500' : 'bg-secondary'
                            }`}
                          />
                        )}
                      </div>
                      <div className="pt-2">
                        <p
                          className={`font-medium ${
                            step.status === 'pending' ? 'text-muted-foreground' : 'text-foreground'
                          }`}
                        >
                          {step.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {trackingResult === 'not_found' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto mt-12 text-center"
            >
              <div className="glass-card rounded-2xl p-8">
                <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-serif text-xl text-foreground mb-2">Order Not Found</h3>
                <p className="text-muted-foreground">
                  We couldn't find an order with that ID. Please check your order confirmation
                  email and try again.
                </p>
              </div>
            </motion.div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TrackOrder;
