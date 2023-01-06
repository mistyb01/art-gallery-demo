const imgDb = [
    {title: "Seagulls",
    desc: "seagulls on a rock",
    src: "images/desert.jpg"},
    {title: "Sunset Cliff",
    desc: "forest cliff bathed in sunset",
    src: "images/green-crystal.jpg"},
    {title: "Sunset trees",
    desc: "misty orange trees",
    src: "images/minish-village.jpg"},
    {title: "Lightning",
    desc: "lightning beams",
    src: "images/sky-palace.jpg"},
    {title: "Vash",
    desc: "vash the stampede",
    src: "images/temple-lantern.jpg"},
    {title: "Vash",
    desc: "vash the stampede",
    src: "images/slidey.jpg"}
]

const galleryDiv = document.querySelector('.gallery');

imgDb.forEach((img, i) => {
    let newImg = document.createElement("img");
    newImg.id = i;
    newImg.classList.add("gallery-image");
    newImg.src = img.src;
    newImg.alt = img.desc;
    galleryDiv.append(newImg);
})

const overlayDiv = document.querySelector('.overlay');
let displayOverlay = false;
let currentImgIndex;

galleryDiv.addEventListener('click', (e) => {
    if (e.target.className == 'gallery-image') {
        currentImgIndex = parseInt(e.target.id);
        openShowbox(imgDb[e.target.id]);
    }
})
overlayDiv.addEventListener('click', (e) => {
    if (e.target.className == 'right-button') {
        nextImg();
    } else if (e.target.className == 'left-button') {
        prevImg();
    } else {
        displayOverlay = false;
        overlayDiv.replaceChildren();
        overlayDiv.style.display = 'none';
    }
})

function openShowbox(img) {
    displayOverlay =  true;
    overlayDiv.replaceChildren();
    let currentImg = document.createElement('img');
    currentImg.src = img.src;

    overlayDiv.style.display = 'flex';
    overlayDiv.append(currentImg);

    let closeBtn = document.createElement('button');
    closeBtn.classList.add("close-button");
    overlayDiv.append(closeBtn);

    let arrowBtns = document.createElement('div');
    let leftBtn = document.createElement('button');
    let rightBtn = document.createElement('button');

    leftBtn.classList.add('left-button');
    rightBtn.classList.add('right-button');
    arrowBtns.classList.add("arrow-buttons");

    if (imgDb.length > 1 && currentImgIndex >= 1) arrowBtns.append(leftBtn);
    if (currentImgIndex + 1 != imgDb.length) arrowBtns.append(rightBtn);
    overlayDiv.append(arrowBtns); 
}

document.onkeydown = function(e) {
    if (e.key == 'ArrowLeft' && displayOverlay && currentImgIndex > 0) {
        prevImg();
    } else if (e.key == 'ArrowRight' && displayOverlay && currentImgIndex < imgDb.length - 1) {
        nextImg();
    }
}

function prevImg() {
    currentImgIndex--;
    let prevImg = imgDb[currentImgIndex];
    openShowbox(prevImg);
}

function nextImg() {
    currentImgIndex++;
    let nextImg = imgDb[currentImgIndex];
    openShowbox(nextImg);
}