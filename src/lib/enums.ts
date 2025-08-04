/**
 * Represents a day of the week that the user wants to get weather for
 */
export enum Day {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

/**
 * Represents a time block that the user wants to get the weather for
 */
export enum TimeBlock {
  Morning = "Morning",
  Afternoon = "Afternoon",
  Evening = "Evening",
}

/**
 * Score for the weather day
 */
export enum ForecastScore {
  Excellent = "Excellent",
  Good = "Good",
  Okay = "Okay",
  Bad = "Bad",
}

/**
 * Represents the different forecast chart options
 */
export enum ForecastChartOptions {
  Temperature = "Temperature",
  RainProbability = "Rain Probability",
  WindSpeed = "Wind Speed",
}

/**
 * Converts a day to the number used by the Date object
 */
export const DayToNumber: Record<Day, number> = {
  [Day.Sunday]: 0,
  [Day.Monday]: 1,
  [Day.Tuesday]: 2,
  [Day.Wednesday]: 3,
  [Day.Thursday]: 4,
  [Day.Friday]: 5,
  [Day.Saturday]: 6,
};

export const SECONDS_TO_MS = 1000; // Used to convert seconds to ms (for epoch time)
