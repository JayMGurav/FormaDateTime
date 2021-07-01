import {
  FullYear,
  PartialYear,
  FullMonth,
  PartialMonth,
  NumberMonth,
  DayOfTheMonth,
  DayOfTheWeek,
  Day,
  Hour24,
  Hour,
  Minutes,
  Seconds,
  PostOrAnteMeridiem,
  UserText,
} from "./subs.js";
import { TDay, IOptions, TMonth, TokenType, Tokens } from "./types";
import { padWithZeros, suffix } from "./utils";

const months: Array<TMonth> = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "November",
  "December",
];

const days: Array<TDay> = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function compiler(
  tokens: Tokens,
  date: Date,
  options: IOptions
) {
  const year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hrs = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

  let compiled = "";
  let index = 0;

  while (index < tokens.length) {
    const token = tokens[index];
    switch (token.t) {
      case UserText:
        // if it is user text push it to compiled text
        compiled += token.v;
        break;
      case Day:
        compiled += suffix(day);
        break;
      case DayOfTheWeek:
        compiled += days[date.getDay()];
        break;
      case DayOfTheMonth:
        compiled += options.padDays ? padWithZeros(day) : day;
        break;
      case PartialMonth:
        compiled += months[month].slice(0, 3);
        break;
      case NumberMonth:
        compiled += options.padMonths ? padWithZeros(month + 1) : month + 1;
        break;
      case FullMonth:
        compiled += months[month];
        break;
      case PartialYear:
        compiled += String(year).slice(2);
        break;
      case FullYear:
        compiled += year;
        break;
      case Hour24:
        compiled += hrs;
        break;
      case Hour:
        let hour = hrs === 0 || hrs === 12 ? 12 : hrs % 12;
        let paddedHour: string;
        if (options.padHours) {
          paddedHour = padWithZeros(hour);
          compiled += paddedHour;
        }
        compiled += hour;
        break;
      case Minutes:
        compiled += padWithZeros(min);
        break;
      case Seconds:
        compiled += padWithZeros(sec);
        break;
      case PostOrAnteMeridiem:
        compiled += hrs >= 12 ? "PM" : "AM";
        break;
    }
    index++;
  }
  return compiled;
}
