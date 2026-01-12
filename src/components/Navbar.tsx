import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Heart, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

const navLinks = [
  { name: 'Wall Decor', href: '#collections' },
  { name: 'Plants', href: '#collections' },
  { name: 'Lighting', href: '#collections' },
  { name: 'Decor Accents', href: '#collections' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.span
              className="font-serif text-xl md:text-2xl font-semibold text-foreground tracking-tight"
              whileHover={{ scale: 1.02 }}
            >
              Bhagwati Décor Hub
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground link-underline transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <Link to="/search">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/account">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block p-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <User className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link to="/wishlist">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative hidden md:block p-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <Heart className="w-5 h-5" />
                {wishlistItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
                    {wishlistItems}
                  </span>
                )}
              </motion.button>
            </Link>
            <Link to="/cart">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative p-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] font-medium rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-foreground"
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 glass z-50 p-8"
            >
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-foreground"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mt-16 flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-serif text-foreground hover:text-accent transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              <div className="mt-12 flex gap-4">
                <button className="p-3 glass-card text-foreground">
                  <User className="w-5 h-5" />
                </button>
                <button className="p-3 glass-card text-foreground">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
