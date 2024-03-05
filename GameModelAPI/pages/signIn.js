import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { useRouter } from "next/router";
function signIn() {
  const router = useRouter();
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
          backgroundImage: "url('/public/calculator.png')",
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
              {/* <Form.Label>Email address</Form.Label>   */}
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Link href={""}>
              <Button
                variant="success"
                type="submit"
                style={{ marginRight: "20px" }}
                onClick={() => {
                  router.push("/fileUpload");
                }}
              >
                Sign In
              </Button>
            </Link>
            <Link href={"/signUp"}>
              <Button variant="success">Sign Up</Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default signIn;
