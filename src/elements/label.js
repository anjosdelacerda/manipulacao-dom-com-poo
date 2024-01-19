import Element from "./element.js";

class Label extends Element {
    #labelFor
    constructor(labelFor, props){
        super('label', props)

        this.#labelFor = labelFor

        if(typeof this.#labelFor !== 'string'){
            // throw new Error('labelFor needs to be a string')
            console.log('labelFor needs to be a string')
        }

        this.getElement().for = this.#labelFor
    }

}

export default Label