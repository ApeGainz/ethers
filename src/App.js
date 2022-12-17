import 'bulma/css/bulma.min.css';
import Accounts from './Accounts';
import ReadContract from './ReadContract';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>
        Ethers.js example code
        </h1>
        <Accounts/>
        <ReadContract/>
      </header>
    </div>
  );
}

export default App;
