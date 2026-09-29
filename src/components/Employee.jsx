import  React from 'react';

class Employee extends React.Component{
    constructor(props){
        super(props)
        this.state={
            firstname:"sivakrishna",
            lastname:"bandaru",
            email:"siva@gmail.com"
        }
    }


    updateEmployee(){
        this.setState({ 
            firstname:"raja",
            lastname:"googluth",
            email:"raja@gmail.com"
    })
        
    }

    render(){
        return(
            <div>
                <h1>Employee details</h1>
                <p>{this.state.firstname}</p>
                <p>{this.state.lastname}</p>
                <p>{this.state.email}</p>
                <button onClick={()=>this.updateEmployee()}>update Employee</button>
            </div>
        );
    }
}
export default Employee;
