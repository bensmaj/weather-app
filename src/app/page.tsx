"use client";

import { DaySelector } from "@/components/DaySelector";
import Header from "@/components/Header";
import { LocationInput } from "@/components/LocationInput";
import { TimeSelector } from "@/components/TimeSelector";
import { Button } from "@/components/ui/button";
import { getForecast } from "@/lib/getWeather";
import { useWeatherStore } from "@/stores/weatherStore";

export default function Home() {
  const location = useWeatherStore((state) => state.location); // The location the user entered
  const setForecast = useWeatherStore((state) => state.setForecast); // the forecast setter

  const getWeather = async () => {
    const data = await getForecast(location);
    if (data) setForecast(data);
    console.log(data?.days[0].cloudcover);
  };

  return (
    <div className="font-sans">
      <Header />

      <div className="flex">
        <LocationInput />
        <DaySelector />
        <TimeSelector />
        <Button onClick={getWeather}>Get Weather</Button>
        {location}
      </div>
    </div>
  );
}
