const imgDb = [
    {title: "Seagulls",
    desc: "seagulls on a rock",
    src: "images/gulls.jpg"},
    {title: "Sunset Cliff",
    desc: "forest cliff bathed in sunset",
    src: "images/sunsetcliff.jpg"},
    {title: "Sunset trees",
    desc: "misty orange trees",
    src: "images/sunsettrees.jpg"},
    {title: "Lightning",
    desc: "lightning beams",
    src: "images/lightning.jpg"},
    {title: "Vash",
    desc: "vash the stampede",
    src: "images/vash.jpg"},
]

const galleryDiv = document.querySelector('.gallery');

imgDb.forEach((img, i) => {
    let newImg = document.createElement("img");
    newImg.addEventListener('click', openViewer);
    newImg.id = i+1;
    newImg.classList.add("gallery-image");
    newImg.src = img.src;
    newImg.alt = img.desc;
    galleryDiv.append(newImg);
})

const overlayDiv = document.querySelector('.overlay');
let displayOverlay = false;

function openViewer(e) {
    let targetImg = document.createElement('img');
    targetImg.src = e.target.src;
    overlayDiv.style.display = 'flex';
    overlayDiv.append(targetImg);
}

overlayDiv.addEventListener('click', () => {
    overlayDiv.replaceChildren();
    overlayDiv.style.display = 'none';
})