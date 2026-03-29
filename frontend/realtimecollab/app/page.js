"use client";

import { useEffect, useState } from "react";
import {io} from "socket.io-client";



export default function Home() {
  const [text, setText] = useState("");
  const [socket, setSocket] = useState(null);
  console.log("Home is called");

  useEffect(() => {
    const s = io("http://localhost:5000");
    setSocket(s);
  
    return () => s.disconnect();
  }, []);
  
  useEffect(() => {
    if (!socket) return;
  
    socket.on("received-message", (data) => {
      setText(data);
    });
  
    return () => {
      socket.off("received-message");
    };
  }, [socket]);


  return (
    <div style={{ width: "100%",backgroundColor:"Green" , display:"flex" ,justifyContent:"center" ,flexDirection:"column", alignItems:"center"}}>
      <textarea
        placeholder="Write your code here"
        value={text}
        onChange={(e) => {
          e.preventDefault();
          setText(e.target.value);
          socket.emit('send-message',e.target.value)
        }}
        style={{
          width:"80%",
          height: "300px",
          margin: "20px",
          padding: "20px",
          border: "2px solid black",
          borderRadius: "20px",
        }}
      ></textarea>

      <h6>See what is being printed:</h6>
      <p>{text}</p>
    </div>
  );
}
