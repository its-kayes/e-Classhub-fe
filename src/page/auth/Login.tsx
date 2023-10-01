import "./Style.scss";
import Button from "@mui/material/Button";

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
        {" "}
        <Button variant="outlined">Primary</Button>
      </div>
    </section>
  );
}
