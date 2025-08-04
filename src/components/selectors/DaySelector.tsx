"use client";

import { Day } from "@/lib/enums";
import { useWeatherStore } from "@/stores/weatherStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const DAYS: Day[] = Object.values(Day); // All the days of the week the user can select from

/**
 * Input selector that allows the user to choose which day of the week to get weather forecasts for
 */
export function DaySelector() {
  const selectedDay = useWeatherStore((state) => state.selectedDay);
  const setSelectedDay = useWeatherStore((state) => state.setSelectedDay);

  return (
    <Select value={selectedDay} onValueChange={setSelectedDay}>
      <SelectTrigger className="md:w-[180px] w-full">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {DAYS.map((day) => (
          <SelectItem key={day} value={day}>
            {day}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
