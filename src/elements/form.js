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

        const {inputList, buttonList, title, classList} = props

        this.divButtons = null

        if(title){
            this.appendChild(title.getElement())
        }

        if(Array.isArray(inputList)){
            inputList?.forEach((input) =>{
                this.appendChild(input.getElement())
            })
        }

        if(buttonList){
            const newDiv = new Element('div')
            if(classList){
                if(Array.isArray(classList)){
                    this.addClassesToChildren(newDiv.getElement(), 'div-butttons')
                }
            }
            this.divButtons = newDiv
            this.appendChild(this.divButtons.getElement())
        }

        if(Array.isArray(buttonList)){
            buttonList?.forEach((button) =>{
                this.divButtons.appendChild(button.getElement())
            })
        }
    }
}

export default Form