document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = [
    {
      smallImage: "small-image1.jpg",
      largeImage: "large-image1.jpg",
      description: "Image 1"
    },
    {
      smallImage: "small-image2.jpg",
      largeImage: "large-image2.jpg",
      description: "Image 2"
    },
    // Add more gallery items as needed
  ];

  const gallery = document.querySelector(".gallery");

  function createGalleryItem(item) {
    const li = document.createElement("li");
    li.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = item.largeImage;

    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.src = item.smallImage;
    img.alt = item.description;
    img.setAttribute("data-source", item.largeImage);

    link.appendChild(img);
    li.appendChild(link);

    return li;
  }

  function openModal(src) {
    const instance = basicLightbox.create(`<img src="${src}">`);
    instance.show();
  }

  function handleGalleryClick(event) {
    event.preventDefault();
    const target = event.target;

    if (target.nodeName !== "IMG") return;

    const source = target.dataset.source;
    openModal(source);
  }

  gallery.addEventListener("click", handleGalleryClick);

  function renderGallery() {
    const items = galleryItems.map(createGalleryItem);
    gallery.append(...items);
  }

  renderGallery();
});

function handleGalleryClick(event) {
  // ...existing code...

  if (target.nodeName !== "IMG") return;

  const source = target.dataset.source;
  openModal(source);

  document.addEventListener("keydown", handleKeyDown);
}

function handleKeyDown(event) {
  if (event.key === "Escape") {
    basicLightbox.close();
    document.removeEventListener("keydown", handleKeyDown);
  }
}