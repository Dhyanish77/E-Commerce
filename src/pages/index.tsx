import * as React from 'react';
import { type HeadFC, type PageProps } from 'gatsby';
import Layout from '../layouts/Layout';
import CategorySidebar from '../components/CategorySidebar';
import HeroSlider from '../components/HeroSlider';
import ProductSection from '../components/ProductSection';
import rawData from '../data/products.json';
import CategorySlider from '../components/CategorySlider';
import MusicBanner from '../components/MusicBanner';
import OurProducts from '../components/OurProducts';
import FeaturedGrid from '../components/FeaturedGrid';
import ServicesSection from '../components/Services';


const IndexPage: React.FC<PageProps> = () => {
  // make an simple array
  const products: any[] = rawData.products;

  return (
    <Layout>
      <div className="row mb-auto">
        <CategorySidebar />
        <div className="col-12 col-lg-10">
          <HeroSlider />
        </div>
      </div>

      {/* Flash Sales Section (Scrollable) */}
      <div style={{ marginTop: '80px', marginBottom: '80px' }}>
        <ProductSection
          sectionLabel="Today's"
          title="Flash Sales"
          products={products.filter((p: any) => p.discount > 0)}
          viewAllLink="/flash-sale"
          scrollable={true}
        />
      </div>

      <CategorySlider />

      {/* Best Selling Section (Static 4) */}
      <div style={{ marginTop: '80px', marginBottom: '80px' }}>
        <ProductSection
          sectionLabel="This Month"
          title="Best Selling Products"
          products={products}
          viewAllLink="/best-sellers"
          scrollable={false}
        />
      </div>

      <MusicBanner />

      <OurProducts title="Our Products" subtitle="Explore Our Products" />

      <FeaturedGrid />

      <ServicesSection />

    </Layout>
  );
};

export default IndexPage;
