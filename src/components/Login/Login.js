import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {

     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
if(user){

     console.log(user)
}
     return (
          <div className='flex items-center justify-center h-screen'>
              <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="  text-center text-2xl text-blue-600 font-bold">LOG IN</h2>
    

    <div className="divider">OR</div>
    <div className="card-actions justify-center">
      <button className="btn btn-primary" onClick={() => signInWithGoogle()}>CONTINIUE WITH GOOGLE</button>
    </div>
  </div>
</div>
          </div>
     );
};

export default Login;