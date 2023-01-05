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
    src: "images/lightning.jpg"}
]

const galleryDiv = document.querySelector('.gallery');

imgDb.forEach((img, i) => {
    let newImg = document.createElement("img");
    newImg.id = i+1;
    newImg.classList.add("gallery-image");
    newImg.src = img.src;
    newImg.alt = img.desc;
    galleryDiv.append(newImg);
})