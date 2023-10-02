import { galleryItems } from './gallery-items.js';
// Change code below this line

const ul = document.querySelector('ul');


for( const galleryItem of galleryItems) {
    const img = document.createElement('img');
img.classList = 'gallery__image';
img.src = galleryItem.preview;
img.dataset.source = 'large-image.jpg';
img.alt = galleryItem.description;

const a = document.createElement('a');
a.classList = 'gallery__link';
a.href = galleryItem.original;
a.appendChild(img);

const li = document.createElement('li');
li.classList = 'gallery__item';
li.appendChild(a);

ul.appendChild(li);

}

