export type TMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "November"
  | "December";

export type TDay =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

export interface IOptions {
  padMonths?: boolean;
  padDays?: boolean;
  padHours?: boolean;
}

export enum TokenType {
  UserText = "a",
  MMMM = "b",
  MM = "c",
  Mo = "n",
  YYYY = "d",
  YY = "e",
  dddd = "f",
  Do = "k",
  DD = "l",
  h = "g",
  H = "m",
  mm = "h",
  ss = "i",
  pa = "j",
}

export type Tokens = Array<{ t: TokenType; v?: string }>;
