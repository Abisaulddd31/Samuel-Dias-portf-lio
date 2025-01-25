document.querySelectorAll('.item img, .item video').forEach(elemento => {
    elemento.addEventListener('click', function() {
        const lightbox = document.getElementById('lightbox');
        const img = document.getElementById('lightbox-img');
        const video = document.getElementById('lightbox-video');

        if (this.tagName === 'IMG') {
            img.src = this.src;
            img.style.display = 'block';
            video.style.display = 'none';
        } else if (this.tagName === 'VIDEO') {
            video.src = this.querySelector('source').src;
            video.style.display = 'block';
            img.style.display = 'none';
        }

        lightbox.classList.add('active');
    });
});

function fecharLightbox() {
    const lightbox = document.getElementById('lightbox');
    const video = document.getElementById('lightbox-video');

    lightbox.classList.remove('active');
    video.pause(); // Para o vídeo ao fechar
}
