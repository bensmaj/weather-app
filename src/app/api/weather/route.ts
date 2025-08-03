import { NextRequest, NextResponse } from "next/server";

const WEATHER_BASE_URL: string =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"; // The base URL of the Visual Crossing Weather API

// TODO: Somehow get the timezone from the location
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const location = searchParams.get("location"); // The location param entered by the user

  const apiKey = process.env.VISUAL_CROSSING_API_KEY;

  const fullUrl: string = `${WEATHER_BASE_URL}${location}?unitGroup=us&key=${apiKey}&contentType=json`;

  try {
    const res = await fetch(fullUrl);
    if (!res.ok) {
      const errorText = await res.text();
      console.error("Weather API response error: ", res.status, errorText);
      return NextResponse.json(
        { error: "Weather API error" },
        { status: res.status }
      );
    }
    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Weather API fetch failed: ", error);
    return NextResponse.json(
      { error: "Failed to get the weather" },
      { status: 500 }
    );
  }
}
