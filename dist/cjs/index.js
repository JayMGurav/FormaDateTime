"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compiler_js_1 = __importDefault(require("./compiler.js"));
const parser_js_1 = __importDefault(require("./parser.js"));
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
        this.templateAst = parser_js_1.default(template);
    }
    render(date) {
        return compiler_js_1.default(this.templateAst, date, this.options);
    }
}
exports.default = Format;
//# sourceMappingURL=index.js.map