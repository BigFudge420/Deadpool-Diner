import './style.css'
import { Home } from './home.js'
import { About } from './about.js'
import { Menu } from './menu.js'


export const content = document.getElementById('content')
const header = document.querySelector('header')
const homeBtn = document.getElementById('home')
const aboutBtn = document.getElementById('about')
const menuBtn = document.getElementById('menu')

homeBtn.addEventListener('click', Home)
aboutBtn.addEventListener('click', About)
menuBtn.addEventListener('click', Menu)
Home()