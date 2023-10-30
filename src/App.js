
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import HowItWorks from './components/HowItWorks';
import KeyFeatures from './components/KeyFeatures';
import OurProducts from './components/OurProducts';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <KeyFeatures />
      <HowItWorks />
      <OurProducts />
      <Footer />
    </div>
  );
}

export default App;
