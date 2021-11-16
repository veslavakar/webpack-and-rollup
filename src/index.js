import "./index.css"
import js_img from '../assets/jsImg.png'
// import backgroundPicture from '../assets/puppies.jpeg'

console.log('hello world')
// document.body.style.backgroundImage = `url(${backgroundPicture})`

const jsImageHTML = document.createElement('img')
jsImageHTML.className = 'js-image'
jsImageHTML.src = js_img
document.body.append(jsImageHTML)
