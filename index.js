const places = [
  {
    id: 1,
    place: "Lakes",
    images: [
      "./images/lake1.jpg",
      "./images/lake2.jpg",
      "./images/lake3.jpg",
      "./images/lake4.jpg",
      "./images/lake5.jpg",
      "./images/lake6.jpg",
    ],
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    id: 2,
    place: "Mountains",
    images: [
      "./images/mountain1.jpg",
      "./images/mountain2.jpg",
      "./images/mountain3.jpg",
      "./images/mountain4.jpg",
      "./images/mountain5.jpg",
      "./images/mountain6.jpg",
    ],
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    id: 3,
    place: "Beaches",
    images: [
      "./images/beach1.jpg",
      "./images/beach2.jpg",
      "./images/beach3.jpg",
      "./images/beach4.jpg",
      "./images/beach5.jpg",
      "./images/beach6.jpg",
    ],
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    id: 4,
    place: "Parks",
    images: [
      "./images/park1.jpg",
      "./images/park2.jpg",
      "./images/park3.jpg",
      "./images/park4.jpg",
      "./images/park5.jpg",
      "./images/park6.jpg",
    ],
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    id: 5,
    place: "Deserts",
    images: [
      "./images/desert1.jpg",
      "./images/desert2.jpg",
      "./images/desert3.jpg",
      "./images/desert4.jpg",
      "./images/desert5.jpg",
      "./images/desert6.jpg",
    ],
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
  {
    id: 6,
    place: "Waterfalls",
    images: [
      "./images/waterfall1.jpg",
      "./images/waterfall2.jpg",
      "./images/waterfall3.jpg",
      "./images/waterfall4.jpg",
      "./images/waterfall5.jpg",
      "./images/waterfall6.jpg",
    ],
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
];

const placeDisplay = document.getElementById("place-display");
const infoDisplay = document.getElementById("info-display");

const additionalImagesContainer = document.getElementById("additional-images");

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const moreBtn = document.getElementById("more-btn");
const addImg = document.querySelector(".add-img");

const sidebarToggle = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebarOpt = document.querySelector(".sidebar-opt");

const backgroundColors = [
  "#00B4DB",
  "#a2ab58",
  "#FDC830",
  "#45B649",
  "#F37335",
  "#c4e0e5",
  "white", // Default color
];

let currentItem = 0;
let currentImageIndex = 0;

function getBackgroundColor(currentItem) {
  document.body.style.backgroundColor = backgroundColors[currentItem];
}

function showTrip(currentItem) {
  const item = places[currentItem];
  addImg.style.visibility = "hidden";
  showImageForCurrentPlace();
  placeDisplay.textContent = item.place;
  infoDisplay.textContent = item.info;
  getBackgroundColor(currentItem);
}

function getExtraImages() {
  additionalImagesContainer.innerHTML = ""; // Clear any existing images

  // Exclude the current image index from the thumbnails
  const otherImages = places[currentItem].images.filter(
    (_, index) => index !== currentImageIndex
  );

  otherImages.forEach((image, index) => {
    const imgElement = document.createElement("img");
    imgElement.className = "img-small";
    imgElement.id = `img-add${index + 1}`;
    imgElement.src = image;
    imgElement.alt = `Image ${index + 1}`;
    imgElement.width = 280;
    imgElement.height = 180;

    // Set up the click event listener for each image
    imgElement.addEventListener("click", function () {
      swapImage(image, index);
    });

    // Append the image to the container
    additionalImagesContainer.appendChild(imgElement);
  });
}

function swapImage(newSrc, index) {
  // This function would swap the large image with the clicked thumbnail
  // and possibly other related tasks
  const imgDisplay = document.getElementById("img-display"); // Your large image element ID
  const oldSrc = imgDisplay.src;

  // Swap the images
  imgDisplay.src = newSrc;

  // If you need to swap the small image with the one in the display
  document.getElementById(`img-add${index}`).src = oldSrc;
}

const listContainer = document.querySelector(".list-container");

// Clear any existing content
listContainer.innerHTML = "";

// Loop through the places array and create an li element for each place
places.forEach((place, index) => {
  const listItem = document.createElement("li");
  listItem.id = `place-${index + 1}`; // This will create id's like place-1, place-2, etc.
  listItem.className = "list-places";
  listItem.textContent = place.place; // Set the text content to the place name
  /*
  listItem.addEventListener("click", function () {
    showTrip(index); // Pass the current index to the showTrip function
    additionalImagesContainer.innerHTML = "";
  });
  */
  listContainer.appendChild(listItem); // Append the listItem to the listContainer
});

function showImageForCurrentPlace() {
  const imgDisplay = document.getElementById("img-display"); // Assuming this is the ID for the main image display

  // Set the src for the main image display to the current image
  imgDisplay.src = places[currentItem].images[currentImageIndex];
}

//Event Listeners for buttons
nextBtn.addEventListener("click", function () {
  // Increment the current image index
  currentImageIndex++;

  // Check if the current image index exceeds the number of images for the current place
  if (currentImageIndex >= places[currentItem].images.length) {
    currentImageIndex = 0; // Reset back to the first image if it's the last
  }

  // Show the next image
  showImageForCurrentPlace();
  getExtraImages();
});

prevBtn.addEventListener("click", function () {
  // Increment the current image index
  currentImageIndex--;

  // Check if the current image index exceeds the number of images for the current place
  if (currentImageIndex <= 0) {
    currentImageIndex = places[currentItem].images.length - 1; // Reset back to the first image if it's the last
  }

  // Show the next image
  showImageForCurrentPlace();
  getExtraImages();
});

moreBtn.addEventListener("click", function () {
  addImg.style.visibility = "visible";
  getExtraImages();
});

listContainer.addEventListener("click", function (event) {
  // Use event.target to get the element that was actually clicked
  const clickedElement = event.target;

  // Check if the clickedElement or its parents have the class 'list-places'
  if (clickedElement.classList.contains("list-places")) {
    // Extract the index from the clicked element's id
    const index = parseInt(clickedElement.id.split("-")[1], 10) - 1;
    // Call the showTrip function with the extracted index
    showTrip(index);
    // Clear the additional images
    additionalImagesContainer.innerHTML = "";
  }
});

// Initial setup on DOMContentLoaded
window.addEventListener("DOMContentLoaded", function () {
  showTrip(currentItem);
});
