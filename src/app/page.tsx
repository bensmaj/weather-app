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
  const loading = useWeatherStore((state) => state.loading); // The location the user entered
  const setLoading = useWeatherStore((state) => state.setLoading); // the loading state setter

  const getWeather = async () => {
    setLoading(true);
    const data = await getForecast(location);
    if (data) setForecast(data);
    setLoading(false);
  };

  return (
    <div className="font-sans">
      <Header />

      <div className="flex md:flex-row flex-col mt-4 gap-3 justify-center">
        <LocationInput />
        <DaySelector />
        <TimeSelector />
        <Button onClick={getWeather} disabled={loading}>
          Get Weather
        </Button>
      </div>
      <ForecastDisplay />
    </div>
  );
}
