class Element {
    #element
    constructor(tagName, props = {}){
        const {classList, tagId, innerHtml} = props
        this.#element = document.createElement(tagName)

        if (Array.isArray(classList)) {
            classList.forEach(styleClass => {
                this.#element.classList.add(styleClass);
            });
        }

        if(tagId){
            if(typeof tagId === 'string'){
                this.#element.id = tagId
            }
            // throw new Error('tagId needs to be a string')
            console.log('tagId needs to be a string')
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
}

export default Element