"use client";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    const request = {
      EMAIL: email,
      PASSWORD: password,
    };

    console.log(request);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })
      .then(
        (res) => res.json() // Parse JSON response
      )
      .then((data) => {
        console.log("\n\n\nLogin function response: ", data);

        if (data.statusCode === 200) {
          // Redirect to dashboard page
          window.location.href = "/fileUpload";
        } else {
          setErrorMessage(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Handle errors
      });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        paddingTop: "100px",
        paddingLeft: "100px",
        backgroundColor: "lightblue",
      }}
    >
      <h1 style={{ color: "blue", fontSize: "65px" }}>Game Model API</h1>
      <Card
        style={{
          backgroundColor: "blue",
          width: "400px",
          float: "right",
          margin: "60px",
          padding: "20px",
        }}
      >
        <Card.Body>
          <Card.Title className="mb-4" style={{ color: "white" }}>
            Please Login
          </Card.Title>

          {/* Email Input */}
          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Sign In Button */}
          <Button
            variant="success"
            type="button"
            style={{ marginRight: "20px" }}
            onClick={() => handleLogin()}
          >
            Sign In
          </Button>

          {/* Sign Up Button */}
          <Link href={"/signUp"}>
            <Button variant="success">Sign Up</Button>
          </Link>

          {/* Display error message */}
          <div style={{ color: "red", marginTop: "10px" }}>{errorMessage}</div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignIn;
