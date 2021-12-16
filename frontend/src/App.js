import './App.css';
import { Foot } from './components/footer/Foot';
import { Footer } from './components/footer/Footer';
import { DayDeals } from './components/LandingPage/ProductsDeals/DealsOfDay';
import { Slider } from './components/LandingPage/Slider/Slider';

function App() {
  return (
    <div className="App">
      {/* <DayDeals /> */}
      <Slider />
    </div>
  );
}

export default App;
