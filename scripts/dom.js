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

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

// console.log(wardrobe.height)
// console.log(wardrobe.manufacturer)
// console.log(wardrobe.contents)
// console.log(wardrobe.depth)
// console.log(wardrobe.width)

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
// console.log(empireStateBuilding.stories)
// console.log(empireStateBuilding.height)
// console.log(empireStateBuilding.squareFeet)
// console.log(empireStateBuilding.eastWestLength)
// console.log(empireStateBuilding.northSouthLength)

const address = empireStateBuilding["address"]
const squareFeet = empireStateBuilding["squareFeet"]
const cost = empireStateBuilding["cost"]
const owner = empireStateBuilding["owner"]
const architect = empireStateBuilding["architect"]

// console.log(address)
// console.log(squareFeet)
// console.log(cost)
// console.log(owner)
// console.log(architect)
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

const partTime = nashvilleSoftwareSchool.instructors.partTime
partTime.forEach((currentNode) => {
    console.log(currentNode)
})
const fullTime = nashvilleSoftwareSchool.instructors.fullTime
fullTime.forEach((currentNode) => {
    console.log(currentNode)
})
 console.log(nashvilleSoftwareSchool.instructors.fullTime[4])
 console.log(nashvilleSoftwareSchool.instructors.partTime[0])