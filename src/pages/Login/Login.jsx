import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const {loginUser, loginWithGoogle} = useContext(AuthContext);
    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
        .then(result => {
          const user = result.user;
          console.log(user)
        })
        .catch(error => console.error(error))

    };


    const handleToLoginGoogle=()=>{
      loginWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(e => console.error(e))
    }


    return (
        <div className="hero w-full  my-20">
  <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      
      <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
    <h1 className="text-5xl font-bold text-center">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="Password" className="input input-bordered" required/>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>
      <div onClick={handleToLoginGoogle}>
      <button className="btn btn-wide bg-green-500 w-full">sign in with <FaGoogle className='w-4 h-4 text-red-700'/></button>
      </div>
      <p className='text-center mt-3'>New to Genius Car!! <Link className='text-orange-600 font-bold' to='/signUp'>Sing Up</Link></p>
      
    </div>
    
  </div>
</div>
    );
};

export default Login;