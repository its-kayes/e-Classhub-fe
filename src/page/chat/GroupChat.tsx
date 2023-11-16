import { UserImage } from "../../importer/importer";
import "./Style.scss";

export default function GroupChat() {
  return (
    <div className="group-chat-section">
      <div className="header-section">
        <p> Conversion with Developer Emrul kayes </p>
      </div>

      <div className="all-messages-section">
        <div className="message-section">
          {[1, 2, 4, 5, 6, 8, 9, 4, 3, 31].map(() => (
            <div className="message">
              <img src={UserImage} alt="User Image" />
              <div className="message-body">
                <div className="header">
                  <p className="name"> Dev Kayes </p>
                  <p className="time"> 12:00 PM </p>
                </div>
                <p className="text">
                  {" "}
                  Hi, how are you? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Saepe laudantium delectus dolor enim
                  excepturi eaque tempore numquam iste nobis necessitatibus!{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
