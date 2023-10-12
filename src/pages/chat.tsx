import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { socket } from "@/lib/socket";
import { connect } from "http2";

const WS_URL = "ws://localhost:9876";

export default function Chat() {
  const [text, setText] = useState("");
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [sendText, setSendText] = useState("");
  const [incomingText, setIncomingText] = useState("");
  const [dummyText, setDummyText] = useState<string[]>([]);

  useEffect(() => {
    // Receive message from other clients
    const onConnect = () => {
      setIsConnected(true);
    };

    const onDisconnect = () => {
      setIsConnected(false);
    };

    const onTest = (data: any) => {
      console.log(data);
      setDummyText(prev => [...prev, data.message])
      setIncomingText(data.message);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("test", onTest);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("test", onTest);
    };
  }, []);

  const connect = () => {
    socket.connect();
  };

  const disconnect = () => {
    socket.disconnect();
  };

  // Send message to server + clients
  const sendMessage = () => {
    socket.emit("message", { message: text });
    setSendText(text);
    setDummyText((prev) => [...prev, text]);
  };

  return (
    <>
      <div>
        <p>Connection State : {" " + isConnected} </p>

        <Button onClick={connect} className="bg-white text-black">
          Connect
        </Button>
        <Button onClick={disconnect} className="bg-white text-black">
          Disconnect
        </Button>

        <input type="text" onChange={(e) => setText(e.target.value)} />
        <Button className="bg-white text-black" onClick={sendMessage}>
          Send Message
        </Button>
        <ul>
          {dummyText.map((text) => (
            <p>{text}</p>
          ))}
        </ul>
      </div>
    </>
  );
}
