import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";

function signUp() {
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
        style={{
          backgroundColor: "blue",
          width: "500px",
        }}
      >
        <Card.Body>
          <Card.Title className="mb-4" style={{ color: "white" }}>
            Please Register yourself
          </Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              style={{ marginRight: "20px" }}
            >
              Register
            </Button>
            <Link href={"/signIn"}>
              <Button variant="success">Sign In</Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default signUp;
