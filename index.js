const imgDb = [
    {title: "",
    desc: "",
    src: "images/desert.jpg"},
    {title: "",
    desc: "",
    src: "images/green-crystal.jpg"},
    {title: "",
    desc: "",
    src: "images/minish-village.jpg"},
    {title: "",
    desc: "",
    src: "images/sky-palace.jpg"},
    {title: "",
    desc: "",
    src: "images/slidey.jpg"},
    {title: "",
    desc: "",
    src: "images/forest-haven.jpg"},
    {title: "",
    desc: "",
    src: "images/hedance.jpg"},
    {title: "",
    desc: "",
    src: "images/skyward.jpg"},
    {title: "",
    desc: "",
    src: "images/terada1.jpg"},
    {title: "",
    desc: "",
    src: "images/terada2.jpg"},
    {title: "",
    desc: "",
    src: "images/tiny.jpg"}
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