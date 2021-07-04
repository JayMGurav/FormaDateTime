import { IOptions } from "./types.js";
declare class Format {
    private templateAst;
    options: IOptions;
    constructor(template: string, options?: IOptions);
    render(date: Date): string;
}
export default Format;
