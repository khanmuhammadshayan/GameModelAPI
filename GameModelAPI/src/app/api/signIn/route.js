import { NextResponse } from "next/server";

export async function POST(req, res, next) {
  const request = await req.json();
  console.log("sign function calls", request);

  return NextResponse.json(ree);
}
