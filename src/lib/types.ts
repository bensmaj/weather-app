export interface Forecast {
  resolvedAddress: string;
  days: ForecastDay[];
}

export interface ForecastDay {
  datetime: string; // the date (format: YYYY-MM-DD)
  datetimeEpoch: number; // datetime in epoch format
  temp: number; // temperature at the location (mean) for the day (in fahrenheit)
  tempmax: number; // the highest the temp will go (in fahrenheit)
  tempmin: number; // the lowest the temp will go (in fahrenheit)
  humidity: number; // relative humidity in %
  windspeed: number; // the wind speed (in mph)
  conditions: string; // key weather features of the day (ex: Rain, Overcast, Partially Cloudy, etc.)
  cloudcover: number; // how much of the sky is covered in cloud ranging from 0-100%
  precip: number; // the amount of liquid precipitation that fell or is predicted to fall in the period.
  precipprob: number; // the likelihood of measurable precipitation ranging from 0% to 100%
  hours: ForecastHours[]; // the forecasted hours of this day
}

export interface ForecastHours {
  datetime: string; // the time (format: HH:mm:ss)
  datetimeEpoch: number; // the datetime in epoch format
  temp: number; // temperature at the location (in fahrenheit)
  windspeed: number; // the wind speed (in mph)
  precip: number; // the amount of liquid precipitation that fell or is predicted to fall in the period.
  precipprob: number; // the likelihood of measurable precipitation ranging from 0% to 100%
}
