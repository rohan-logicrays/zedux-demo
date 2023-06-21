import logo from './logo.svg';
import './App.css';
import Greetings from './Components/Greetings';
import { EditGreetings } from './Components/EditGreetings';
import GreetingsPreview from './Components/GreetingsPreview';
import InjectAtom from './Components/InjectAtom';
import StoreExample from './Components/StoreExample';
import ApiHandle from './Components/ApiHandle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Zudux Demo</h1>
        Example 1
        <GreetingsPreview />
        Example 2
        <InjectAtom />
        Example 3
        <StoreExample />
        Example 4
        <ApiHandle />
      </header>
      
    </div>
  );
}

export default App;
