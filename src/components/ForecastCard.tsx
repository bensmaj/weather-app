import { SECONDS_TO_MS } from "@/lib/enums";
import { ForecastDay } from "@/lib/types";
import { format } from "date-fns";
import {
  CloudRain,
  CloudSnow,
  CloudSun,
  Cloudy,
  Sun,
  Wind,
} from "lucide-react";
import { useMemo } from "react";

interface ForecastCardProps {
  forecastDay: ForecastDay;
}

/**
 *
 * @param forecastDay -  A given day we want to display a forecast for
 * @returns - A card displaying the forecast for a given day
 */
export function ForecastCard({ forecastDay }: ForecastCardProps) {
  const getWeatherIcon = (size: number = 40) => {
    const conditionsLower = forecastDay.conditions.toLowerCase();

    if (conditionsLower.includes("snow")) {
      return <CloudSnow size={size} />;
    }
    if (conditionsLower.includes("rain")) {
      return <CloudRain size={size} className="text-blue-500" />;
    }
    if (
      conditionsLower.includes("partly") ||
      conditionsLower.includes("partially")
    ) {
      return <CloudSun size={size} className="text-yellow-500" />;
    }
    if (
      conditionsLower.includes("cloud") ||
      conditionsLower.includes("overcast")
    ) {
      return <Cloudy size={size} className="text-gray-500" />;
    } else {
      return <Sun size={size} className="text-yellow-500" />;
    }
  };

  const formattedDate = useMemo(
    () => format(forecastDay.datetimeEpoch * SECONDS_TO_MS, "EEEE MMM d"),
    [forecastDay.datetimeEpoch]
  );

  return (
    <div className="border rounded-lg p-4 w-full shadow">
      <h3 className="text-lg font-bold text-center">{formattedDate}</h3>
      <div>{getWeatherIcon()}</div>
      <div>
        <p className="text-xl">
          {forecastDay.conditions} {Math.round(forecastDay.temp)}°F
        </p>
        <div className="flex gap-2 items-center">
          <Wind size={15} />
          <p className="text-sm text-gray-600">
            winds {forecastDay.windspeed} mph
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <CloudRain size={15} />
          <p className="text-sm text-gray-600">
            {Math.round(forecastDay.precipprob)}% chance of rain
          </p>
        </div>
      </div>
    </div>
  );
}
