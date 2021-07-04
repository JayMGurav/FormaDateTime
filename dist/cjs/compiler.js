"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const utils_1 = require("./utils");
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
function compiler(tokens, date, options) {
    const year = date.getFullYear(), month = date.getMonth(), day = date.getDate(), hrs = date.getHours(), min = date.getMinutes(), sec = date.getSeconds();
    let compiled = "";
    let index = 0;
    while (index < tokens.length) {
        const token = tokens[index];
        switch (token.t) {
            case types_1.TokenType.UserText:
                compiled += token.v;
                break;
            case types_1.TokenType.Day:
                compiled += utils_1.suffix(day);
                break;
            case types_1.TokenType.DayOfTheWeek:
                compiled += days[date.getDay()];
                break;
            case types_1.TokenType.DayOfTheMonth:
                compiled += options.padDays ? utils_1.padWithZeros(day) : day;
                break;
            case types_1.TokenType.PartialMonth:
                compiled += months[month].slice(0, 3);
                break;
            case types_1.TokenType.NumberMonth:
                compiled += options.padMonths ? utils_1.padWithZeros(month + 1) : month + 1;
                break;
            case types_1.TokenType.FullMonth:
                compiled += months[month];
                break;
            case types_1.TokenType.PartialYear:
                compiled += String(year).slice(2);
                break;
            case types_1.TokenType.FullYear:
                compiled += year;
                break;
            case types_1.TokenType.Hour24:
                compiled += hrs;
                break;
            case types_1.TokenType.Hour:
                let hour = hrs === 0 || hrs === 12 ? 12 : hrs % 12;
                let paddedHour;
                if (options.padHours) {
                    paddedHour = utils_1.padWithZeros(hour);
                    compiled += paddedHour;
                }
                else {
                    compiled += hour;
                }
                break;
            case types_1.TokenType.Minutes:
                compiled += utils_1.padWithZeros(min);
                break;
            case types_1.TokenType.Seconds:
                compiled += utils_1.padWithZeros(sec);
                break;
            case types_1.TokenType.PostOrAnteMeridiem:
                compiled += hrs >= 12 ? "PM" : "AM";
                break;
        }
        index++;
    }
    return compiled;
}
exports.default = compiler;
//# sourceMappingURL=compiler.js.map