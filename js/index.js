const elCard = document.querySelector(".card")
const elList = document.querySelector(".card-list")
const elHeartIcon = document.querySelector(".heart")


for(let data of pokemons){

    //Create Elements
    const newListItem = document.createElement("li")
    const newCardMainDiv = document.createElement("div")
    const newImage = document.createElement("img")
    const newSpan = document.createElement("span")
    const newCardTitle = document.createElement("h1")
    const newParagraph = document.createElement("p")
    const newHeartIcon = document.createElement("img")
    const newCardTitleDiv = document.createElement("div")
    const newFooterParagraph = document.createElement("p")
    //Text Contect
    newCardTitle.textContent = 'Pokemons'
    newFooterParagraph.textContent = data.weight, '99 age'
    
    //Set Attributes
    elList.setAttribute('class', 'flex flex-wrap gap-[30px] mt-[100px] justify-center')
    newListItem.setAttribute('class', 'border-2 border-black rounded-[20px] bg-white relative')
    newImage.setAttribute('src', `${data.img}`)
    newSpan.setAttribute('class', 'w-full h-0.5 bg-black absolute')
    newImage.setAttribute('class', 'pt-[30px] px-[75px] pb-[68px]')
    newCardTitleDiv.setAttribute('class', 'mt-5 flex justify-between px-[30px]')
    newCardTitle.setAttribute('class', 'font-roboto font-bold text-2xl')
    newFooterParagraph.setAttribute('class', 'font-roboto font-bold text-xl px-[30px] mb-[37px] mt-[25px]')

    for(let paragraph of data.type){
        const newgrass = document.createElement("p")
        newgrass.textContent = paragraph
        newCardMainDiv.append(newgrass)
    }
    //Appends
    elList.append(newListItem)
    newListItem.append(newCardMainDiv)
    newCardMainDiv.append( newImage,newSpan, newCardTitleDiv, newParagraph, newFooterParagraph)
    newCardTitleDiv.append(newCardTitle,newHeartIcon)

}