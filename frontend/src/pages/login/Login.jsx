import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("admin");
  const [password, setPassword] = useState("password");

  const { loading, login } = useLogin();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password });
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div
        className=" w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 

      "
      >
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-red-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleLoginSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="input input-bordered input-info w-full h-10 max-w-xs"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
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
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-rose-300 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
          <button
            className="btn btn-block btn-sm btn-primary hover:btn-lime-300 text-white mt-3 h-10"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
