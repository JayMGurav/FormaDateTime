import Identifiers from "./identifiersToTokens";
import { Tokens } from "./types.js";

export default function templateParser(template: string) {
  const tokens: Tokens = [];
  let position: number = 0;
  let templateText: string = "";

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
      let sub: string = "";
      while (char !== "}") {
        sub += char;
        char = template[position++];
      }
      tokens.push({
        t: Identifiers[sub],
      });
    } else {
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
