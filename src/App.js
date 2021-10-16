import fish from './fish.svg';
import foto from './foto_personal.jpg';
import './App.css';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <img src={fish} className="fish" alt="logo" />
        <div>
        <h4 className="title">VERDE CARAIBI</h4>
        </div><img src={fish} className="fish1" alt="logo" />
        <img src={foto} className="foto" alt="foto personale" />
        <small>By SILVIA FABBRI</small>
        <Clock />
      </header>
  
    </div>
  );
}

export default App;
