export declare type TMonth = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "November" | "December";
export declare type TDay = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
export interface IOptions {
    padMonths?: boolean;
    padDays?: boolean;
    padHours?: boolean;
}
export declare enum TokenType {
    UserText = "a",
    FullMonth = "b",
    PartialMonth = "c",
    NumberMonth = "n",
    FullYear = "d",
    PartialYear = "e",
    DayOfTheWeek = "f",
    Day = "k",
    DayOfTheMonth = "l",
    Hour = "g",
    Hour24 = "m",
    Minutes = "h",
    Seconds = "i",
    PostOrAnteMeridiem = "j"
}
export declare type Tokens = Array<{
    t: TokenType;
    v?: string;
}>;
