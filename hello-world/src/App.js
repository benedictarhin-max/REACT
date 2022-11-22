import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Exit from './components/Exit'
import Hello  from './components/Hello'
import Welcome from './components/Welcome'
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Greet name="Oliver" heroName="The Arrow">
        <p>Stranded in hell for five years.</p>
      </Greet>
      <Greet name="Bart" heroName="The Streak">
        <p>Lost mom at a young age.</p>
      </Greet>
      <Greet name="Kara" heroName="Supergirl">
        <p>One of the last survivors of her planet.</p>
      </Greet>
      <Welcome name ="Mar Novu" heroName ="The Monitor">
      <p>Made a big mess.</p>
      </Welcome>
      <Message/>
    </div>
  );
}

export default App;
