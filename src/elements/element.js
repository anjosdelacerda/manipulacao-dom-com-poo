class Element {
    #element
    constructor(tagName, props = {}){
        const {classList, tagId, innerHtml} = props
        this.#element = document.createElement(tagName)
        this.classList = classList

        if (Array.isArray(this.classList)) {
            this.classList?.forEach(styleClass => {
                this.#element.classList.add(styleClass);
            });
        }

        if(tagId){
            if(typeof tagId === 'string'){
                this.#element.id = tagId
            }else{
                console.log('tagId needs to be a string')
            }   
        }

        if(innerHtml){
            this.#element.innerHTML = innerHtml
        }
    }

    getElement(){
        return this.#element;
    }

    appendChild(childElement){

        this.#element.appendChild(childElement)

    }

    appendText(text){
        if(typeof text !== 'string'){
            console.log('text needs to be a string')
        }else{
            const newText = document.createTextNode(text)
            this.#element.appendChild(newText)
        }
    }

    addClassesToChildren(children, tagChildren){
        children.classList.add(`${this.classList[0]}__${tagChildren}`)
    }
}

export default Element