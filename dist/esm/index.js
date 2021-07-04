import compiler from "./compiler.js";
import templateParser from "./parser.js";
class Format {
    constructor(template, options) {
        this.options = {
            padMonths: true,
            padHours: true,
            padDays: true,
        };
        if (options) {
            this.options = options;
        }
        this.templateAst = templateParser(template);
    }
    render(date) {
        return compiler(this.templateAst, date, this.options);
    }
}
export default Format;
//# sourceMappingURL=index.js.map