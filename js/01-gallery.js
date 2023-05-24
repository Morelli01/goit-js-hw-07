import { galleryItems } from "./gallery-items.js";

// Change code below this line
console.log(galleryItems);

const galleryConteiner = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) => ` <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
         <img
         class="gallery__image"
         src="${item.preview}"
         data-source="${item.original}"
        alt="${item.description}"
        />
         </a>
</li>`
    )
    .join("");
}
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryConteiner.innerHTML = galleryMarkup;
galleryConteiner.addEventListener("click", onImageClik);

function onImageClik(evt) {
  blockStandartAction(evt);

  if (evt.target.nodeName !== "IMG") {
    return;
  }
   
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
   
`);
 instance.show();
  

  galleryConteiner.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
     galleryConteiner.document.removeEventListener("keydown", (evt) =>
       onEscPress(evt, instance)
     );
}

function blockStandartAction(evt) {
  evt.preventDefault();
}
