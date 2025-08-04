"use client";

import { DayToNumber, SECONDS_TO_MS } from "@/lib/enums";
import { useWeatherStore } from "@/stores/weatherStore";
import { useMemo } from "react";
import { ForecastCard } from "./ForecastCard";
import { ForecastSkeleton } from "./ForecastSkeleton";
import EmptyForecast from "./EmptyForecast";
import { ChartSelector } from "../selectors/ChartSelector";

/**
 * Handles whether to display the empty state, skeleton, or forecasts
 */
export function ForecastDisplay() {
  const forecast = useWeatherStore((state) => state.forecast);
  const selectedDay = useWeatherStore((state) => state.selectedDay);
  const loading = useWeatherStore((state) => state.loading);

  const dayForecasts = useMemo(() => {
    if (!forecast) return [];

    const index = DayToNumber[selectedDay];

    return forecast.days
      .filter((day) => {
        const date = new Date(day.datetimeEpoch * SECONDS_TO_MS);
        if (date.getDay() === index) {
          return day;
        }
      })
      .slice(0, 2);
  }, [forecast, selectedDay]);

  return (
    <div className="mt-4 flex justify-center w-full">
      {loading ? (
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center w-full">
          <ForecastSkeleton />
          <ForecastSkeleton />
        </div>
      ) : forecast ? (
        <div className="w-full">
          <div className="flex md:flex-row flex-col gap-4 justify-center items-center w-full">
            {dayForecasts.map((forecastDay, index) => (
              <ForecastCard
                index={index}
                forecastDay={forecastDay}
                key={forecastDay.datetime}
              />
            ))}
          </div>
        </div>
      ) : (
        <EmptyForecast />
      )}
    </div>
  );
}
