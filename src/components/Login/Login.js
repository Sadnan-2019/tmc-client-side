import React from "react";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
     
     console.log(data)



}




  if (user) {
    console.log(user);
  }


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="  text-center text-2xl text-blue-600 font-bold">
            LOG IN
          </h2>
          <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
    
  </label>
  <input 
  {...register("email", {
     pattern: {
       value: /[A-Za-z]{3}/,
       message: 'error message' // JS only: <p>error message</p> TS only support string
     }
   })}
  
  type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Bottom Left label</span>
  
  </label>
</div>






          <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input  />
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
          <div className="divider">OR</div>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={() => signInWithGoogle()}
            >
              CONTINIUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
