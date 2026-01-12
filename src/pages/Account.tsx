import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Package, Heart, MapPin, CreditCard, Settings, LogOut, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const menuItems = [
  { icon: User, label: 'Profile', id: 'profile' },
  { icon: Package, label: 'Orders', id: 'orders' },
  { icon: Heart, label: 'Wishlist', id: 'wishlist', link: '/wishlist' },
  { icon: MapPin, label: 'Addresses', id: 'addresses' },
  { icon: CreditCard, label: 'Payment Methods', id: 'payments' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

const mockOrders = [
  {
    id: 'ORD-001',
    date: '2024-01-10',
    status: 'Delivered',
    total: 4999,
    items: 3,
  },
  {
    id: 'ORD-002',
    date: '2024-01-05',
    status: 'In Transit',
    total: 2499,
    items: 2,
  },
];

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <div className="text-center mb-12">
                <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
                  Welcome Back
                </h1>
                <p className="text-muted-foreground">
                  Sign in to access your account
                </p>
              </div>

              <form onSubmit={handleLogin} className="glass-card p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="bg-secondary/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Password
                  </label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-secondary/50"
                    required
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-muted-foreground">Remember me</span>
                  </label>
                  <a href="#" className="text-accent hover:underline">
                    Forgot password?
                  </a>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-accent"
                >
                  Sign In
                </motion.button>
                <p className="text-center text-muted-foreground text-sm">
                  Don't have an account?{' '}
                  <a href="#" className="text-accent hover:underline">
                    Create one
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-2xl text-foreground mb-6">Personal Information</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <Input defaultValue="Rahul" className="bg-secondary/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <Input defaultValue="Sharma" className="bg-secondary/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <Input defaultValue="rahul@example.com" className="bg-secondary/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <Input defaultValue="+91 98765 43210" className="bg-secondary/50" />
                </div>
              </div>
            </div>
            <Button className="btn-accent">Save Changes</Button>
          </motion.div>
        );

      case 'orders':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-serif text-2xl text-foreground mb-6">Order History</h2>
            <div className="space-y-4">
              {mockOrders.map((order) => (
                <div
                  key={order.id}
                  className="glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-medium text-foreground">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {order.status}
                    </span>
                    <span className="font-semibold text-foreground">₹{order.total.toLocaleString()}</span>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'addresses':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="font-serif text-2xl text-foreground mb-6">Saved Addresses</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="glass-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded">
                    Default
                  </span>
                </div>
                <p className="font-medium text-foreground">Home</p>
                <p className="text-muted-foreground text-sm mt-2">
                  123, Sector 15, Noida<br />
                  Uttar Pradesh - 201301<br />
                  India
                </p>
              </div>
              <button className="glass-card p-6 border-2 border-dashed border-border hover:border-accent transition-colors flex items-center justify-center text-muted-foreground">
                + Add New Address
              </button>
            </div>
          </motion.div>
        );

      default:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">This section is coming soon.</p>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-luxury">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-foreground mb-12"
          >
            My Account
          </motion.h1>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="glass-card p-6 mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                    <User className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Rahul Sharma</p>
                    <p className="text-sm text-muted-foreground">rahul@example.com</p>
                  </div>
                </div>
                <nav className="space-y-2">
                  {menuItems.map((item) =>
                    item.link ? (
                      <Link
                        key={item.id}
                        to={item.link}
                        className="flex items-center gap-3 p-3 rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${
                          activeTab === item.id
                            ? 'bg-accent text-accent-foreground'
                            : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    )
                  )}
                </nav>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-destructive hover:bg-destructive/10 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Sign Out</span>
              </button>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-3 glass-card p-8">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Account;
