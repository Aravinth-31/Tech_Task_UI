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
      <HomepageTop />
      <Services />
      <Launching />
      <Ordering />
      <Getall />
      <Consultation />
      <Membership />
      <FeatureCards />
      <Subscription />
      <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className='close'>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <h4 className='title'>Please Fill the Details</h4>
            <form>
              <div className='group'>
                <div className='form-group'>
                  <label>Name<span>*</span></label>
                  <input className='form-field' type="text" placeholder='Enter your Name' />
                </div>
                <div className='form-group'>
                  <label>Email ID<span>*</span></label>
                  <input className='form-field' type="text" placeholder='Enter your Email' />
                </div>
              </div>
              <div className='form-group'>
                <label>Mobile Number<span>*</span></label>
                <input className='form-field' type="text" />
              </div>
              <div className='rating'>
                <h5>How excited are you to learn more/ or use HealthSy?</h5>
                <ul>
                  <li>Very Excited</li>
                  <li>Excited</li>
                  <li>I am Looking Forward</li>
                  <li>Not Much</li>
                  <li>Do Not Know</li>
                </ul>
              </div>
              <button className='btn btn-submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
