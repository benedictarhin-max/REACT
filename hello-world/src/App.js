import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Exit from './components/Exit'
import Hello  from './components/Hello'
import Welcome from './components/Welcome'
import Message from './components/Message';
import Counter from './components/counter';

function App() {
  return (
    <div className="App">
      <Greet name="Oliver Queen" heroName="The Arrow">
        <p>Stranded in hell for five years.</p>
      </Greet>
      <Greet name="Barry Allen" heroName="The Streak">
        <p>Lost mom at a young age.</p>
      </Greet>
      <Greet name="Kara Danvers" heroName="Supergirl">
        <p>One of the last survivors of her planet.</p>
      </Greet>
      <Hello name="Curtis Holt" heroName="Mister Terrific">
        <p>Genius with an "aptitude for aptitudes"</p>
      </Hello>
        
      <Welcome name ="Mar Novu" heroName ="The Monitor">
      <p>Made a big mess.</p>
      </Welcome>
      <Message/>
      <Counter />
    </div>
  );
}

export default App;
