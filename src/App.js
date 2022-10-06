import './App.css';
import FeaturesOne from './components/FeaturesOne';
import FeatureTwo from './components/FeatureTwo';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Products from './components/Products';
import Stats from './components/Stats';
import Stores from './components/Stores';
import Testimonials from './components/Testimonials';
import Hero from './sections/Hero';

function App() {
  return (
    <div className="w-full h-screen bg-[#f5f5f5]">
      <Hero/>
      <Stats/>
      <FeaturesOne/>
      <Stores/>
      <FeatureTwo/>
      <Products/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
