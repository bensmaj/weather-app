import { Day, TimeBlock } from "@/lib/enums";
import { Forecast } from "@/lib/types";
import { create } from "zustand";

interface WeatherStore {
  location: string; // Location entered by the user
  setLocation: (location: string) => void; // Location setter

  selectedDay: Day; // Day of week selected by the user
  setSelectedDay: (day: Day) => void; // Day setter

  selectedTimeBlock: TimeBlock; // Time block selected by the user
  setSelectedTimeBlock: (timeBlock: TimeBlock) => void; // Time block setter

  forecast: Forecast | null; // The weather forecast
  setForecast: (date: Forecast | null) => void; // forecast setter

  loading: boolean; // loading state while getting the forecast result from the API
  setLoading: (loading: boolean) => void; // loading setter
}

export const useWeatherStore = create<WeatherStore>((set) => ({
  location: "Toronto",
  setLocation: (location) => set({ location }),

  selectedDay: Day.Friday,
  setSelectedDay: (selectedDay) => set({ selectedDay }),

  selectedTimeBlock: TimeBlock.Morning,
  setSelectedTimeBlock: (selectedTimeBlock) => set({ selectedTimeBlock }),

  forecast: null,
  setForecast: (forecast) => set({ forecast }),

  loading: false,
  setLoading: (loading) => set({ loading }),
}));
