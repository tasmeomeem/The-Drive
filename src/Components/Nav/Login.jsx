import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import Nav from "./Nav";
import Swal from "sweetalert2";
import axios from "axios";




const Login = () => {
    const {LogInWithEmailAndPassword,googleLogin}=useContext(AuthContext)
    const handleLogin=(e)=>{
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password);
        LogInWithEmailAndPassword(email,password).then(result=>{
            console.log(result)
        })
        
        .catch(error=>console.log(error))

    }
    const handleGoogle=() =>{
      googleLogin()
      .then(()=>{
        Swal('Google log in success')
      })
      .catch()
    }
  return (
    <div>
      <Nav/>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-center pt-10">Login now!</h1>
          </div>
          <button onClick={handleGoogle} className="btn btn-outline block mx-auto my-5 ">Google</button>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <Link to="/register" className="text-center pb-5 px-5">Don't have an Account ? <span className="font-bold">Please Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
