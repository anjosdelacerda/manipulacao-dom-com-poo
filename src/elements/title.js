import Element from "./element.js";

class Title extends Element {

    #size 
    #text
    constructor(size, text, props){
        super(`h${size}`)

        this.#size = size.toString()
        this.#text = text

        if(parseInt(this.#size) > 6){
            this.#size = '6'
        }

        if(parseInt(this.#size) < 1){
            this.#size = 1
        }

        if(!this.isInteger(parseInt(this.#size))){
            this.#size = Math.round(parseInt(this.#size))
        }

        this.appendText(this.#text)

    }

    isInteger(number){
        return number % 1 === 0
    }
}

export default Title