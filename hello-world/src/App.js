import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Exit from './components/Exit'
import Hello  from './components/Hello'
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
      <Greet name="Oliver" heroName="The Arrow">
        <p>Lost parents at a young age</p>
      </Greet>
      <Greet name="Bart" heroName="The Streak"/>
      <Greet name="Kara" heroName="Supergirl"/>
      <Welcome name ="Mar Novu" heroName ="The Monitor"/>
      <Hello/>
    </div>
  );
}

export default App;
