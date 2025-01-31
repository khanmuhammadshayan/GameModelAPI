import { NextResponse } from "next/server";
import authController from "../../controller/authController";
let USER = [{ email: "khanmuhammadshayan@gmail.com", password: "shayan" }];

// export default function handler(req, res) {
export async function POST(req) {
  console.log("post called");
  const resp = await authController.login(req);

  return NextResponse.json(resp, { status: 200 });
}
