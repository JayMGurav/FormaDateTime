import { TokenType } from "./types";
import { padWithZeros, suffix } from "./utils";
const months = [
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
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
export default function compiler(tokens, date, options) {
    const year = date.getFullYear(), month = date.getMonth(), day = date.getDate(), hrs = date.getHours(), min = date.getMinutes(), sec = date.getSeconds();
    let compiled = "";
    let index = 0;
    while (index < tokens.length) {
        const token = tokens[index];
        switch (token.t) {
            case TokenType.UserText:
                compiled += token.v;
                break;
            case TokenType.Day:
                compiled += suffix(day);
                break;
            case TokenType.DayOfTheWeek:
                compiled += days[date.getDay()];
                break;
            case TokenType.DayOfTheMonth:
                compiled += options.padDays ? padWithZeros(day) : day;
                break;
            case TokenType.PartialMonth:
                compiled += months[month].slice(0, 3);
                break;
            case TokenType.NumberMonth:
                compiled += options.padMonths ? padWithZeros(month + 1) : month + 1;
                break;
            case TokenType.FullMonth:
                compiled += months[month];
                break;
            case TokenType.PartialYear:
                compiled += String(year).slice(2);
                break;
            case TokenType.FullYear:
                compiled += year;
                break;
            case TokenType.Hour24:
                compiled += hrs;
                break;
            case TokenType.Hour:
                let hour = hrs === 0 || hrs === 12 ? 12 : hrs % 12;
                let paddedHour;
                if (options.padHours) {
                    paddedHour = padWithZeros(hour);
                    compiled += paddedHour;
                }
                else {
                    compiled += hour;
                }
                break;
            case TokenType.Minutes:
                compiled += padWithZeros(min);
                break;
            case TokenType.Seconds:
                compiled += padWithZeros(sec);
                break;
            case TokenType.PostOrAnteMeridiem:
                compiled += hrs >= 12 ? "PM" : "AM";
                break;
        }
        index++;
    }
    return compiled;
}
//# sourceMappingURL=compiler.js.map