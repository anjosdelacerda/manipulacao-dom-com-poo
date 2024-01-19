import Element from "./element.js";

class Input extends Element {
    #type 
    #name 
    #placeholder
    constructor(type ,name, placeholder,props){
        super('input', props)

        this.#type = type
        this.#name = name
        this.#placeholder = placeholder

        const arrTypesAttributes = [this.#type, this.#name, this.#placeholder]
        const correctAttributes = arrTypesAttributes.every((element) => typeof element === 'string')

        if(!correctAttributes){
            // throw new Error('type, name and placeholder must be a string')
            console.log('type, name and placeholder must be a string')
        }

        this.getElement().type = this.#type 
        this.getElement().name = this.#name
        this.getElement().placeholder = this.#placeholder

    }

}

export default Input