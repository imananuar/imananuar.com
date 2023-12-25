import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { socket } from "@/lib/socket";
import { connect } from "http2";

type dataType = {
  message: string;
  user: string;
};

export default function Chat() {
  const [text, setText] = useState("");
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [sendText, setSendText] = useState("");
  const [incomingText, setIncomingText] = useState("");
  const [dummyText, setDummyText] = useState<dataType[]>([]);
  const [userId, setUserId] = useState("");

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
      setDummyText((prev) => [
        ...prev,
        { message: data.message, user: data.user },
      ]);
      setIncomingText(data.message);
    };

    const getId = (id: string) => {
      console.log(id);
      setUserId(id);
    };

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("test", onTest);
    socket.on("id", getId);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("test", onTest);
      socket.off("id", getId);
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
    socket.emit("message", { message: text, user: userId });
    setSendText(text);
    setDummyText((prev) => [...prev, { message: text, user: userId }]);
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
          {dummyText.map((data) =>
            data.user === userId ? (
              <p key={userId}>{data.message}</p>
            ) : (
              <p key={userId} className="text-red-400">{data.message}</p>
            )
          )}
        </ul>
      </div>
    </>
  );
}
