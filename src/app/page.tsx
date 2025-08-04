"use client";

import { DaySelector } from "@/components/selectors/DaySelector";
import Header from "@/components/Header";
import { LocationInput } from "@/components/selectors/LocationInput";
import { TimeSelector } from "@/components/selectors/TimeSelector";
import { Button } from "@/components/ui/button";
import { getForecast } from "@/lib/getWeather";
import { useWeatherStore } from "@/stores/weatherStore";
import { ForecastDisplay } from "@/components/forecast/ForecastDisplay";

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

      <div className="flex md:flex-row flex-col mt-4 gap-3 justify-center">
        <LocationInput />
        <DaySelector />
        <TimeSelector />
        <Button onClick={getWeather}>Get Weather</Button>
      </div>
      <ForecastDisplay />
    </div>
  );
}
