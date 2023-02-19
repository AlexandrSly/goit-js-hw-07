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

gallerySection.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  } else {
    // console.log(e.target.dataset.source);
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);
    instance.show();
  }
});

gallerySection.addEventListener("keydown", (e) => {
  const visible = basicLightbox.visible();
  // console.log(visible, e.code);
  if (!visible) {
    return;
  } else if (e.code === "Escape") {
    instance.close();
  }
});
