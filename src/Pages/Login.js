import React, { useState } from "react";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin() {
    // Kiểm tra dữ liệu đăng nhập
    if (email === "admin@gmail.com" && password === "admin123") {
      setIsLoggedIn(true);
      console.log("Login Successful!");
      window.location.href = "/Home"; // Chuyển hướng đến trang Home nếu đăng nhập thành công
    } else {
        window.location.href = "/HomeUser";
    }
  }
  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="input-field"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="input-field"
      />
      <br />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
    </div>
  );
}
export default Login;
