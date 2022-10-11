import './App.css';

import Header from './components/Header/Header';

import Footer from './components/Footer/Footer';
import HomepageTop from './components/HomepageTop/HomepageTop';
import Services from './components/Services/Services';
import Launching from './components/Launching/Launching';
import Ordering from './components/Ordering/Ordering';
import Getall from './components/GetAll/Getall';
import Consultation from './components/Consultation/Consultation';
import Membership from './components/Membership/Membership';
import Subscription from './components/Subscription/Subscription';
import FeatureCards from './components/FeatureCards/FeatureCards';

function App() {
  return (
    <div className="App">
      <Header />
      <HomepageTop/>
      <Services/>
      <Launching/>
      <Ordering/>
      <Getall/>
      <Consultation/>
      <Membership/>
      <FeatureCards/>
      <Subscription/>
      <Footer/>
    </div>
  );
}

export default App;
