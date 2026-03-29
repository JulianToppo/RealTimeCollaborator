"use client";

import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  console.log("Home is called");
  return (
    <div style={{ width: "100%",backgroundColor:"Green" , display:"flex" ,justifyContent:"center" ,flexDirection:"column", alignItems:"center"}}>
      <textarea
        placeholder="Write your code here"
        value={text}
        onChange={(e) => {
          e.preventDefault();
          setText(e.target.value);
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
