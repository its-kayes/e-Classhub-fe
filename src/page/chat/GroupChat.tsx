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
  const [typing, setTyping] = useState<IMessage | null>();

  const lastMessageRef = useRef<HTMLDivElement>(null);

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

  const handleTyping = () => {
    if (!message) return;
    socket.emit("typing", {
      room,
      message,
      name,
      token: `${socket.id}${Math.random()}`,
      socketID: socket.id,
      email,
      time: new Date(),
    });
  };

  useEffect(() => {
    socket.on(`group-chat-${room}`, (data) => setMessages([...messages, data]));
  }, [messages, room, socket]);

  useEffect(() => {
    socket.on(`who-typing-${room}`, (data) => setTyping(data));
  }, [room, socket]);

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  }, [messages, typing]);

  return (
    <div className="group-chat-section">
      <div className="header-section">
        <p> Group Chat </p>
      </div>

      <div className="all-messages-section">
        <div className="message-section">
          {/* <--------------- Message ---------------> */}
          {messages.map((msg) => {
            if (msg.email === email) {
              return (
                <div className="own-message">
                  <div className="message-body">
                    <div className="header">
                      <p className="time"> {msg.time?.slice(0, 10)} </p>
                    </div>
                    <p className="text"> {msg.message} </p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="message">
                  <img src={UserImage} alt="User Image" />
                  <div className="message-body">
                    <div className="header">
                      <p className="name"> {msg.name} </p>
                      <p className="time"> {msg.time?.slice(0, 10)} </p>
                    </div>
                    <p className="text"> {msg.message} </p>
                  </div>
                </div>
              );
            }
          })}

          {/* <--------------- Typing ---------------> */}

          {typing && typing.email !== email && (
            <div className="message">
              <img src={UserImage} alt="User Image" />
              <div className="message-body">
                <div className="header">
                  <p className="name"> {typing.name} </p>
                </div>
                <p className="typing">...</p>
              </div>
            </div>
          )}

          <div ref={lastMessageRef} />
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
          onKeyDown={handleTyping}
          onBlur={() => setTyping(null)}
          placeholder="Type a message __"
        ></textarea>
        <button onClick={handleSendMessage} type="button">
          Send
        </button>
      </div>
    </div>
  );
}
