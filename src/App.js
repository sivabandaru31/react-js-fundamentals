//import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      {/* <Welcome name="sivakrishna"/>
      <Welcome name="raja"/> */}
      <Greeting/>
      <Greeting name="google"/>
    </div>
  );
}

export default App;
