// import clientPromise from "../../../db/dbCon";
import { NextResponse } from "next/server";

export async function POST(req, res, next) {
  const { EMAIL, PASSWORD, USERNAME } = await req.json();

  if (!EMAIL || !PASSWORD || !USERNAME) {
    return NextResponse.json(
      { statusCode: 400, message: "required paramters is missing" },
      { status: 400 }
    );
  }

  const user = { email: EMAIL, password: PASSWORD, userName: USERNAME };

  return NextResponse.json(
    { statusCode: 200, message: "User Resgisterd", user: user },
    { status: 200 }
  );

  const client = await clientPromise;
  // const db = client.db("Game3DModel"); // replace 'databaseName' with your actual database name

  // const collection = db.collection("users"); // replace 'collectionName' with your actual collection name

  //   const data = await collection.insert({}).toArray();

  // const result = await collection.insertOne(request);

  return NextResponse.json(result);
}
