import { useRef } from "react";
import { UserImage } from "../../importer/importer";
import "./Style.scss";

export default function MentorChat() {
  const lastMessageRef = useRef(null);

  return (
    <div className="group-chat-section">
      <div className="header-section">
        <p> Conversion with Developer Emrul kayes </p>
      </div>

      <div className="all-messages-section">
        <div className="message-section">
          {/* <--------------- Message ---------------> */}
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

          {/* <--------------- Own Message ---------------> */}
          <div className="own-message">
            <div className="message-body">
              <div className="header">
                <p className="time"> 12:00 PM </p>
              </div>
              <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
                voluptates?
              </p>
            </div>
          </div>

          {/* <--------------- Typing ---------------> */}
          <div className="message" ref={lastMessageRef}>
            <img src={UserImage} alt="User Image" />
            <div className="message-body">
              <div className="header">
                <p className="name"> Dev Kayes </p>
              </div>
              <p className="typing">...</p>
            </div>
          </div>
        </div>

        {/* <------------------- Send Message -------------------> */}
        <div className="input-box">
          <textarea name="" id="" cols={200} rows={2}></textarea>
          <button> Send </button>
        </div>
      </div>
    </div>
  );
}
