// pages/api/example.js

import clientPromise from "../../../db/dbCon";
import { NextResponse } from "next/server";

export async function POST(req, res, next) {
  const request = await req.json();

  const client = await clientPromise;
  const db = client.db("Game3DModel"); // replace 'databaseName' with your actual database name

  const collection = db.collection("users"); // replace 'collectionName' with your actual collection name

  //   const data = await collection.insert({}).toArray();

  // const result = await collection.insertOne(request);

  return NextResponse.json(result);
}
