const places = [
    {
        id: 1,
        place: "Lakes",
        img: "./images/lake1.jpg",
        imgone: "./images/lake2.jpg",
        imgtwo: "./images/lake3.jpg",
        imgthree: "./images/lake4.jpg",
        imgfour: "./images/lake5.jpg",
        imgfive: "./images/lake6.jpg",
       info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore cumque sit iste minus laudantium dolor magnam amet modi suscipit fugiat nemo doloribus recusandae, eveniet reiciendis reprehenderit autem repudiandae laboriosam error aliquam id accusantium possimus illo fugit? Repellat, deleniti dolor!"
    },
    {
        id: 2,
        place: "Mountains",
        img: "./images/mountain1.jpg",
        imgone: "./images/mountain2.jpg",
        imgtwo: "./images/mountain3.jpg",
        imgthree: "./images/mountain4.jpg",
        imgfour: "./images/mountain5.jpg",
        imgfive: "./images/mountain6.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore cumque sit iste minus laudantium dolor magnam amet modi suscipit fugiat nemo doloribus recusandae, eveniet reiciendis reprehenderit autem repudiandae laboriosam error aliquam id accusantium possimus illo fugit? Repellat, deleniti dolor!"
    },
    {
        id: 3,
        place: "Beachs",
        img: "./images/beach1.jpg",
        imgone: "./images/beach2.jpg",
        imgtwo: "./images/beach3.jpg",
        imgthree: "./images/beach4.jpg",
        imgfour: "./images/beach5.jpg",
        imgfive: "./images/beach6.jpg",
       info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore cumque sit iste minus laudantium dolor magnam amet modi suscipit fugiat nemo doloribus recusandae, eveniet reiciendis reprehenderit autem repudiandae laboriosam error aliquam id accusantium possimus illo fugit? Repellat, deleniti dolor!"
    },
    {
        id: 4,
        place: "Parks",
        img: "./images/park1.jpg",
        imgone: "./images/park2.jpg",
        imgtwo: "./images/park3.jpg",
        imgthree: "./images/park4.jpg",
        imgfour: "./images/park5.jpg",
        imgfive: "./images/park6.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore cumque sit iste minus laudantium dolor magnam amet modi suscipit fugiat nemo doloribus recusandae, eveniet reiciendis reprehenderit autem repudiandae laboriosam error aliquam id accusantium possimus illo fugit? Repellat, deleniti dolor!"
    },
    {
        id: 5,
        place: "Deserts",
        img: "./images/desert1.jpg",
        imgone: "./images/desert2.jpg",
        imgtwo: "./images/desert3.jpg",
        imgthree: "./images/desert4.jpg",
        imgfour: "./images/desert5.jpg",
        imgfive: "./images/desert6.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore cumque sit iste minus laudantium dolor magnam amet modi suscipit fugiat nemo doloribus recusandae, eveniet reiciendis reprehenderit autem repudiandae laboriosam error aliquam id accusantium possimus illo fugit? Repellat, deleniti dolor!"
    },
    {
        id: 6,
        place: "Waterfalls",
        img: "./images/waterfall1.jpg",
        imgone: "./images/waterfall2.jpg",
        imgtwo: "./images/waterfall3.jpg",
        imgthree: "./images/waterfall4.jpg",
        imgfour: "./images/waterfall5.jpg",
        imgfive: "./images/waterfall6.jpg",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dolore cumque sit iste minus laudantium dolor magnam amet modi suscipit fugiat nemo doloribus recusandae, eveniet reiciendis reprehenderit autem repudiandae laboriosam error aliquam id accusantium possimus illo fugit? Repellat, deleniti dolor!"
    },

]

const imgDisplay = document.getElementById("img-display")
const placeDisplay = document.getElementById("place-display")
const infoDisplay = document.getElementById("info-display")

const imgAddOne = document.getElementById("img-addone")
const imgAddTwo = document.getElementById("img-addtwo")
const imgAddThree = document.getElementById("img-addthree")
const imgAddFour = document.getElementById("img-addfour")
const imgAddFive = document.getElementById("img-addfive")

const nextBtn = document.getElementById("next-btn")
const prevBtn = document.getElementById("prev-btn")
const moreBtn = document.getElementById("more-btn")
const addImg = document.querySelector(".add-img")

function getBackgroundColor(currentItem) {
    if(currentItem === 0) {
        document.body.style.backgroundColor = "#00B4DB"
    }
     else if(currentItem === 1) {
        document.body.style.backgroundColor = "#a2ab58"
    }
     else if(currentItem === 2) {
        document.body.style.backgroundColor = "#FDC830"
    }
     else if(currentItem === 3) {
        document.body.style.backgroundColor = "#45B649"
    }
     else if(currentItem === 4) {
        document.body.style.backgroundColor = "#F37335"
    }
    else if(currentItem === 5) {
        document.body.style.backgroundColor = "#c4e0e5"
    }
    else {
        document.body.style.backgroundColor = "white"
    }
    
}

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function() {
    const item = places[currentItem]
    imgDisplay.src = item.img
    placeDisplay.textContent = item.place
    infoDisplay.textContent = item.info
    getBackgroundColor(currentItem)
})

function showTrip(currentItem) {
  const item = places[currentItem]
    addImg.style.visibility = "hidden"
    imgDisplay.src = item.img
    placeDisplay.textContent = item.place
    infoDisplay.textContent = item.info  
    getBackgroundColor(currentItem)
}

nextBtn.addEventListener("click", function() {
    currentItem ++
    addImg.style.visibility = "hidden"
    if (currentItem>places.length-1) {
        currentItem=0
    }
    showTrip(currentItem)
})

prevBtn.addEventListener("click", function() {
    currentItem--
    addImg.style.visibility = "hidden"
    if (currentItem<0) {
        currentItem=places.length-1
    }
    showTrip(currentItem)
})

function getExtraImages() {
imgDisplay.src = places[currentItem].img
imgAddOne.src = places[currentItem].imgone
imgAddTwo.src = places[currentItem].imgtwo
imgAddThree.src = places[currentItem].imgthree
imgAddFour.src = places[currentItem].imgfour
imgAddFive.src = places[currentItem].imgfive   
}

moreBtn.addEventListener("click", function() {
addImg.style.visibility = "visible"
getExtraImages()

})


const placeOne = document.getElementById("place-one")
const placeTwo = document.getElementById("place-two")
const placeThree = document.getElementById("place-three")
const placeFour = document.getElementById("place-four")
const placeFive = document.getElementById("place-five")

placeOne.textContent = places[0].place
placeTwo.textContent = places[1].place
placeThree.textContent = places[2].place
placeFour.textContent = places[3].place
placeFive.textContent = places[4].place

const sidebarToggle = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")
const sidebarOpt = document.querySelector(".sidebar-opt")

placeOne.addEventListener("click", function() {
    currentItem = 0
    showTrip(currentItem)
})
placeTwo.addEventListener("click", function() {
    currentItem = 1
    showTrip(currentItem)
})
placeThree.addEventListener("click", function() {
    currentItem = 2
    showTrip(currentItem)
})
placeFour.addEventListener("click", function() {
    currentItem = 3
    showTrip(currentItem)
})
placeFive.addEventListener("click", function() {
    currentItem = 4
    showTrip(currentItem)
})

imgAddOne.addEventListener("click", function() {
    getExtraImages()
    const item = places[currentItem]
    imgDisplay.src = item.imgone
    imgAddOne.src = item.img

})

imgAddTwo.addEventListener("click", function() {
    getExtraImages()
    const item = places[currentItem]
    imgDisplay.src = item.imgtwo
    imgAddTwo.src = item.img
})
imgAddThree.addEventListener("click", function() {
    getExtraImages()
    const item = places[currentItem]
    imgDisplay.src = item.imgthree
    imgAddThree.src = item.img
})
imgAddFour.addEventListener("click", function() {
    getExtraImages()
    const item = places[currentItem]
    imgDisplay.src = item.imgfour
    imgAddFour.src = item.img
})
imgAddFive.addEventListener("click", function() {
    getExtraImages()
    const item = places[currentItem]
    imgDisplay.src = item.imgfive
    imgAddFive.src = item.img
})


