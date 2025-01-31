"use client";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SignUp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (e) => {
    const request = {
      EMAIL: email,
      PASSWORD: password,
      USERNAME: name,
    };
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });

      const data = await res.json();
      console.log("Register function response: ", data);

      if (data.statusCode === 200) {
        router.push("/");
      } else {
        setErrorMessage(data.message);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "lightblue",
      }}
    >
      <Card
        style={{ backgroundColor: "blue", width: "500px", padding: "20px" }}
      >
        <Card.Body>
          <Card.Title className="mb-4" style={{ color: "white" }}>
            Please Register Yourself
          </Card.Title>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <Button
            variant="success"
            style={{ marginRight: "20px" }}
            onClick={handleRegister}
          >
            Register
          </Button>

          <Button variant="secondary" onClick={() => router.push("/signIn")}>
            Sign In
          </Button>
          {errorMessage && (
            <div style={{ color: "red", marginTop: "10px" }}>
              {errorMessage}
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignUp;
