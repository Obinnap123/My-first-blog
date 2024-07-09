import Header from '../components/Header/index';
import MainSection from '../components/MainSection';
import PackagesSection from '../components/PackagesSection';
import SubscriptionSection from '../components/SubscriptionSection';
import Footer from '../components/Footer/index';
import style from '../app/page.module.scss';

export default function Home() {
  return <>
  <main> 
    <div>
  <Header />
  <MainSection />
  <PackagesSection />
  <SubscriptionSection />
  <Footer />
  </div>
  </main>
   
    
  </>
};


