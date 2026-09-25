//to create by using function based component

// function Welcome(){
//     return <h1>Welcome, sivakrishna</h1>
// }
// export default Welcome


//es6 Arrow function based component 
// const Welcome = () => {
//     return <h1>Welcome, sivakrishna</h1>
// }
const Welcome = (props) =><h1>Welcome, {props.name}</h1>

export default Welcome