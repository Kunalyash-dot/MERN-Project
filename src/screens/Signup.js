import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import logo from "../components/Images/logo1.png"

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log(JSON.stringify({
    name: credentials.name,
    email: credentials.email,
    password: credentials.password,
    location: credentials.geolocation,
  }),)
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid Credentials");
    }
    if(json.success){
      alert("User Created! Please Login. ")
      navigate("/login")
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
    <div style={{margin:"auto",width:'50%',textAlign:"center",paddingTop:"10vh"}} ><img src={logo} alt="" className="logoSize"  /></div>
    <div className="container align-middle" style={{ maxWidth:"450px",borderRadius:'15px',fontWeight:"bolder",height:'430px',marginTop:'10vh',border:'1px solid grey'}}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label mt-3">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={onChange}
            style={{backgroundColor:"lightgray"}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={credentials.email}
            onChange={onChange}
            style={{backgroundColor:"lightgray"}}
          />
         
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={credentials.password}
            onChange={onChange}
            style={{backgroundColor:"lightgray"}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="geolocation"
            value={credentials.geolocation}
            onChange={onChange}
            style={{backgroundColor:"lightgray"}}
          />
        </div>

<div  className="container text-center">

        <button type="submit" className="btn btn-primary btn-sm font-weight-bold">
          Submit
        </button>

        <Link to="/login" className="m-3 btn btn-danger btn-sm font-weight-bold">
          Already User
        </Link>
</div>
      </form>
    </div>
      </>
  );
}
