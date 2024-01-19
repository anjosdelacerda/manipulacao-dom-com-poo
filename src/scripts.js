import App from "./elements/app.js"
import GroupInputLabel from "./elements/groupInputLabel.js"

console.log("SCRIPT INICIALIZADO")
const root = document.getElementById('root')
const app = new App({classList: ['todo-app'], tagId: 'conteiner-app'})
const inputNome = new GroupInputLabel({type: 'text', name: 'nome', placeholder: 'nome'})

app.appendChild(inputNome.getElement())
root.appendChild(app.getElement())
