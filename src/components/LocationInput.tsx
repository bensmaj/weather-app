"use client";

import { MapPin } from "lucide-react";
import { Input } from "./ui/input";
import { useWeatherStore } from "@/stores/weatherStore";

/**
 * This component allows users to select the city they want to get the weather for.
 *
 * @returns JSX Component
 */
export function LocationInput() {
  const location = useWeatherStore((state) => state.location); // The location the user entered
  const setLocation = useWeatherStore((state) => state.setLocation); // The setter for the location state

  return (
    <div className="relative flex items-center">
      <MapPin
        size={20}
        className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform"
      />
      <Input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-md pl-8"
      />
    </div>
  );
}
