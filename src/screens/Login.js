import React ,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import logo from "../components/Images/logo1.png";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
  console.log(JSON.stringify({

    email: credentials.email,
    password: credentials.password
   
  }),)
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      
        email: credentials.email,
        password: credentials.password
       
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid Credentials");
    }
    if (json.success) {
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"))
     navigate("/");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
   
      <div style={{margin:"auto",width:'50%',textAlign:"center",paddingTop:"10vh"}} ><img src={logo} alt="" className="logoSize"  /></div>
    <div className='container' style={{ maxWidth:"450px",borderRadius:'15px',fontWeight:"bolder",height:'260px',marginTop:'10vh',border:'1px solid grey'}}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label mt-3">
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
        
<div className="container text-center">

        <button type="submit" className="btn btn-primary">
          Submit
        </button>

        <Link to="/createuser" className="m-3 btn btn-danger">
          I'm a new user
        </Link>
</div>
      </form>
    </div>
    </>
  )
}
