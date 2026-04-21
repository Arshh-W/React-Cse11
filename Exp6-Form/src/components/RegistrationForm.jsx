import React, {useState, useEffect} from 'react'

function RegistrationForm() {
    const [formData, setFormData]=useState({
        name: "", 
        email: "",
        password: "",
    });
    const [errors,setErrors]= useState({});
    const [success, setSuccess]=useState("");
    const [apiData, setApiData]=useState(null);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((response)=>response.json())
        .then((data)=>setApiData(data.title));
    },{});
    const validate=()=>{
        let temp={};
        if(!formData.name) temp.name="Name is Required";
        if(!formData.email.includes("@")) temp.email="Invalid email (@)";
        if(formData.password.length<6) temp.password="Password must be > 6";
        setErrors(temp);
        return Object.keys(temp).length ===0;
        
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate()){
            setSuccess("Registration Successfull");
            setErrors([]);
        }else{
            setSuccess("");
        }
    };
    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]:e.target.value});
    };
  return (
    <div className="form-container">
        <h2>Registration Form</h2>
        <p style={{fontSize:"12px"}}>
            API Title: {apiData ? apiData: "Loading..."}
        </p>
    <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input name= "name" placeholder="Name" onChange={handleChange}/>
        {errors.name && <p style={{color:"red", margin:"5px"}}>{errors.name}</p>}
        
        <label>Email: </label>
        <input name= "email" placeholder="Email" onChange={handleChange}/>
        {errors.email && <p style={{color:"red", margin:"5px "}}>{errors.email}</p>}
        
        <label>Password: </label>
        <input name= "password" type="password" placeholder="Password" onChange={handleChange}/>
        {errors.password && <p style={{color:"red", margin:"5px "}}>{errors.password}</p>}
        
        <br/>
        <button type="submit">Submit</button>
        {success && <p style={{color:"green", margin:"10px "}}>{success}</p>}
        </form>
    </div>
  )
}

export default RegistrationForm
