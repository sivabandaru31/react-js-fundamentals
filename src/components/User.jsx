import {useState} from "react";

const User =()=>{
//   const[firstname,setFirstName] = useState('divya')
//   const[lastname,setLastName]=useState('pasupulati')
//   const[email,setemail]=useState('divya@gamil.com')

const[user,setUser]=useState({
    firstname:"amulya",
    lastname:"thammisetty",
    email:"amulya@gmail.com"
})

  function updateUser(){
    // setFirstName('noushin')
    // setLastName('shaik')
    // setemail('noushin@gmail.com')
    setUser({
        firstname:"noushin",
        lastname:"shaik",
        email:"noushin@gmail.com"
    })

  }

  return (
    <dev>
        <h1>User Details</h1>
        <p>{user.firstname}</p>
        <p>{user.lastname}</p>
        <p>{user.email}</p>

        <button onClick={updateUser}>updateuse</button>
    </dev>
  )
}
export default User