"use client";

import { ForecastChartOptions, SECONDS_TO_MS, TimeBlock } from "@/lib/enums";
import { ForecastDay } from "@/lib/types";
import { useWeatherStore } from "@/stores/weatherStore";
import { format } from "date-fns";
import { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ForecastChartProps {
  forecastDay: ForecastDay;
  chartMetric: ForecastChartOptions;
}

/**
 * Displays a chart with the weather info for a given time block and chart metric
 *
 * @param forecastDay - The day we want to get the chart data from
 * @param chartMetric - The type of data we want to show in the chart (wind, rain prob., temperature)
 */
export function ForecastChart({
  forecastDay,
  chartMetric,
}: ForecastChartProps) {
  const selectedTimeBlock = useWeatherStore((state) => state.selectedTimeBlock);

  const filteredHours = useMemo(() => {
    if (!forecastDay.hours) return [];

    return forecastDay.hours.filter((hour) => {
      const date = new Date(hour.datetimeEpoch * SECONDS_TO_MS);
      const hourNum = date.getHours();
      if (selectedTimeBlock === TimeBlock.Morning) {
        if (hourNum >= 8 && hourNum <= 12) return hour;
      }
      if (selectedTimeBlock === TimeBlock.Afternoon) {
        if (hourNum >= 12 && hourNum <= 17) return hour;
      }
      if (selectedTimeBlock === TimeBlock.Evening) {
        if (hourNum >= 17 && hourNum <= 21) return hour;
      }
    });
  }, [forecastDay, selectedTimeBlock]);

  const dataKey = useMemo(() => {
    switch (chartMetric) {
      case ForecastChartOptions.RainProbability:
        return "precipprob";
      case ForecastChartOptions.WindSpeed:
        return "windspeed";
      case ForecastChartOptions.Temperature:
      default:
        return "temp";
    }
  }, [chartMetric]);

  const strokeColor = useMemo(() => {
    switch (chartMetric) {
      case ForecastChartOptions.Temperature:
        return "#f97316"; // orange
      case ForecastChartOptions.RainProbability:
        return "#3b82f6"; // blue
      case ForecastChartOptions.WindSpeed:
        return "#10b981"; // green
    }
  }, [chartMetric]);

  const unit = useMemo(() => {
    switch (chartMetric) {
      case ForecastChartOptions.RainProbability:
        return "%";
      case ForecastChartOptions.WindSpeed:
        return "mph";
      case ForecastChartOptions.Temperature:
      default:
        return "°F";
    }
  }, [chartMetric]);

  return (
    <div className="h-64 w-full mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={filteredHours}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="datetimeEpoch"
            tickFormatter={(val) =>
              format(val * SECONDS_TO_MS, "ha").toLowerCase()
            }
          />
          <YAxis
            dataKey={dataKey}
            domain={["auto", "auto"]}
            tickFormatter={(value) => `${Math.round(value)}${unit}`}
          />
          <Tooltip
            labelFormatter={(val) =>
              format(val * SECONDS_TO_MS, "eeee ha").toLowerCase()
            }
            formatter={(value: number) => `${Math.round(value)}${unit}`}
          />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={strokeColor}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
