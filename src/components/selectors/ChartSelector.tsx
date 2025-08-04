"use client";

import { ForecastChartOptions } from "@/lib/enums";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CHART_OPTIONS: ForecastChartOptions[] =
  Object.values(ForecastChartOptions); // All the days of the week the user can select from

interface ChartSelectorProps {
  selected: ForecastChartOptions;
  onChange: (value: ForecastChartOptions) => void;
}

/**
 * Input selector that allows the user to choose which data point they want to show in the chart (weather, wind, or rain prob.)
 */
export function ChartSelector({ selected, onChange }: ChartSelectorProps) {
  return (
    <Select value={selected} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {CHART_OPTIONS.map((type) => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
