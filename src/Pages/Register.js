import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function signUp() {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post("https://646aaa197d3c1cae4ce2b26c.mockapi.io/register", data)
      .then((response) => {
        if (response.status >0){
          setShowSuccessMessage(true);
          swal({
            title: "Thank you!",
            text: `You registered succsessfully!    `,
            icon: "success",
          });
        } else {
          console.error("Registration Failed!");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  }

  return (
    <div className="register-container">
      {showSuccessMessage ? (
        window.location.href = "/Login"
      ) : (
        <div>
          <h1>Register Page</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="input-field"
          />
          <br />
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
          <button onClick={signUp} className="sign-up-button">
            Sign up
          </button>
        </div>
      )}
    </div>
  );
}

export default Register;
