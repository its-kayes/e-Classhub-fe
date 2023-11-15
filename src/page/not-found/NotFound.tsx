import { FunnyCat } from "../../importer/importer";
import "./Style.scss";

export default function NotFound() {
  return (
    <div className="error-container">
      {/* <h1>404</h1>
      <p>Page not found!</p> */}
      <img src={FunnyCat} alt="Funny Cat" />
    </div>
  );
}
