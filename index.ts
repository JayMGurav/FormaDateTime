import compiler from "./src/compiler.js";
import templateParser from "./src/parser.js";

// 'MMMM': january,
// 'MM': Jan,
// 'Mo': 01,
// 'YYYY': 2021,
// 'YY': 21,
// 'dddd': Monday,
// 'DD': 15,
// 'Do': 15th,
// 'h': 06,
// 'H': 18,
// 'mm': 05,
// 'ss': 45,
// 'pa': PM
import { IOptions } from "./src/types.js";
export default function FormatDateTime(
  template: string,
  options: IOptions = {}
) {
  const templateAST = templateParser(template);
  return {
    render(date: Date) {
      return compiler(templateAST, date, options);
    },
  };
}

// 'Today is {Do} {MM} {YYYY}'
const template = "Now it is {h}:{mm}:{ss} {pa}";
const optns = {
  padMonth: true,
  padDays: true,
  padHours: true,
};
const temp = FormatDateTime(template, optns);

console.log(temp.render(new Date()));
