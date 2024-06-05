import { content } from "."

export const Menu = function(){

    if(content.firstElementChild){
        do {
            content.removeChild(content.lastElementChild)
        }while(content.firstElementChild)
    }


    const menuTitle = document.createElement('h2')
    menuTitle.textContent = 'This is the menu'
    const item1 = document.createElement('p')
    item1.textContent = 'Item 1'
    const item2 = document.createElement('p')
    item2.textContent = 'Item 2'

    content.appendChild(menuTitle)
    content.appendChild(item1)
    content.appendChild(item2)
}