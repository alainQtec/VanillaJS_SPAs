"use Strict";
const gallerySection = document.querySelector(".gallerySection");
const introImg = document.querySelector(".introSection img");
const loremTxt =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam suscipit quam repellat esse aspernatur, ullam officiis eligendi, amet earum odio laudantium optio cupiditate aliquam illo reprehenderit atque tempore eius id";
const introContent = document.querySelector(".introContent");

/* ___________
    Functions
   ___________
*/
function createGallery() {
  var items = ["box1", "box2", "box3", "box4", "box5", "box6", "box7"]; // can be Images or anything ...
  var galleryContainer = document.createElement("div");
  galleryContainer.classList.add("gallery_container", "container");
  // add boxes
  var c = 0; // count
  items.forEach((item) => {
    c++;
    var box = document.createElement("div");
    var boxName = `box${c}`;
    var boxContent = document.createElement("div");
    boxContent.classList.add("boxContent");
    boxContent.innerHTML = `<h1>${item}</h1>`;
    box.classList.add("box", boxName);
    var boxTitle = document.createElement("h2");
    boxTitle.innerText = boxName;
    box.appendChild(boxContent);
    galleryContainer.appendChild(box);
  });
  gallerySection.appendChild(galleryContainer);
}

/* ___________
    Events
   ___________
*/
introImg.addEventListener("mouseenter", (e) => {
  introImg.setAttribute("src", "assets/images/cat.gif");
});

introImg.addEventListener("mouseleave", (e) => {
  introImg.setAttribute("src", "assets/images/cat.jpg");
});

// l
introContent.innerHTML = "<h1>Start Now!</h1>";
var paragraphs = 4;
for (let i = 0; i < paragraphs; i++) {
  var p = document.createElement("p");
  p.innerText = loremTxt;
  introContent.appendChild(p);
}
createGallery();
// console.log(gallerySection);
