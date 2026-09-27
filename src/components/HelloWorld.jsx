import react from "react";
const HelloWorld =() => {
    //  const myElement=<div><h1>Hello Microfoft</h1></div>

    function handleClick(){
       alert("button clicked!");
    }

    const name="sivakrishna";
    const addition=1+2;
    return ( 
        <div>
    //<>
        <h1 className="title">Title</h1>
        <h2>sub title</h2>
        <p1>paragraph</p1>
        <p>{name}</p>
        <p>{addition}</p>
        <image>image</image>
        <button onClick ={handleClick}>click</button>
    //</>
    </div> 
    
    )
    
     
    // return react.createElement('div',null,react.createElement('h1',null,'Hello World!'))
    
}
export default HelloWorld