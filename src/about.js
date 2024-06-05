export const About = function(){

    if(content.firstElementChild){
        do {
            content.removeChild(content.lastElementChild)
        }while(content.firstElementChild)
    }

}