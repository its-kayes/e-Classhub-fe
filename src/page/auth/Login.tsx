import { Link } from "react-router-dom";
import "./Style.scss";
import { useSingInMutation } from "../../store/service/userApi";
import { FormEvent } from "react";
import { IResponse, catchResponse } from "../../utils/catchResponse";

export default function Login() {
  const [singIn] = useSingInMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const password = (form.querySelector("#password") as HTMLInputElement)
      ?.value;
    const email = (form.querySelector("#email") as HTMLInputElement)?.value;

    const result = await singIn({
      email,
      password,
    });

    const response = catchResponse(result as IResponse);

    //TODO: Update & Optimized those code
    localStorage.setItem("userInfo", JSON.stringify(response));

    if (response) {
      window.location.href = "/classes";
    }

    return;
  };

  return (
    <section className="login-section">
      <div className="video-tutorial">
        <img
          className="video-tutorial"
          src="../../../src/assets/video-tutorial.jpeg"
          alt="this is video tutorial image"
        />
      </div>
      <div className="login-form">
        <section className="login-form-box">
          <h1 className="title"> Welcome Back 👋🏻</h1>

          <p className="sub-title">
            No Account Yet ?
            <Link to="/sign-up">
              <span> Sign Up </span>
            </Link>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="inp">
              <label htmlFor="email">Email</label>
              <input
                className="inp-box"
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
              />
            </div>

            <div className="inp">
              <label htmlFor="password">Password</label>
              <input
                className="inp-box"
                type="password"
                id="password"
                placeholder="*********"
                name="password"
              />
            </div>

            <div className="login-feature-box">
              <div className="remember-me-box">
                <input type="checkbox" id="remember" />
                <label className="remember-me" htmlFor="remember">
                  Remember me
                </label>
              </div>

              <a className="forget-pass" href="#" target="_blank">
                Forgot password?
              </a>
            </div>

            <button type="submit">Login</button>
          </form>
        </section>
      </div>
    </section>
  );
}
