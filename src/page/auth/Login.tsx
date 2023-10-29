import { Link } from "react-router-dom";
import "./Style.scss";

export default function Login() {
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

          <form action="">
            <div className="inp">
              <label htmlFor="email">Email</label>
              <input
                className="inp-box"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="inp">
              <label htmlFor="password">Password</label>
              <input
                className="inp-box"
                type="password"
                id="password"
                placeholder="*********"
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
