import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import PackagesSection from '../components/PackagesSection';
import SubscriptionSection from '../components/SubscriptionSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <PackagesSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Home;
