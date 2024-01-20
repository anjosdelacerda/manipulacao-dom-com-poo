import App from "./elements/app.js"
import GroupInputLabel from "./elements/groupInputLabel.js"
import Form from "./elements/form.js"
import Title from "./elements/title.js"

console.log("SCRIPT INICIALIZADO")

const root = document.getElementById('root')

const app = new App({classList: ['todo-app'], tagId: 'conteiner-app'})

const formTitle = new Title(3, 'Cadastro')

const inputNome = new GroupInputLabel({type: 'text', name: 'nome', placeholder: 'nome', classList: ['todo-form__group-input']})
const inputEmail = new GroupInputLabel({type: 'email', name: 'email', placeholder: 'email', classList: ['todo-form__group-input']})
const inputSenha = new GroupInputLabel({type: 'password', name: 'senha', placeholder: 'senha', classList: ['todo-form__group-input']})

const form = new Form({classList: ['todo-form'], title: formTitle ,inputList: [inputNome, inputEmail, inputSenha]})



// form.appendChild(formTitle.getElement())
app.appendChild(form.getElement())
root.appendChild(app.getElement())
