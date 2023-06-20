import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { setAuthToken } from '../../../api/auth';

const SocialLogin = () => {
    const {loginWithGoogle} = useContext(AuthContext)

    const handleToLoginGoogle=()=>{
        loginWithGoogle()
        .then(result => {
          const user = result.user;
          console.log(user)
          setAuthToken(user);

        })
        .catch(e => console.error(e))

      }
    return (
        <div>
            <p className='text-center'>Social Login</p>
            <p className='text-center'>
                <button onClick={handleToLoginGoogle} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;