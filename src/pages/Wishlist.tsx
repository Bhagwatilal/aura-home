import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useWishlist } from '@/context/WishlistContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart(item);
    removeFromWishlist(item.id);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-20">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-secondary/50 flex items-center justify-center">
                <Heart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                Your Wishlist is Empty
              </h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Save your favorite items here by clicking the heart icon on products you love.
              </p>
              <Link to="/">
                <Button className="btn-accent">
                  Explore Products
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-foreground">
              My Wishlist
            </h1>
            <p className="text-muted-foreground mt-2">{items.length} items saved</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-secondary">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 p-3 glass-card"
                    >
                      <Trash2 className="w-5 h-5 text-foreground hover:text-destructive transition-colors" />
                    </motion.button>
                    {item.isSale && (
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium uppercase tracking-wider bg-accent text-accent-foreground rounded-full">
                        Sale
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{item.category}</p>
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.name}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-medium text-foreground">₹{item.price.toLocaleString()}</span>
                    {item.originalPrice && (
                      <span className="text-muted-foreground line-through text-sm">
                        ₹{item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAddToCart(item)}
                    className="w-full py-3 glass-card flex items-center justify-center gap-2 font-medium text-sm hover:bg-foreground hover:text-background transition-colors"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
