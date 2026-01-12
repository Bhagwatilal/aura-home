import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search as SearchIcon, X, SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { searchProducts, products, categories, Product } from '@/data/products';
import { Input } from '@/components/ui/input';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'newest' | 'popular'>('popular');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (query) {
      let filtered = searchProducts(query);
      if (selectedCategory) {
        filtered = filtered.filter((p) => p.category === selectedCategory);
      }
      // Sort
      switch (sortBy) {
        case 'price-asc':
          filtered.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filtered.sort((a, b) => b.price - a.price);
          break;
        case 'newest':
          filtered = filtered.filter((p) => p.isNew).concat(filtered.filter((p) => !p.isNew));
          break;
        case 'popular':
          filtered.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
          break;
      }
      setResults(filtered);
    } else {
      let allProducts = [...products];
      if (selectedCategory) {
        allProducts = allProducts.filter((p) => p.category === selectedCategory);
      }
      setResults(allProducts);
    }
  }, [query, selectedCategory, sortBy]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(query ? { q: query } : {});
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container-luxury">
          {/* Search Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-8">
              Search Products
            </h1>
            <form onSubmit={handleSearch} className="relative max-w-2xl">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for vases, lamps, plants..."
                className="pl-12 pr-12 py-6 text-lg glass-card border-0 focus-visible:ring-accent"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setSearchParams({});
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary rounded-full"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              )}
            </form>
          </motion.div>

          {/* Filters & Sort */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-8 items-center justify-between"
          >
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 glass-card text-sm font-medium"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  !selectedCategory
                    ? 'bg-foreground text-background'
                    : 'glass-card hover:bg-secondary'
                }`}
              >
                All
              </button>
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat.name
                      ? 'bg-foreground text-background'
                      : 'glass-card hover:bg-secondary'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-2 glass-card text-sm font-medium bg-transparent border-0 cursor-pointer"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </motion.div>

          {/* Extended Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="glass-card p-6 mb-8 overflow-hidden"
              >
                <h3 className="font-medium text-foreground mb-4">All Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(selectedCategory === cat.name ? null : cat.name);
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === cat.name
                          ? 'bg-accent text-accent-foreground'
                          : 'bg-secondary hover:bg-secondary/80'
                      }`}
                    >
                      {cat.icon} {cat.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              {results.length} {results.length === 1 ? 'product' : 'products'} found
              {query && ` for "${query}"`}
            </p>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <SearchIcon className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="font-serif text-2xl text-foreground mb-2">No products found</h2>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
