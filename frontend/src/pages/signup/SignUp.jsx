import { Link } from "react-router-dom";
import GenderCheck from "./GenderCheck";
import { useState } from "react";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className=" w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 

      "
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp
          <span className="text-red-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">First Name</span>
            </label>
            <input
              type="text"
              placeholder="Jhon Doe"
              className="input input-bordered input-info w-full h-10 max-w-xs
              "
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="jhondoe39"
                className="input input-bordered input-info w-full h-10 max-w-xs"
                value={inputs.username}
                onChange={(e) =>
                  setInputs({ ...inputs, username: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="input input-bordered input-info w-full h-10 max-w-xs"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
              />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered input-info w-full h-10 max-w-xs"
                value={inputs.confirmPassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmPassword: e.target.value })
                }
              />
            </div>
            <GenderCheck></GenderCheck>

            <Link
              to={"/signin"}
              className="text-sm hover:underline hover:text-rose-300 mt-2 inline-block"
            >
              Already have an account?
            </Link>
            <button className="btn btn-block btn-sm btn-primary hover:btn-lime-300 text-white mt-3 h-10">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
