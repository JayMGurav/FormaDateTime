// import SubsToIdentiferType, { UserText } from "./subs.js";
import { Tokens, TokenType } from "./types.js";

export default function templateParser(template: string) {
  const tokens: Tokens = [];
  let position: number = 0;
  let templateText: string = "";

  // parse through the template
  while (position < template.length) {
    let char = template[position++];

    if (char === "{") {
      // push the previous collected text to tokens as UserText;
      if (templateText) {
        //push only if there is any text in the template
        tokens.push({
          t: TokenType.UserText,
          v: templateText,
        });
      }
      // empty the collected text
      templateText = "";
      // skip '{'
      char = template[position++];
      let sub = "";
      while (char !== "}") {
        sub += char;
        char = template[position++];
      }
      // push the collected sub to token
      tokens.push({
        t: TokenType[sub],
      });
    } else {
      templateText += char;
    }
  }
  // if the  template ends with a text then all the collected text will be in the text variable which is to be pushed to tokens
  if (templateText) {
    tokens.push({
      t: TokenType.UserText,
      v: templateText,
    });
  }
  return tokens;
}
