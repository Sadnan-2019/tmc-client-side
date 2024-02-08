import React from "react";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import "./Login.css";

import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import { Link, useNavigate } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import useToken from "../../hooks/useToken";

const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, UpDateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);

  let signError;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("Update done");
    // navigate("/appoinment");
    veryfyEmail();
  };

  const veryfyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      //
      // ...
      console.log("Email verification sent!");
    });
  };

  if (user || gUser) {
    console.log(user || gUser);
  }

  if (gLoading || loading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || UpDateError) {
    signError = (
      <p className="text-red-900 py-3">
        {error?.message || gError?.message || UpDateError.message}
      </p>
    );
  }
  return (
    <div className="login py-24">
      <div className="flex items-center justify-center h-screen  ">
        <div className="card w-96 bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] shadow-xl">
          <div className="card-body">
            <h2 className="  text-center text-2xl text-white font-bold">
              SIGN UP
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is requried",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Provide a valid email", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500" role="alert">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500" role="alert">
                      {errors.email.message}
                    </span>
                  )}
                  {/* <span>Bottom Left label</span> */}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is requried",
                    },
                  })}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-red-500" role="alert">
                      {errors.name.message}
                    </span>
                  )}

                  {/* <span>Bottom Left label</span> */}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is requried",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 charater",
                    },
                  })}
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500" role="alert">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500" role="alert">
                      {errors.password.message}
                    </span>
                  )}
                  {/* <span>Bottom Left label</span> */}
                </label>
              </div>
              {signError}
              <div className="card-actions justify-center py-5 ">
                <input
                  value="Sign Up"
                  className="btn w-full   max-w-xs  text-white btn-sm  bg-blue-900 justify-center"
                  type="submit"
                />
              </div>
            </form>
            <div className="flex items-center justify-center">
              <p className="font-bold text-white">Already Have an Account</p>
              <Link to="/login" className="text-white font-bold">
                LOG IN
              </Link>
            </div>
            <div className="divider text-white">OR</div>
            <div className="card-actions justify-center">
              <button
                className="btn bg-blue-900 text-white  "
                onClick={() => signInWithGoogle()}
              >
                CONTINIUE WITH GOOGLE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
