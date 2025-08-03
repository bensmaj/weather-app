import { Day, TimeBlock } from "@/lib/constants";
import { create } from "zustand";

interface WeatherStore {
  location: string; // Location entered by the user
  setLocation: (location: string) => void; // Location setter

  selectedDay: Day; // Day of week selected by the user
  setSelectedDay: (day: Day) => void; // Day setter

  selectedTimeBlock: TimeBlock; // Time block selected by the user
  setSelectedTimeBlock: (timeBlock: TimeBlock) => void; // Time block setter
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  location: "Toronto",
  setLocation: (location) => set({ location }),

  selectedDay: Day.Friday,
  setSelectedDay: (selectedDay) => set({ selectedDay }),

  selectedTimeBlock: TimeBlock.Morning,
  setSelectedTimeBlock: (selectedTimeBlock) => set({ selectedTimeBlock }),
}));
