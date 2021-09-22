import React from 'react'
import { useState } from 'react'



function LoginPage() {
    const[login , SetLogin]=useState([{
email:'',
password:'',


    }])

// function save(){
//     axios.get("http://localhost:3002/product").then((res)=> console(res))
// }
const save=  (e)=> {
    e.preventDefault();
  
    console.log(login)


   
    
    
    
        }

    return (
        <div className='loginpage'>
        <div className="signupFrm1" >
<form action="" className="form1" onSubmit={save}>
<h1 className="titleSignIn">SignIn</h1>

<div className="inputContainer1">
 <input type="Email" className="input1" placeholder="a" onChange={(e)=> SetLogin({...login,email:e.target.value})}></input>
 <label  htmlFor="" className="label1">Email</label>
</div>


<div className="inputContainer1">
 <input type="Password" className="input1" placeholder="a" onChange={(e)=> SetLogin({...login,password:e.target.value})}></input>
 <label htmlFor="" className="label1">Password</label>
</div>


<input type="submit" className="submitBtn1" value="Sign In"></input>
</form>
</div>

</div>
    )
}

export default LoginPage;
