import "./Style.scss";

export default function Signup() {
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
            {" "}
            Already have an account ?<span> Login </span>{" "}
          </p>

          <form action="">
            <div className="inp">
              <label htmlFor="email">Your Full Name</label>
              <input
                className="inp-box"
                type="text"
                id="name"
                placeholder="Enter your full name"
              />
            </div>

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

            <div className="inp">
              <label htmlFor="password">Confirm Password</label>
              <input
                className="inp-box"
                type="password"
                id="confirm-password"
                placeholder="*********"
              />
            </div>

            <div className="login-feature-box">
              <div className="remember-me-box">
                <input type="checkbox" id="remember" />
                <label className="remember-me" htmlFor="remember">
                  I accept the Terms and Conditions of the website{" "}
                  <span> Terms of Use </span>
                  and <span> Privacy Policy </span> of the website.
                </label>
              </div>
            </div>

            <button type="submit">Sign Up</button>
          </form>
        </section>
      </div>
    </section>
  );
}
