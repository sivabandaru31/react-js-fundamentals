//import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import {FirstComponents as FC, SecondComponents as SC} from './components/MyComponents';
import MC from './components/MyComponents';
function App() {
  return (
    <div className="App">
      {/* <Welcome name="sivakrishna"/>
      <Welcome name="raja"/> */}
      <Greeting/>
      <Greeting name="google"/>
      {/* <FirstComponents/> */}
      <FC/>
      {/* <SecondComponents/> */}
      <SC/>
      {/* <MyComponent/> */}
      <MC/>
    </div>
  );
}

export default App;
