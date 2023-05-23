const galleryItems = [
  {
    preview: 'small-image-1.jpg',
    original: 'large-image-1.jpg',
    description: 'Image 1',
  },
  {
    preview: 'small-image-2.jpg',
    original: 'large-image-2.jpg',
    description: 'Image 2',
  },
  {
    preview: 'small-image-3.jpg',
    original: 'large-image-3.jpg',
    description: 'Image 3',
  },
];

const galleryContainer = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}

const galleryMarkup = galleryItems.map(createGalleryItem).join('');
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', handleGalleryItemClick);

function handleGalleryItemClick(event) {
  event.preventDefault();
  
  const target = event.target;
  if (target.classList.contains('gallery__image')) {
    const imageSource = target.dataset.source;
    openModal(imageSource);
  }
}

function openModal(imageSource) {
  const modal = basicLightbox.create(`
    <img src="${imageSource}" width="800" height="600">
  `);

  modal.show();

  document.addEventListener('keydown', closeModalOnEscape);

  function closeModalOnEscape(event) {
    if (event.code === 'Escape') {
      modal.close();
      document.removeEventListener('keydown', closeModalOnEscape);
    }
  }
}