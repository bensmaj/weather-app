import {
  BadgeVariantMap,
  ForecastChartOptions,
  ForecastScore,
  SECONDS_TO_MS,
} from "@/lib/constants";
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
import { useMemo, useState } from "react";
import { ForecastChart } from "./ForecastChart";
import { meetupScore } from "@/lib/weatherUtils";
import { Badge } from "../ui/badge";
import { ChartSelector } from "../selectors/ChartSelector";

interface ForecastCardProps {
  forecastDay: ForecastDay;
  index: number;
}

/**
 *
 * @param forecastDay -  A given day we want to display a forecast for
 * @returns - A card displaying the forecast for a given day
 */
export function ForecastCard({ forecastDay, index }: ForecastCardProps) {
  const [selectedChartMetric, setSelectedChartMetric] =
    useState<ForecastChartOptions>(ForecastChartOptions.Temperature);

  const formattedDate = useMemo(
    () => format(forecastDay.datetimeEpoch * SECONDS_TO_MS, "EEEE MMM d"),
    [forecastDay.datetimeEpoch]
  );

  const score = useMemo(() => meetupScore(forecastDay), [forecastDay]); // The score of the day

  /**
   * This function is used to determine which icon to display to the user, depending on the weather conditions
   *
   * @param iconSize - The size of the icons (defaults to 40px)
   * @returns - A lucid icon
   */
  const getWeatherIcon = (iconSize: number = 40) => {
    const conditionsLower = forecastDay.conditions.toLowerCase();

    if (conditionsLower.includes("snow")) {
      return <CloudSnow size={iconSize} />;
    }
    if (conditionsLower.includes("rain")) {
      return <CloudRain size={iconSize} className="text-blue-500" />;
    }
    if (
      conditionsLower.includes("partly") ||
      conditionsLower.includes("partially")
    ) {
      return <CloudSun size={iconSize} className="text-yellow-500" />;
    }
    if (
      conditionsLower.includes("cloud") ||
      conditionsLower.includes("overcast")
    ) {
      return <Cloudy size={iconSize} className="text-gray-500" />;
    } else {
      return <Sun size={iconSize} className="text-yellow-500" />;
    }
  };

  return (
    <div className="border rounded-lg p-4 md:w-[450px] w-full shadow ">
      <h3 className="text-lg font-bold text-center">
        {index === 0 ? "This" : "Next"} {formattedDate}
      </h3>
      <div className="flex justify-center mt-1">
        <Badge className={BadgeVariantMap[score]}>{score} day</Badge>
      </div>
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
      <ForecastChart
        forecastDay={forecastDay}
        chartMetric={selectedChartMetric}
      />
      <ChartSelector
        selected={selectedChartMetric}
        onChange={setSelectedChartMetric}
      />
    </div>
  );
}
