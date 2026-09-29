// using propes 

// const Student = (props) =>{
//     return (
//         <div>
//             {/* <h1>Student Details</h1>
//             <p>Student First Name:{props.firstname}</p>
//             <p>Student Lsat Name:{props.lastname}</p>
//             <p>Student email:{props.email}</p> */}

//             <p>Student First Name:{props.firstname}</p>
//             <p>Student Last Name:{props.lastname}</p>
//             <p>Student email:{props.email}</p>

//             {/* <p>Array data:{props.data}</p> */}
//         </div>
//     )
// }
//


//destracturing propes
const Student = (props) =>{
    const {firstname,lastname,email}=props
    return (
        <div>
            {/* <h1>Student Details</h1>
            <p>Student First Name:{props.firstname}</p>
            <p>Student Lsat Name:{props.lastname}</p>
            <p>Student email:{props.email}</p> */}

            <p>Student First Name:{firstname}</p>
            <p>Student Last Name:{lastname}</p>
            <p>Student email:{email}</p>

            {/* <p>Array data:{props.data}</p> */}
        </div>
    )
}
export default Student