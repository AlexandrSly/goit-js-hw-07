import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallerySection = document.querySelector(".gallery");

const galleryEl = galleryItems.reduce((acc, img) => {
  return (acc += `<div class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img
        class="gallery__image"
        src="${img.preview}"
        data-source="${img.original}"
        alt="${img.description}"
      />
    </a>
  </div>`);
}, []);
gallerySection.innerHTML = galleryEl;
// console.log(galleryEl);

let instance = 0;
gallerySection.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  } else {
    // console.log(e.target.dataset.source);
    instance = basicLightbox.create(
      `
    <img src="${e.target.dataset.source}" width="800" height="600">
`,
      {
        onShow: () => {
          gallerySection.addEventListener("keydown", onPressKey);
        },
        onClosed: () => {
          gallerySection.removeEventListener("keydown", onPressKey);
        },
      }
    );
    instance.show();
  }
});

function onPressKey(e) {
  if (e.code !== "Escape") return;
  instance.close();
}
