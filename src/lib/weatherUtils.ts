import { ForecastScore } from "./constants";
import { Forecast, ForecastDay } from "./types";

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
    if (!res.ok) {
      console.error(`Response status: ${res.status}`);
      return;
    }

    const weather: Forecast = await res.json();
    return weather;
  } catch (error) {
    console.error(error);
  }
}

/**
 *
 * @param day - The forecast day to calculate the meetup score for
 * @returns - ForecastScore enum (Bad, Okay, Good, or Excellent)
 */
export function meetupScore(day: ForecastDay): ForecastScore {
  const temp = day.temp;
  const wind = day.windspeed;
  const clouds = day.cloudcover;
  const rainChance = day.precipprob;
  const conditions = day.conditions.toLowerCase();

  if (conditions.includes("snow") || rainChance > 70) {
    return ForecastScore.Bad;
  }

  if (temp < 50 || temp > 90 || wind > 25 || rainChance > 40) {
    return ForecastScore.Okay;
  }

  if (
    temp >= 68 &&
    temp <= 75 &&
    wind <= 10 &&
    rainChance <= 20 &&
    clouds <= 30
  ) {
    return ForecastScore.Excellent;
  }

  return ForecastScore.Good;
}
