import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>home</h1>
      <button
        onClick={() => navigate("/form", { state: { id: 12, name: "dummy" } })}
      >
        Form
      </button>
    </div>
  );
};

export default Home;
