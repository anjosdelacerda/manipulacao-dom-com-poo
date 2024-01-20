/**
 * criar um document.createElement('form')
 * criar uma classe para inputs que já conteham labels
 * criar uma classe de botões
 * prever em props a propriedade 'type' para os inputs
 */
import Element from "./element.js";

class Form extends Element{

    constructor (props){
        super('form', props)

        const {inputList, buttonList, title} = props

        if(title){
            this.appendChild(title.getElement())
        }

        if(Array.isArray(inputList)){
            inputList?.forEach((input) =>{
                this.appendChild(input.getElement())
            })
        }

        if(Array.isArray(buttonList)){
            buttonList?.forEach((button) =>{
                this.appendChild(button.getElement())
            })
        }

    }

}

export default Form