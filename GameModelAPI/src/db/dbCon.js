import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // your MongoDB URI from the .env file
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In development mode, reuse the same client to prevent excessive connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect().then(() => {
      console.log("Connected to MongoDB");
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always create a new client
  client = new MongoClient(uri, options);
  clientPromise = client.connect().then(() => {
    console.log("Connected to MongoDB");
  });
}

export default clientPromise;
