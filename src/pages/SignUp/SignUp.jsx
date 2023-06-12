import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name= form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            handleToUpdateUser(name)
            form.reset();
            console.log(user)
        })
        .catch(error => console.error(error))
    }

    const handleToUpdateUser =(name)=>{
      const userProfile= {
        displayName: name,
      }
      updateUserProfile(userProfile)
      .then(()=>{})
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
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="Email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="Password" className="input input-bordered" required/>
              </div>
              <div className="form-control mt-6">
                  <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='text-center'>Already Have an Account!! <Link className='text-orange-600 font-bold' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;