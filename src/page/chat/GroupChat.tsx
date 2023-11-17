import { useEffect, useRef, useState } from "react";
import { UserImage } from "../../importer/importer";
import "./Style.scss";
import { Socket } from "socket.io-client";
import { useAppSelector } from "../../store/app/hook";
import { useParams } from "react-router-dom";
import { IMessage } from "../../interface/index.global";

export default function GroupChat({ socket }: { socket: Socket }) {
  const { room } = useParams<{ room: string }>();
  const { name, email } = useAppSelector((state) => state.local.userReducer);

  const [message, setMessage] = useState<string>();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const lastMessageRef = useRef(null);

  const handleSendMessage = () => {
    if (message) {
      socket.emit("group-chat", {
        room,
        message,
        name,
        token: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        email,
        time: new Date(),
      });
    }
  };

  useEffect(() => {
    socket.on(`group-chat-${room}`, (data) => {
      setMessages([...messages, data]);
    });
  }, [messages, room, socket]);

  console.log(messages);

  return (
    <div className="group-chat-section">
      <div className="header-section">
        <p> Group Chat </p>
      </div>

      <div className="all-messages-section">
        <div className="message-section">
          {/* <--------------- Message ---------------> */}
          {/* {[1, 2, 4, 5, 6, 8, 9, 4, 3, 31].map(() => ( */}
          {messages.map((msg) => (
            <div className="message">
              <img src={UserImage} alt="User Image" />
              <div className="message-body">
                <div className="header">
                  <p className="name"> {msg.name} </p>
                  <p className="time"> 12:00 PM </p>
                </div>
                <p className="text">{msg.message}</p>
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

          {/* <------------------- Send Message -------------------> */}
          <div className="input-box">
            <textarea
              name=""
              onChange={(e) => setMessage(e.target.value)}
              id=""
              cols={200}
              rows={2}
            ></textarea>
            <button onClick={handleSendMessage} type="button">
              {" "}
              Send{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
