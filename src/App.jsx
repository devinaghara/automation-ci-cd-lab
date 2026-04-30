import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const fetchMessage = async () => {
    // fake API simulation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello from API 🚀");
      }, 500);
    });
  };

  const handleFetch = async () => {
    const res = await fetchMessage();
    setMessage(res);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>CI/CD Demo App</h1>

      <h2 data-testid="count">{count}</h2>

      <button onClick={handleIncrement}>
        Increment
      </button>

      <br /><br />

      <button onClick={handleFetch}>
        Fetch Message
      </button>

      <p data-testid="message">{message}</p>
    </div>
  );
}

export default App;