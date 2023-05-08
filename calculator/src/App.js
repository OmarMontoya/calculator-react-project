import './App.css';
import { Calculator } from './components/calculator';

function App() {
  return (
    <div className="App flex justify-center items-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <Calculator />
    </div>
  );
}

export default App;
