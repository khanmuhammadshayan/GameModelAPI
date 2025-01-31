"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useRouter } from "next/navigation";

function FileUpload() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // const formData = new FormData();
      // formData.append("file", selectedFile);

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
        backgroundColor: "white",
      }}
    >
      <Card style={{ width: "500px", backgroundColor: "#e0f2f1" }}>
        <Card.Body>
          <Card.Title>File Upload</Card.Title>
          <div className="mb-3">
            <label htmlFor="fileInput" className="form-label">
              Choose file:
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              className="form-control"
            />
          </div>
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
        </Card.Body>
      </Card>
    </div>
  );
}

export default FileUpload;
