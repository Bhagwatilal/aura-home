import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  category,
  isNew,
  isSale,
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
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
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

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
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-4 right-4 p-3 glass-card"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isWishlisted
                ? 'fill-accent text-accent'
                : 'text-foreground'
            }`}
          />
        </motion.button>

        {/* Add to Cart Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-4 left-4 right-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
            ${price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-muted-foreground line-through text-sm">
              ${originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
