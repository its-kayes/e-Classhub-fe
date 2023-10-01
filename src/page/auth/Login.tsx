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
        <section>
          <h1 className="title"> Welcome Back 👋🏻</h1>
          <p className="sub-title">
            {" "}
            No Account Yet? <span> Sign Up </span>{" "}
          </p>

          <form action="">
            <label htmlFor="email">Email</label>
            <input
              className="inp-box"
              type="email"
              id="email"
              placeholder="Enter your email"
            />

            <label htmlFor="password">Password</label>
            <input
              className="inp-box"
              type="password"
              id="password"
              placeholder="Enter your password"
            />

            <button type="submit">Login</button>
          </form>
        </section>
      </div>
    </section>
  );
}
