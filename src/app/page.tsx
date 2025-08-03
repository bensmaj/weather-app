"use client";

import { DaySelector } from "@/components/DaySelector";
import Header from "@/components/Header";
import { LocationInput } from "@/components/LocationInput";
import { TimeSelector } from "@/components/TimeSelector";
import { useWeatherStore } from "@/stores/weatherStore";

export default function Home() {
  const location = useWeatherStore((state) => state.location); // The location the user entered

  return (
    <div className="font-sans">
      <Header />

      <div className="flex">
        <LocationInput />
        <DaySelector />
        <TimeSelector />
        {location}
      </div>
    </div>
  );
}
