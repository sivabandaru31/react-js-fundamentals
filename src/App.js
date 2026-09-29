//import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import {FirstComponents as FC, SecondComponents as SC} from './components/MyComponents';
import MC from './components/MyComponents';
import HelloWorld  from './components/HelloWorld';
import Student  from './components/Student';

import Employee from './components/Employee';
import User from './components/User';

function App() {
  const student={
    firstname:"sivakrishna",
    lastname:"bandaru",
    email:"siva@gmail.com"

   }
  const skills=['html','css','java Script','react'];
  return (
    <div className="App">
      {/* <Welcome name="sivakrishna"/>
      <Welcome name="raja"/> */}
      {/* <Greeting/> */}
      {/* <Greeting name="google"/> */}
      {/* <FirstComponents/> */}
      {/* <FC/> */}
      {/* <SecondComponents/> */}
      {/* <SC/> */}
      {/* <MyComponent/> */}
      {/* <MC/> */}
      {/* <HelloWorld/> */}

      {/* <Student 
      firstname=" raja"
      lastname=" googluth"
      email=" raja@gmail.com"
      /> */}

        {/* <Student
      firstname= " basha"
      lastname= " mahaboob"
      email= " basha@gmail.com" */}
      {/* />  */}
      {/* <Student
      student = { student }
      /> 
      <Student
      data={skills}
      /> */}

      {/* <Employee/> */}
      <User/>



    </div>
    
  );
}

export default App;
