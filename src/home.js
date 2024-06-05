import { content } from "."
import wallImg from './images/wall-img.png'

export const Home = function(){
    
    if(content.firstElementChild){
        do {
            content.removeChild(content.lastElementChild)
        }while(content.firstElementChild)
    }

    content.classList.add('home-page')

    const intro = document.createElement('div')
    intro.setAttribute('id','intro')

    const introTitle = document.createElement('h1')
    introTitle.setAttribute('id','intro-title')
    introTitle.textContent = `Welcome to Deadpool's Dining!`
    
    const introText = document.createElement('p')
    introText.setAttribute('id','intro-text')
    introText.textContent = `Where the tacos are so good, the next morning your gluteus maximus will be more 
    explosive than a Michael Bay movie. How, you ask? We've kidnapped Taco Bell employees; poor Bob hasn't seen 
    his family in a week. So what are you waiting for? Buckle up, buttercup, and bone an apple tree. That's 
    Deadpool for 'Bon appétit.' You're welcome, universe.`

    const dpWallImg = new Image
    dpWallImg.src = wallImg
    dpWallImg.setAttribute('id', 'wall-img')

    const main = document.createElement('div')
    main.setAttribute('id', 'main')

    content.appendChild(main)
    main.appendChild(intro)
    main.appendChild(dpWallImg)
    intro.appendChild(introTitle)
    intro.appendChild(introText)
    


}   