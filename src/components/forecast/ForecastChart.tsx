"use client";

import { SECONDS_TO_MS, TimeBlock } from "@/lib/enums";
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
}

/**
 * Displays a chart with the weather info for a given time block
 *
 * @param forecastDay - The day we want to get the chart data from
 */
export function ForecastChart({ forecastDay }: ForecastChartProps) {
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
            dataKey="temp"
            domain={["auto", "auto"]}
            tickFormatter={(value) => `${Math.round(value)}`}
          />
          <Tooltip
            labelFormatter={(val) =>
              format(val * SECONDS_TO_MS, "eeee ha").toLowerCase()
            }
            formatter={(value: number) => `${Math.round(value)}°F`}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
