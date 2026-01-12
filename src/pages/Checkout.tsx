import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CreditCard, Truck, Package, ArrowLeft, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { Input } from '@/components/ui/input';

const steps = [
  { id: 1, name: 'Shipping', icon: Truck },
  { id: 2, name: 'Payment', icon: CreditCard },
  { id: 3, name: 'Confirm', icon: Package },
];

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cod'>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const totalWithTax = Math.round(totalPrice * 1.18);

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
    }, 2000);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-2xl text-foreground mb-6">Shipping Address</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                <Input
                  value={shippingInfo.firstName}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                  className="bg-secondary/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                <Input
                  value={shippingInfo.lastName}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                  className="bg-secondary/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  value={shippingInfo.email}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                  className="bg-secondary/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <Input
                  type="tel"
                  value={shippingInfo.phone}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                  className="bg-secondary/50"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                <Input
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                  className="bg-secondary/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">City</label>
                <Input
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                  className="bg-secondary/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">State</label>
                <Input
                  value={shippingInfo.state}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                  className="bg-secondary/50"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">PIN Code</label>
                <Input
                  value={shippingInfo.pincode}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, pincode: e.target.value })}
                  className="bg-secondary/50"
                  required
                />
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentStep(2)}
              className="btn-accent w-full sm:w-auto"
            >
              Continue to Payment
            </motion.button>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-2xl text-foreground mb-6">Payment Method</h2>
            <div className="space-y-4">
              <label
                className={`glass-card p-6 flex items-center gap-4 cursor-pointer transition-all ${
                  paymentMethod === 'card' ? 'ring-2 ring-accent' : ''
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                  className="w-5 h-5 accent-accent"
                />
                <CreditCard className="w-6 h-6 text-foreground" />
                <div>
                  <p className="font-medium text-foreground">Credit / Debit Card</p>
                  <p className="text-sm text-muted-foreground">Pay securely with your card</p>
                </div>
              </label>

              <label
                className={`glass-card p-6 flex items-center gap-4 cursor-pointer transition-all ${
                  paymentMethod === 'upi' ? 'ring-2 ring-accent' : ''
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                  className="w-5 h-5 accent-accent"
                />
                <div className="w-6 h-6 bg-foreground text-background text-xs font-bold flex items-center justify-center rounded">
                  UPI
                </div>
                <div>
                  <p className="font-medium text-foreground">UPI Payment</p>
                  <p className="text-sm text-muted-foreground">Google Pay, PhonePe, Paytm, etc.</p>
                </div>
              </label>

              <label
                className={`glass-card p-6 flex items-center gap-4 cursor-pointer transition-all ${
                  paymentMethod === 'cod' ? 'ring-2 ring-accent' : ''
                }`}
              >
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === 'cod'}
                  onChange={() => setPaymentMethod('cod')}
                  className="w-5 h-5 accent-accent"
                />
                <Package className="w-6 h-6 text-foreground" />
                <div>
                  <p className="font-medium text-foreground">Cash on Delivery</p>
                  <p className="text-sm text-muted-foreground">Pay when you receive your order</p>
                </div>
              </label>
            </div>

            {paymentMethod === 'card' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="space-y-4 pt-4"
              >
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
                  <Input placeholder="1234 5678 9012 3456" className="bg-secondary/50" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
                    <Input placeholder="MM/YY" className="bg-secondary/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
                    <Input placeholder="123" className="bg-secondary/50" />
                  </div>
                </div>
              </motion.div>
            )}

            <div className="flex gap-4">
              <button onClick={() => setCurrentStep(1)} className="btn-luxury-outline">
                Back
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setCurrentStep(3)}
                className="btn-accent"
              >
                Review Order
              </motion.button>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-2xl text-foreground mb-6">Review Your Order</h2>

            <div className="glass-card p-6 space-y-4">
              <h3 className="font-medium text-foreground">Shipping Address</h3>
              <p className="text-muted-foreground">
                {shippingInfo.firstName} {shippingInfo.lastName}<br />
                {shippingInfo.address}<br />
                {shippingInfo.city}, {shippingInfo.state} - {shippingInfo.pincode}<br />
                Phone: {shippingInfo.phone}
              </p>
            </div>

            <div className="glass-card p-6 space-y-4">
              <h3 className="font-medium text-foreground">Payment Method</h3>
              <p className="text-muted-foreground capitalize">
                {paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod === 'upi' ? 'UPI Payment' : 'Credit/Debit Card'}
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-medium text-foreground mb-4">Order Items ({items.length})</h3>
              <div className="space-y-4 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium text-foreground">₹{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4" />
              Your payment information is secure and encrypted
            </div>

            <div className="flex gap-4">
              <button onClick={() => setCurrentStep(2)} className="btn-luxury-outline">
                Back
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="btn-accent flex-1 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-accent-foreground border-t-transparent rounded-full"
                    />
                    Processing...
                  </>
                ) : (
                  <>Place Order - ₹{totalWithTax.toLocaleString()}</>
                )}
              </motion.button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-luxury">
          <Link to="/cart" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Cart
          </Link>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{
                        backgroundColor: currentStep >= step.id ? 'hsl(var(--accent))' : 'transparent',
                        borderColor: currentStep >= step.id ? 'hsl(var(--accent))' : 'hsl(var(--border))',
                      }}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors ${
                        currentStep > step.id ? 'bg-accent' : ''
                      }`}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-6 h-6 text-accent-foreground" />
                      ) : (
                        <step.icon
                          className={`w-5 h-5 ${
                            currentStep >= step.id ? 'text-accent-foreground' : 'text-muted-foreground'
                          }`}
                        />
                      )}
                    </motion.div>
                    <span
                      className={`mt-2 text-sm font-medium ${
                        currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      {step.name}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 md:w-24 h-0.5 mx-4 transition-colors ${
                        currentStep > step.id ? 'bg-accent' : 'bg-border'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Steps */}
            <div className="lg:col-span-2 glass-card p-8">
              <AnimatePresence mode="wait">{renderStepContent()}</AnimatePresence>
            </div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 h-fit sticky top-32"
            >
              <h2 className="font-serif text-2xl text-foreground mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({items.length} items)</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-accent">Free</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Tax (18% GST)</span>
                  <span>₹{Math.round(totalPrice * 0.18).toLocaleString()}</span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between font-semibold text-lg text-foreground">
                  <span>Total</span>
                  <span>₹{totalWithTax.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
