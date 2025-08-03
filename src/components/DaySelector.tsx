"use client";

import { Day } from "@/lib/constants";
import { useWeatherStore } from "@/stores/weatherStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const DAYS: Day[] = Object.values(Day); // All the days of the week the user can select from

export function DaySelector() {
  const selectedDay = useWeatherStore((state) => state.selectedDay);
  const setSelectedDay = useWeatherStore((state) => state.setSelectedDay);

  return (
    <Select value={selectedDay} onValueChange={setSelectedDay}>
      <SelectTrigger className="w-[180px]">
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
