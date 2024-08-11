import axios from "axios";
import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../Firebase/firebase.config";
import RegisterImg from "../../assets/Signup.png";
import { AuthContext } from "../../context/AuthContext";
const Register = () => {
  const { user, createAccountWithEmailPassword, googleLogin, facebookLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    if (password.length < 6) {
      Swal.fire({
        title: "Sorry...",
        text: "Password must contain 6 characters",
        icon: "warning",
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: "Sorry...",
        text: "Password must have at least 1 Uppercase letter.",
        icon: "warning",
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        title: "Sorry...",
        text: "Password must have at least 1 Lowercase letter.",
        icon: "warning",
      });
      return;
    } else if (!/[1-9]/.test(password)) {
      Swal.fire({
        title: "Sorry...",
        text: "Password must have at least 1 Number.",
        icon: "warning",
      });
      return;
    }

    createAccountWithEmailPassword(email, password)
      .then((res) =>
        updateProfile(auth.currentUser, {
          displayName: fullName,
          photoURL: photoUrl,
        })
          .then(async () => {
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
              text: "Account created successfully!",
              icon: "success",
            });
            navigate("/");
            form.reset();
          })
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
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
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <div className="hidden md:block md:w-1/2">
          <img src={RegisterImg} alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="hero min-h-screen ">
            <div className="hero-content flex-col w-full">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign up!</h1>
              </div>
              <div className="card shrink-0 w-full max-w-lg border border-gray-400 dark:border-secoundry shadow-lg shadow-gray-600 dark:shadow-secoundry ">
                <form className="card-body" onSubmit={handleSignup}>
                  {/* -----Google Login-------- */}
                  <span
                    onClick={handleGoogleSignup}
                    className="w-full border py-2 text-center flex items-center gap-3 justify-center rounded-lg border-gray-400 cursor-pointer"
                  >
                    <FcGoogle />
                    Login with google
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* ----------Full Name--------- */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Full Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        name="fullName"
                        className="input input-bordered bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400 "
                        required
                      />
                    </div>
                    {/* ------------Email----------- */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="input input-bordered bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400"
                        required
                      />
                    </div>
                    {/* ---------Photo URL---------- */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo URL</span>
                      </label>
                      <input
                        type="url"
                        placeholder="Link to your photo"
                        name="photoUrl"
                        className="input input-bordered bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400 "
                        required
                      />
                    </div>
                    {/* ----------Password--------- */}
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        className="input input-bordered bg-transparent focus:outline-gray-600 dark:focus:outline-secoundry border-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <p className="text-xs">
                    Already have an account? click
                    <span className="text-blue-600">
                      <Link to="/login"> here </Link>
                    </span>
                  </p>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
