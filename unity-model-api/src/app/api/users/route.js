import { NextResponse } from "next/server";

export function GET(req) {
  const users = [
    {
      name: "John",
      email: "john@example.com",
      id: 1,
    },
    {
      name: "shayan",
      email: "shayan@example.com",
      id: 2,
    },
  ];

  return NextResponse.json(users);
}
export function POST(req, res, next) {}
export function DELETE(req, res, next) {}
export function PUT(req, res, next) {}
