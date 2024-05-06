import logo from './logo.svg';
import './App.css';
import Message from './components/Messages';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Message name="Daffu Duck" job="Engineer" age={32}></Message>
     <Team name="Liverpool" title={5}/>
     <Team name="REAL" title={14}/>
     <Team name="PSG" title={0}/>
    </div>
  );
}

export default App;
