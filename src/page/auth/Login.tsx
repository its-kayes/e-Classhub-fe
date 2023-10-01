import "./Style.scss";
import Button from "@mui/material/Button";

export default function Login() {
  return (
    <section className="login-section">
      <div className="part1">image section</div>
      <div className="part2">
        {" "}
        <Button variant="outlined">Primary</Button>
      </div>
    </section>
  );
}
