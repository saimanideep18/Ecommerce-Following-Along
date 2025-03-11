import React, { useState } from 'react'
import "./signup.css";
const signup = () => {
    const[userDetail,setUserDetails]=useState({
        name:"",
        email:"",
        password:"",
    })
    function handleInput(event){
        console.log(event.target.value);
        setUserDetails({...userDetail,[event.target.name]:event.target.value});
    }

    async function handleSubmit() {
        if(userDetail.name == ""){
            alert("Please enter your name");
            return;
        }

        if(userDetail.email == ""){
            alert("Please enter email");
            return;
        }

        if(userDetail.password == ""){
              alert("Please enter password");
              return;
        }

        try{
           const data = await axios.post("http://localhost:8080/user/signup");
           console.log(data);
           alert("Signup Sucessfull");
        }catch(error){
            console.log(error)
            alert("something went wrong");
        }
        
    }
  return (
    <div className='regis-box'>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Name</label>
            <input type='text' name='name' placeholder='Name...'/>
            <label htmlFor="">Email</label>
            <input type='email' name='email' placeholder='Email...'/>
            <input type="Password" name='password' placeholder='Password'/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default signup