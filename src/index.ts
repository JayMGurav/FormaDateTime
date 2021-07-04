import compiler from "./compiler.js";
import templateParser from "./parser.js";
import { IOptions } from "./types.js";

class Format {
  private templateAst;
  options: IOptions = {
    padMonths: true,
    padHours: true,
    padDays: true,
  };
  constructor(template: string, options?: IOptions) {
    if (options) {
      this.options = options;
    }
    this.templateAst = templateParser(template);
  }

  render(date: Date) {
    return compiler(this.templateAst, date, this.options);
  }
}

export default Format;
