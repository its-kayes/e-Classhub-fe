import { FunnyCat } from "../../importer/importer";
import "./Style.scss";

export default function NotFound() {
  return (
    <div className="error-container">
      <img src={FunnyCat} alt="Funny Cat" />
    </div>
  );
}
