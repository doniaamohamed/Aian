import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, topic, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    const response = await fetch(`${backendUrl}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, company, topic, message, recipient: "hagernofla8@gmail.com" }),
    });

    if (!response.ok) {
      console.log("[Contact Submission Log]:", { name, email, company, topic, message, to: "hagernofla8@gmail.com" });
    }

    return NextResponse.json({
      success: true,
      message: "Message received successfully!",
    });
  } catch (error) {
    console.error("Contact form processing:", error);
    return NextResponse.json({
      success: true,
      message: "Message received successfully!",
    });
  }
}