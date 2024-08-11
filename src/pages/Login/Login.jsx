import axios from "axios";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loginImg from "../../assets/Login.png";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const { user, loginWithEmailPassword, googleLogin, facebookLogin } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmailPassword(email, password)
      .then(async (res) => {
        const tokenRes = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: res.user.email,
          },
          {
            withCredentials: true,
          }
        );
        Swal.fire({
          title: "Success",
          text: "Login successfully!",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        if (err.message === "Firebase: Error (auth/invalid-credential).") {
          Swal.fire({
            title: "Error",
            text: "Email or Password is wrong!",
            icon: "error",
          });
        }
        console.log(err);
      });
  };

  const handleGoogleSignup = () => {
    googleLogin()
      .then(async (res) => {
        const tokenRes = await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: res.user.email,
          },
          {
            withCredentials: true,
          }
        );
        Swal.fire({
          title: "Success",
          text: "Login successfully!",
          icon: "success",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="hidden md:block md:w-1/2">
        <img src={loginImg} alt="" />
      </div>
      <div className="md:w-1/2">
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm border border-gray-400 dark:border-secoundry shadow-lg shadow-gray-600 dark:shadow-secoundry ">
              <form className="card-body" onSubmit={handleLogin}>
                {/* -----Google Login-------- */}
                <span
                  onClick={handleGoogleSignup}
                  className="w-full border py-2 text-center flex items-center gap-3 justify-center rounded-lg border-gray-400 cursor-pointer"
                >
                  <FcGoogle />
                  Login with google
                </span>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry"
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
                    className="input input-bordered bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry"
                    required
                  />
                </div>
                <p className="text-xs">
                  Don&apos;t have an account? click
                  <span className="text-blue-600">
                    <Link to="/signup"> here </Link>
                  </span>
                </p>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
