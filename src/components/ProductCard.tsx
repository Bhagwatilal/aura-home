import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
  product?: Product;
  id?: string | number;
  name?: string;
  price?: number;
  originalPrice?: number;
  image?: string;
  images?: string[];
  category?: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = (props: ProductCardProps) => {
  const product = props.product;
  const name = product?.name ?? props.name ?? '';
  const price = product?.price ?? props.price ?? 0;
  const originalPrice = product?.originalPrice ?? props.originalPrice;
  const image = product?.image ?? props.image ?? '';
  const images = product?.images ?? props.images ?? [image];
  const category = product?.category ?? props.category ?? '';
  const isNew = product?.isNew ?? props.isNew;
  const isSale = product?.isSale ?? props.isSale;
  const productId = product?.id ?? String(props.id);

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isWishlisted = isInWishlist(productId);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const allImages = images.length > 0 ? images : [image];

  const startAutoScroll = useCallback(() => {
    if (allImages.length <= 1) return;
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 1200);
  }, [allImages.length]);

  const stopAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isHovered && allImages.length > 1) {
      startAutoScroll();
    } else {
      stopAutoScroll();
      setCurrentImageIndex(0);
    }
    return () => stopAutoScroll();
  }, [isHovered, startAutoScroll, stopAutoScroll, allImages.length]);

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    stopAutoScroll();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    stopAutoScroll();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const goToIndex = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    stopAutoScroll();
    setCurrentImageIndex(index);
  };

  return (
    <Link to={`/product/${productId}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 bg-secondary">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={allImages[currentImageIndex]}
              alt={name}
              className="w-full h-full object-cover absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Image Navigation Arrows */}
          {allImages.length > 1 && isHovered && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors z-10"
              >
                <ChevronLeft className="w-4 h-4 text-foreground" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors z-10"
              >
                <ChevronRight className="w-4 h-4 text-foreground" />
              </motion.button>
            </>
          )}

          {/* Image Dots Indicator */}
          {allImages.length > 1 && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToIndex(e, index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? 'bg-foreground w-4'
                      : 'bg-foreground/40 hover:bg-foreground/60'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isNew && (
              <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-foreground text-background rounded-full">
                New
              </span>
            )}
            {isSale && (
              <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-accent text-accent-foreground rounded-full">
                Sale
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (product) {
                isWishlisted ? removeFromWishlist(productId) : addToWishlist(product);
              }
            }}
            className="absolute top-4 right-4 p-3 glass-card z-10"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isWishlisted ? 'fill-accent text-accent' : 'text-foreground'
              }`}
            />
          </motion.button>

          {/* Add to Cart Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 left-4 right-4 z-10"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (product) addToCart(product);
              }}
              className="w-full py-4 glass-card flex items-center justify-center gap-2 font-medium text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </motion.button>
          </motion.div>
        </div>

        {/* Product Info */}
        <div>
          <p className="text-sm text-muted-foreground mb-1">{category}</p>
          <h3 className="font-serif text-lg text-foreground mb-2 group-hover:text-accent transition-colors">
            {name}
          </h3>
          <div className="flex items-center gap-3">
            <span className="font-medium text-foreground">
              ₹{price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-muted-foreground line-through text-sm">
                ₹{originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
