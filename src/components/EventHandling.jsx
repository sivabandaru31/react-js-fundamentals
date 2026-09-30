import { useState } from "react"

const EventHandling=() =>{
  const[count,setCount]=  useState(0)

  function handleClick(){
    setCount(count+1)
  }

  function handlereset(){
    setCount(0)
  }

  return(
    <div>
        <h1>Event Handling</h1>
        <p>Count:{count}</p>
        <button onClick={handleClick}>Increment</button>
        <button onClick={handlereset}>reset</button>
    </div>
  )
}
export default EventHandling