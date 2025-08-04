"use client";

import { TimeBlock } from "@/lib/enums";
import { useWeatherStore } from "@/stores/weatherStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const TIME_BLOCKS = [
  { label: "Morning (8am-12pm)", value: TimeBlock.Morning },
  { label: "Afternoon (12pm-5pm)", value: TimeBlock.Afternoon },
  { label: "Evening (5pm-9pm)", value: TimeBlock.Evening },
];

/**
 * This input selector allows the user to select the time block they want to get weather info for (used in the charts)
 */
export function TimeSelector() {
  const selectedTimeBlock = useWeatherStore((state) => state.selectedTimeBlock);
  const setSelectedTimeBlock = useWeatherStore(
    (state) => state.setSelectedTimeBlock
  );

  return (
    <Select value={selectedTimeBlock} onValueChange={setSelectedTimeBlock}>
      <SelectTrigger className="w-[250px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {TIME_BLOCKS.map((timeBlock) => (
          <SelectItem key={timeBlock.value} value={timeBlock.value}>
            {timeBlock.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
