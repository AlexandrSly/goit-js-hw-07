import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallerySection = document.querySelector(".gallery");

const galleryEl = galleryItems.reduce((acc, img) => {
  console.log(acc);
  return (acc += `<a class="gallery__link" href="${img.original}">
      <img 
        class="gallery__image"
        src="${img.preview}"
        alt="${img.description}"
      />
    </a>
  `);
}, []);

gallerySection.innerHTML = galleryEl;

gallerySection.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  } else {
    const lightbox = new SimpleLightbox(".gallery a", {
      captions: true,
      captionDelay: 250,
      captionsData: "alt",
      loop: true,
      docClose: true,
    });
  }
});
