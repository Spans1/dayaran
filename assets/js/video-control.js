document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('reelVideo');

  if (video) {
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.pause();
      video.load(); // vuelve a mostrar el poster
    });
  }
});
