import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Signup() {
  const [credential, setcredential] = useState({ name: "", email: "", password: "", location: "" })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:9000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credential.name, email: credential.email, password: credential.password, location: credential.location })
    })
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid cradential")
    }
    else{
      alert("Signed In")
    }
     setcredential({ name:"" , email:"", password:"", location:""});
  }
  const onChange = (e) => {
    setcredential({ ...credential, [e.target.name]: e.target.value })
  }
  return (
    <form onSubmit={handleSubmit} className='m-5'>
      <div class="mb-3">
        <label htmlFor="name" class="form-label">Name</label>
        <input type="text" class="form-control" name="name" value={credential.name} onChange={onChange} />
      </div>

      <div class="mb-3">
        <label htmlFor="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" name='email' value={credential.email} onChange={onChange} />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" name='password' value={credential.password} onChange={onChange} />
      </div>
      <div class="mb-3">
        <label htmlFor="location" class="form-label">Location</label>
        <input type="text" class="form-control" name='location' value={credential.location} onChange={onChange} />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
      <Link to="/login"className="btn btn-primary">Already User</Link>
    </form>
  )
}
