"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const IdentifiersToTokenType = {
    UserText: types_1.TokenType.UserText,
    MMMM: types_1.TokenType.FullMonth,
    MM: types_1.TokenType.PartialMonth,
    Mo: types_1.TokenType.NumberMonth,
    YYYY: types_1.TokenType.FullYear,
    YY: types_1.TokenType.PartialYear,
    dddd: types_1.TokenType.DayOfTheWeek,
    DD: types_1.TokenType.DayOfTheMonth,
    Do: types_1.TokenType.Day,
    h: types_1.TokenType.Hour,
    H: types_1.TokenType.Hour24,
    mm: types_1.TokenType.Minutes,
    ss: types_1.TokenType.Seconds,
    pa: types_1.TokenType.PostOrAnteMeridiem,
};
exports.default = IdentifiersToTokenType;
//# sourceMappingURL=identifiresToTokens.js.map