import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useRouter } from "next/router";
function fileUpload() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      // You can make a request to the server to upload the file here
      // For example:
      // fetch("your-upload-endpoint", {
      //   method: "POST",
      //   body: formData
      // }).then(response => {
      //   // handle response
      // });

      // For demonstration purposes, log the file details
      console.log("Uploading file:", selectedFile);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundColor: "white", // White background color
      }}
    >
      <Card style={{ width: "500px", backgroundColor: "#e0f2f1" }}>
        <Card.Body>
          <Card.Title>File Upload</Card.Title>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose file:</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />
            </Form.Group>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
              }}
            >
              <Button
                variant="primary"
                onClick={handleUpload}
                style={{ width: "80px" }}
              >
                Upload
              </Button>
              <div style={{ marginLeft: "10px" }}>
                <Button
                  variant="secondary"
                  onClick={() => {
                    router.push("/");
                  }}
                  style={{ width: "80px" }}
                >
                  Back
                </Button>
              </div>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default fileUpload;
