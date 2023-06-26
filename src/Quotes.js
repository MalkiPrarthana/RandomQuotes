import React, { useState } from "react";
import image1 from "./inverted-commas-svgrepo-com.png";
import image2 from "./inverted-2commas-svgrepo-com.png";
import { fetchQuote } from "./ApiCalls";

function Quotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  React.useEffect(() => {
    console.log("effect");

    // async function getQuote() {
    //   const data = await fetchQuote();
    //   setQuote(data.content);
    //   console.log(data.content);
    //   setAuthor(data.author);
    // }
    // getQuote();

    async function getQuote() {
      const data = await fetchQuote();
      setQuote(data.content);
      console.log(data.content);
      setAuthor(data.author);
    }
    getQuote();
    const interval = setInterval(() => {
      getQuote();
    }, 5000);
    return () => clearInterval(interval);
  }, [setQuote, setAuthor]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(to right, #ff6e7f, #acb6e5, #bfe9ff)",
        textAlign: "center",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          marginTop: "25vh",
          height: "50vh",
          width: "50vw",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src={image2}
          style={{
            position: "absolute",
            left: "-10px",
            top: "20px",
            opacity: 0.3,
            width: "10%",
          }}
        ></img>

        <div>
          <p
            style={{
              fontFamily: "Mali, cursive",
              fontSize: "45px",
            }}
          >
            {quote}
          </p>

          <p
            style={{
              fontFamily: "Mali, cursive",
              fontSize: "30px",
              marginTop: "20px",
            }}
          >
            &lt;&lt; {author} &gt;&gt;
          </p>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
