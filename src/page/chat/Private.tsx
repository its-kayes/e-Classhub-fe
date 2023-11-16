import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/app/hook";
import { Socket } from "socket.io-client";
import { useParams } from "react-router-dom";

type IMessages = {
  text: string;
  name: string;
  id: string;
  socketID: string;
  email: string;
};

export default function Private({ socket }: { socket: Socket }) {
  const { room } = useParams();

  const { name, email } = useAppSelector((state) => state.local.userReducer);

  const [messages, setMessages] = useState<IMessages[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on(`private-chat-${room}`, (data) =>
      setMessages([...messages, data])
    );
  }, [socket, messages, room]);

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit("private-chat", {
        text: message,
        name,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        room,
        email,
      });
    }
    setMessage("");
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <h3>
              {" "}
              <span
                style={{
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                User name :-
              </span>
              {message.name}{" "}
            </h3>
            <p>
              {" "}
              <span
                style={{
                  color: "green",
                  fontWeight: "bold",
                }}
              >
                {" "}
                Message:-{" "}
              </span>{" "}
              {message.text}{" "}
            </p>
          </div>
        ))}
      </div>

      <h2> Send Msg..... </h2>
      <input
        type="text"
        name="userMsg"
        id=""
        placeholder="user msg"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="button" onClick={handleSendMessage}>
        {" "}
        Send Msg{" "}
      </button>
    </div>
  );
}
