import React, {useState, useEffect} from 'react'

function RegistrationForm() {
    const [formData, setFormData]=useState({
        name: "", 
        email: "",
        password: "",
    });
    const [errors,setErrors]= useState({});
    const [successs, setSuccess]=useState("");
    const [apiData, setApiData]=useState(null);

    useEffect(()=>{
        fetch("").then((response)=>response.json())
        .then((data)=>setApiData(data.title));
    },{});
  return (
    <div className="form-container">
        <h2>Registration Form</h2>
        <p style={{fontSize:"12px"}}>
            API Title: {apiData ? apiData: "Loading..."}
        </p>
    <form onSubmit={handleSubmit}>
        <input name= "name" placeholder="Name" onChange={handleChange}></input>
        
        </form>  
    </div>
  )
}

export default RegistrationForm
