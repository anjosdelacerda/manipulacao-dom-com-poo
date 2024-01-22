import Element from "./element.js";

class Button extends Element{
    constructor(props){
        super('button', props)

        const {text} = props
        
        this.text = text
        this.appendText(this.text)
    }
}

export default Button