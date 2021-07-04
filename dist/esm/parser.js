import Identifiers from "./identifiersToTokens";
export default function templateParser(template) {
    const tokens = [];
    let position = 0;
    let templateText = "";
    while (position < template.length) {
        let char = template[position++];
        if (char === "{") {
            if (templateText) {
                tokens.push({
                    t: Identifiers.UserText,
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
                t: Identifiers[sub],
            });
        }
        else {
            templateText += char;
        }
    }
    if (templateText) {
        tokens.push({
            t: Identifiers.UserText,
            v: templateText,
        });
    }
    return tokens;
}
//# sourceMappingURL=parser.js.map