import SubsToIdentiferType, {UserText} from './subs.js';

export default function templateParser(template) {
  const tokens = [];
  let position = 0;
  let text = '';

  while(position < template.length){
    let char = template[position++];

    if(char === '{'){
      // push the previous collected text to tokens as UserText;
     if(text){ //push only if there is any text in the template
      tokens.push({
        t: UserText,
        v: text
      });
     }
      // empty collected text
      text = '';
      char = template[position++];
      let sub = '';
      while (char !== '}') {
        sub += char;
        char = template[position++];
      }
      // push the collected sub to token
      tokens.push({
        t: SubsToIdentiferType[sub]
      });

    } else {
      text += char;
    }
  }
  // if the  template ends with a text then all the colected text will be in the text variable which is to be pushed to tokens
  if(text){
    tokens.push({
      t: UserText,
      v:text
    })
  }
  return tokens;
}