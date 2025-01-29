import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { useState } from "react";
function signIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    const request = {
      EMAIL: email,
      PASSWORD: password,
    };

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    })
      .then(
        (res) => res.json() // Parse JSON response
      )
      .then((data) => {
        console.log("\n\n\nLogin function response: ", data); // Use the parsed data

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
          // backgroundImage: "url('/public/calculator.png')",
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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Link href={""}>
              <Button
                variant="success"
                type="submit"
                style={{ marginRight: "20px" }}
                onClick={() => {
                  // router.push("/fileUpload");
                  handleLogin();
                }}
              >
                Sign In
              </Button>
            </Link>
            <Link href={"/signUp"}>
              <Button variant="success">Sign Up</Button>
            </Link>
          </Form>
          <div style={{ color: "red" }}>{errorMessage}</div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default signIn;
