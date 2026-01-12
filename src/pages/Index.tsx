import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FeaturedCollections from '@/components/FeaturedCollections';
import BestSellers from '@/components/BestSellers';
import PromoBanner from '@/components/PromoBanner';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <FeaturedCollections />
        <BestSellers />
        <PromoBanner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
