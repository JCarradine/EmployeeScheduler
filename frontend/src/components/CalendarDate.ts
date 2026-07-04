interface MonthDetails {
  year: number;
  monthIndex: number;
  day: number;
  monthName: string;
  dayName: string;
  totalDays: number;
}

const getDaysInMonth = (year: number, monthIndex: number): number => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

export const getCurrentMonthDetails = (): MonthDetails => {
  const today = new Date();

  return {
    year: today.getFullYear(),
    monthIndex: today.getMonth(),
    day: today.getDate(),
    monthName: today.toLocaleString("default", { month: "long" }),
    dayName: today.toLocaleString("default", { weekday: "short" }),
    totalDays: getDaysInMonth(today.getFullYear(), today.getMonth()),
  };
};
