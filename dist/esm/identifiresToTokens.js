import { TokenType } from "./types";
const IdentifiersToTokenType = {
    UserText: TokenType.UserText,
    MMMM: TokenType.FullMonth,
    MM: TokenType.PartialMonth,
    Mo: TokenType.NumberMonth,
    YYYY: TokenType.FullYear,
    YY: TokenType.PartialYear,
    dddd: TokenType.DayOfTheWeek,
    DD: TokenType.DayOfTheMonth,
    Do: TokenType.Day,
    h: TokenType.Hour,
    H: TokenType.Hour24,
    mm: TokenType.Minutes,
    ss: TokenType.Seconds,
    pa: TokenType.PostOrAnteMeridiem,
};
export default IdentifiersToTokenType;
//# sourceMappingURL=identifiresToTokens.js.map