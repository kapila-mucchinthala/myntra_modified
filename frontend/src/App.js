import './App.css';
import { BigDeals } from './components/LandingPage/ProductsDeals/BiggestDeals';
import { DayDeals } from './components/LandingPage/ProductsDeals/DealsOfDay';

function App() {
  return (
    <div className="App">
            <DayDeals/>
            <BigDeals/>
    </div>
  );
}

export default App;
