import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Grid3X3, Grid2X2, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Top Rated' },
];

const Category = () => {
  const { slug } = useParams();
  const [gridSize, setGridSize] = useState<'large' | 'small'>('large');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);

  // Find category from slug
  const category = categories.find(
    (c) => c.id === slug || c.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === slug
  );

  // Get products for this category
  const categoryProducts = useMemo(() => {
    let filtered = category
      ? products.filter((p) => p.category === category.name)
      : products;

    // Apply subcategory filter
    if (selectedSubcategories.length > 0) {
      filtered = filtered.filter((p) => selectedSubcategories.includes(p.subcategory));
    }

    // Apply price filter
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'newest':
        return [...filtered].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      case 'rating':
        return [...filtered].sort((a, b) => (b.rating || 0) - (a.rating || 0));
      default:
        return filtered;
    }
  }, [category, sortBy, selectedSubcategories, priceRange]);

  const toggleSubcategory = (subcategory: string) => {
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((s) => s !== subcategory)
        : [...prev, subcategory]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Header */}
        <section className="container-luxury py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-foreground">
                {category ? category.name : 'All Products'}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
              {category ? (
                <>
                  <span className="mr-3">{category.icon}</span>
                  {category.name}
                </>
              ) : (
                'All Products'
              )}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {category
                ? `Explore our beautiful collection of ${category.name.toLowerCase()} to transform your space.`
                : 'Discover our complete collection of premium home décor items.'}
            </p>
          </motion.div>
        </section>

        {/* Filters & Products */}
        <section className="container-luxury pb-20">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm font-medium"
              >
                <Filter className="w-4 h-4" />
                Filters
              </motion.button>
              <span className="text-sm text-muted-foreground">
                {categoryProducts.length} products
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 glass-card rounded-full text-sm font-medium bg-transparent cursor-pointer"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>

              {/* Grid Size Toggle */}
              <div className="hidden md:flex items-center gap-2 glass-card rounded-full p-1">
                <button
                  onClick={() => setGridSize('large')}
                  className={`p-2 rounded-full transition-colors ${
                    gridSize === 'large' ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  <Grid2X2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridSize('small')}
                  className={`p-2 rounded-full transition-colors ${
                    gridSize === 'small' ? 'bg-accent text-accent-foreground' : ''
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="w-64 flex-shrink-0"
              >
                <div className="glass-card rounded-3xl p-6 sticky top-28">
                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="font-medium text-foreground mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/category/${cat.id}`}
                          className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                            cat.id === slug
                              ? 'bg-accent text-accent-foreground'
                              : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                          }`}
                        >
                          {cat.icon} {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Subcategories */}
                  {category && (
                    <div className="mb-6">
                      <h3 className="font-medium text-foreground mb-4">Subcategories</h3>
                      <div className="space-y-2">
                        {category.subcategories.map((sub) => (
                          <label
                            key={sub}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedSubcategories.includes(sub)}
                              onChange={() => toggleSubcategory(sub)}
                              className="rounded border-border"
                            />
                            <span className="text-sm text-muted-foreground">{sub}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Price Range */}
                  <div>
                    <h3 className="font-medium text-foreground mb-4">Price Range</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={priceRange[0]}
                          onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                          className="w-full px-3 py-2 glass-card rounded-lg text-sm"
                          placeholder="Min"
                        />
                        <span className="text-muted-foreground">-</span>
                        <input
                          type="number"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                          className="w-full px-3 py-2 glass-card rounded-lg text-sm"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.aside>
            )}

            {/* Products Grid */}
            <div className="flex-1">
              {categoryProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-muted-foreground">No products found</p>
                </div>
              ) : (
                <div
                  className={`grid gap-8 ${
                    gridSize === 'large'
                      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                      : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
                  }`}
                >
                  {categoryProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <ProductCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        originalPrice={product.originalPrice}
                        image={product.image}
                        category={product.category}
                        isNew={product.isNew}
                        isSale={product.isSale}
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Category;
