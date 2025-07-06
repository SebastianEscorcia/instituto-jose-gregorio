 const modal = document.getElementById('video-modal');
  const closeBtn = document.querySelector('.close-modal');
  const video = modal.querySelector('video');

  closeBtn.addEventListener('click', () => {
    video.pause();
    video.currentTime = 0; // Reinicia al inicio
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      video.pause();
      video.currentTime = 0;
      modal.style.display = 'none';
    }
  });