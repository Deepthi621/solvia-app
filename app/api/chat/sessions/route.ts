import { NextRequest, NextResponse } from "next/server";

const BACKEND_API_URL =
  process.env.BACKEND_API_URL ||
  "http://localhost:3001";

export async function GET(req: NextRequest) {
  try {
    console.log("Fetching all chat sessions...");
    const authHeader = req.headers.get("Authorization");

    if (!authHeader) {
      return NextResponse.json(
        { error: "Authorization header is required" },
        { status: 401 }
      );
    }

    const response = await fetch(`${BACKEND_API_URL}/chat/sessions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Failed to fetch chat sessions:", error);
      return NextResponse.json(
        { error: error.error || "Failed to fetch chat sessions" },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("Chat sessions fetched:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching chat sessions:", error);
    return NextResponse.json(
      { error: "Failed to fetch chat sessions" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    console.log("Creating new chat session...");
    const authHeader = req.headers.get("Authorization");

    if (!authHeader) {
      return NextResponse.json(
        { error: "Authorization header is required" },
        { status: 401 }
      );
    }

    const response = await fetch(`${BACKEND_API_URL}/chat/sessions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Failed to create chat session:", error);
      return NextResponse.json(
        { error: error.error || "Failed to create chat session" },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("Chat session created:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error creating chat session:", error);
    return NextResponse.json(
      { error: "Failed to create chat session" },
      { status: 500 }
    );
  }
}