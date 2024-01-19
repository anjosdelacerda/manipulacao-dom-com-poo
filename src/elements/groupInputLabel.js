import Input from "./input.js"
import Label from "./label.js"
import Element from "./element.js"

class GroupInputLabel extends Element {
    #type
    #name
    #placeholder
    constructor(props){
        super('div', props)

        const{type, name, placeholder} = props

        this.#type = type
        this.#name = name 
        this.#placeholder = placeholder

        this.createInput()
        this.createLabel()

    }

    createInput(){
        const input = new Input(this.#type, this.#name, this.#placeholder)
        this.appendChild(input)
    }

    createLabel(){
        const label = new Label(this.#name)
        this.appendChild(label)
    }

}

export default GroupInputLabel