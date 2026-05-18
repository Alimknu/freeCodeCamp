const lightbox = document.querySelector('.lightbox');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightboxImage = document.getElementById('lightbox-image');
const closeBtn = document.getElementById('close-btn');

if (galleryItems && lightbox && lightboxImage) {
	galleryItems.forEach(item => {
		item.addEventListener('click', () => {
			const src = item.getAttribute('src') || item.src;
			if (!src) return;
			const fullSrc = src.replace('-thumbnail', '');
			lightboxImage.src = fullSrc;
			lightbox.style.display = 'flex';
		});
	});
}

if (closeBtn && lightbox) {
	closeBtn.addEventListener('click', () => {
		lightbox.style.display = 'none';
	});
}

if (lightbox) {
	lightbox.addEventListener('click', (e) => {
		if (e.target === lightbox) {
			lightbox.style.display = 'none';
		}
	});
}