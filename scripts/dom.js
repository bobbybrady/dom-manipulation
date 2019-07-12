/*
    This code will only return the first section component
    even though there are three components with the same
    class
*/
const sectionEls = document.querySelectorAll(".article__section")

/*
    This code will only return the third section component
*/
const footerEl = document.querySelector(".article__footer")

/*
    Get reference to the section with the class of `smallText`
    and remove that class. Then add a new class of `largeText`
*/
const smallTextEl = document.querySelector(".smallText")
smallTextEl.classList.remove("smallText")
smallTextEl.classList.add("largeText")

const blue = document.querySelector('.article__body')
blue.classList.add('blue')

const border = document.querySelector('.article__header')
border.classList.add('border')

// for (let i = 0; i < sectionEls.length; i++) {
//     const element = sectionEls[i];
//     element.classList.add('background')
    
// }

sectionEls.forEach((currentNode) => {
    currentNode.classList.add('background')
})