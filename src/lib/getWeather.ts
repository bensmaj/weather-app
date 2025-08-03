//TODO add type for the return

import { Forecast } from "./types";

/**
 *
 * @param location - Location string
 * @returns - The forecast for the next 10 days or undefined if the request failed
 */
export async function getForecast(
  location: string
): Promise<Forecast | undefined> {
  try {
    const res = await fetch(`/api/weather?location=${location}`);
    if (!res.ok) console.error(`Response status: ${res.status}`);

    const weather: Forecast = await res.json();
    return weather;
  } catch (error) {
    console.error(error);
  }
}
