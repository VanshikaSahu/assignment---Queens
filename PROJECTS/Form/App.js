import React, { useState } from 'react';
import './index.css';

const App = () => {
  const[Variables, setVariables] = useState({
    fname: "",
    lName: "",
    fullName: "",
    email: "",
    Email: "",     
    mobile: "",  
    Mobile: ""                                  
});
  const Change =(event) =>{
    console.log(event.target.value);
    //const name = event.target.name;
    //const value = event.target.value;
    const{name,value} = event.target;
    setVariables((prevState)=>{
      return {
        ...prevState,
        [name]:value,
      }     
    })
  }
  const ChangeName = (e) =>{ 
    e.preventDefault(); 
    setVariables((prevState)=>{
      
        return{
          ...prevState,
          fullName: prevState.fname + prevState.lName,
          Email: prevState.email,
          Mobile: prevState.mobile
        }
    })
    alert("Form submitted");
    
  }
    return(
      <>
      <div>
        <form onSubmit ={ChangeName}>
          <div>
            <h1>Hello {Variables.fullName}</h1>
            <p>{Variables.Email}</p>
            <p>{Variables.Mobile}</p>
            <input placeholder="Enter Your Name" name="fname" onChange ={Change} ></input>
            <input  placeholder="Enter Your Last Name" name="lname" onChange ={Change}  ></input>
            <input  placeholder="Enter Your Email" name = "email" onChange ={Change}  ></input>
            <input  placeholder="Enter Your mobile number" name = "mobile" onChange ={Change}  ></input>
            <button type = "submit">Submit</button>
          </div>
        </form>

      </div>
        
      </>
    )
}


export default App;
