import { NextRequest, NextResponse } from "next/server";
import { startOfDay, addDays } from "date-fns";

export async function GET(req: NextRequest) {
  const API_URL =
    process.env.BACKEND_API_URL ||
    "http://localhost:3001";
  const token = req.headers.get("Authorization");

  if (!token) {
    return NextResponse.json({ message: "No token provided" }, { status: 401 });
  }

  try {
    // Get today's date range
    const today = startOfDay(new Date());
    const tomorrow = addDays(today, 1);

    // Fetch all activities from backend
    const response = await fetch(`${API_URL}/api/activity`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json(
        { error: error.message || "Failed to fetch activities" },
        { status: response.status }
      );
    }

    const allActivities = await response.json();
    
    // Filter activities for today
    const todaysActivities = allActivities.filter((activity: any) => {
      const activityDate = new Date(activity.timestamp || activity.createdAt);
      return activityDate >= today && activityDate < tomorrow;
    });

    return NextResponse.json(todaysActivities);
  } catch (error) {
    console.error("Error fetching today's activities:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
