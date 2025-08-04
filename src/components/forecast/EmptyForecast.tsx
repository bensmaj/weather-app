/**
 * Display an empty state that prompts the user to make a forecast
 */
export default function EmptyForecast() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center text-gray-600 min-h-[300px]">
      <h2 className="text-lg font-medium">No Forecast Yet</h2>
      <p>
        Enter a location and click <strong>Get Weather</strong> to see the
        forecast.
      </p>
    </div>
  );
}
