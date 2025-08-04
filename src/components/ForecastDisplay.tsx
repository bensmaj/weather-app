"use client";

import { DayToNumber, SECONDS_TO_MS } from "@/lib/enums";
import { useWeatherStore } from "@/stores/weatherStore";
import { useMemo } from "react";
import { ForecastCard } from "./ForecastCard";

export function ForecastDisplay() {
  const forecast = useWeatherStore((state) => state.forecast);
  const selectedDay = useWeatherStore((state) => state.selectedDay);
  const selectedTimeBlock = useWeatherStore((state) => state.selectedTimeBlock);

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
    <div className="mt-4">
      {!forecast ? (
        <p>no forecast data</p>
      ) : (
        <div className="flex md:flex-row flex-col gap-4">
          {dayForecasts.map((forecastDay) => (
            <ForecastCard
              forecastDay={forecastDay}
              key={forecastDay.datetime}
            />
          ))}
        </div>
      )}
    </div>
  );
}
