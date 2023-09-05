import Block from "./Block";
import Parameters from "./Parameters";
import * as path from "path";

export default // @ts-ignore
class FormBlock extends Block {

    // @ts-ignore
    private tag: string | undefined;
    // @ts-ignore
    private id: string | undefined;
    // @ts-ignore
    private content: string | undefined;
    private parameters: Parameters;

    constructor(tag: string, id: string, content: string, parameters: Parameters) {
        super(tag, id, content);
        this.parameters = parameters;
    }


    toHTML(): string {
        return `<${this.tag}
            ${this.parametersToString(this.parameters)}
            ${this.id ? `id="${this.id}"` : ""}> 
            ${this.content}
        </${this.tag}>`;
    }

    parametersToString(parameters: Parameters) {
        let result = "";
        for (let key in parameters) {
            result += key + '="' + parameters[key] + '" ';
        }
        // console.log(result);
        return result;
    }

}