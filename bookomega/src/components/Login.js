import React from 'react'
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';

export default function Login() {
  let navigate=useNavigate();
    const [credential, setcredential] = useState({  email: "", password: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:9000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  email: credential.email, password: credential.password})
    })
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid cradential")
    }
    else{
      alert("Signed In")
      navigate('/')
    }
     setcredential({ name:"" , email:"", password:"", location:""});
  }
  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='m-5'>

      <div class="mb-3">
        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" name='email' value={credential.email} onChange={onChange} />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={credential.password} onChange={onChange} />
      </div>
     

      <button type="submit" class="btn btn-primary">Submit</button>
      <Link to="/createuser"className="btn btn-primary">I am new</Link>
    </form>
    </div>
  )
}
