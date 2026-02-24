import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Style.css";

function Signup() {
  const [type, setType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!username || !password || !type) {
      alert("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(u => u.username === username);
    if (userExists) {
      alert("User already exists!");
      return;
    }

    users.push({ username, password, type });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <>
      <Header />

      <div className="signup-container">
        <div className="signup-card">
          <h2>Signup</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select User Type</option>
            <option value="Admin">ADMIN</option>
            <option value="User">USER</option>
          </select>

          <button onClick={handleSignup}>Signup</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;