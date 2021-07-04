"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const identifiersToTokens_1 = __importDefault(require("./identifiersToTokens"));
function templateParser(template) {
    const tokens = [];
    let position = 0;
    let templateText = "";
    while (position < template.length) {
        let char = template[position++];
        if (char === "{") {
            if (templateText) {
                tokens.push({
                    t: identifiersToTokens_1.default.UserText,
                    v: templateText,
                });
            }
            templateText = "";
            char = template[position++];
            let sub = "";
            while (char !== "}") {
                sub += char;
                char = template[position++];
            }
            tokens.push({
                t: identifiersToTokens_1.default[sub],
            });
        }
        else {
            templateText += char;
        }
    }
    if (templateText) {
        tokens.push({
            t: identifiersToTokens_1.default.UserText,
            v: templateText,
        });
    }
    return tokens;
}
exports.default = templateParser;
//# sourceMappingURL=parser.js.map