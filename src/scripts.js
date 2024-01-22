import App from "./elements/app.js"
import GroupInputLabel from "./elements/groupInputLabel.js"
import Form from "./elements/form.js"
import Title from "./elements/title.js"
import Button from "./elements/button.js"

console.log("SCRIPT INICIALIZADO")

const root = document.getElementById('root')

const app = new App({classList: ['todo-app'], tagId: 'conteiner-app'})

const formTitle = new Title(3, 'Cadastro', {classList: ['todo-form__title']})

const inputNome = new GroupInputLabel({type: 'text', name: 'nome', placeholder: 'nome', classList: ['todo-form__group-input']})
const inputEmail = new GroupInputLabel({type: 'email', name: 'email', placeholder: 'email', classList: ['todo-form__group-input']})
const inputSenha = new GroupInputLabel({type: 'password', name: 'senha', placeholder: 'senha', classList: ['todo-form__group-input']})

const signUpButton = new Button({text: 'Cadastre-se', classList: ['todo-form__div-buttons__button']})

const form = new Form({classList: ['todo-form'], title: formTitle ,inputList: [inputNome, inputEmail, inputSenha], buttonList: [signUpButton]})



// form.appendChild(formTitle.getElement())
app.appendChild(form.getElement())
root.appendChild(app.getElement())
