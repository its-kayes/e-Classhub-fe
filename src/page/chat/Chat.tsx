import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { useAppSelector } from "../../store/app/hook";

type IMessages = {
  text: string;
  name: string;
  id: string;
  socketID: string;
};

export default function Chat({ socket }: { socket: Socket }) {
  const { name } = useAppSelector((state) => state.local.userReducer);
  const [userName, setUserName] = useState("");
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("messageResponse", (data) => setMessages([...messages, data]));
  }, [socket, messages]);

  const handleSubmit = () => {
    localStorage.setItem("userName", userName);
    socket.emit("newUser", { userName: name, socketID: socket.id });
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      socket.emit("message", {
        text: message,
        name,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };

  return (
    <div>
      <h2> {name} Connected ............ </h2>

      <input
        type="text"
        name="username"
        id=""
        onChange={(e) => setUserName(e.target.value)}
        placeholder="username"
      />
      <button type="button" onClick={handleSubmit}>
        {" "}
        Login{" "}
      </button>

      <h2> Chatting....... </h2>

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
