import CurrencyTracker from './components/CurrencyTracker';
import { CurrencyProvider } from './context/CurrencyContext';

function App() {
  return (
    <div className='App'>
      <CurrencyProvider>
        <CurrencyTracker />
      </CurrencyProvider>
    </div>
  );
}

export default App;
