import React, {useContext, useEffect,  useState } from "react";
import login from "../../assets/others/authentication1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  loadCaptchaEnginge,  LoadCanvasTemplate,  validateCaptcha,} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import 'animate.css';
import SocialLogIn from "../Shared/SocialLogIn/SocialLogIn";

const LogIn = () => {
  const [disabled, setDisabled] = useState(true);
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: 'top-middle',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, {replace: true});
    })
  };

  const handleValidateCaptcha = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    }
    else(
      setDisabled(true)
    )
  };


  return (
    <div className="hero animate__animated animate__zoomIn min-h-screen">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="text-center w-1/2 lg:text-left">
          <img src={login} alt="" />
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  // required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  // required
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the text above"
                  // required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  disabled={false}
                  value="LOGIN"
                />
              </div>
            </form>
            <p className="text-center mt-5">
              Don't have an Account Yet?{" "}
              <Link to={"/signup"} className="text-red-500 font-bold">
                Sign Up
              </Link>
            </p>
            <SocialLogIn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
