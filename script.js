
// === Alphabetical Sorting Logic ===
<script>
  const container = document.getElementById('game-container');
  const buttons = Array.from(container.getElementsByClassName('game-button'));

  buttons.sort((a, b) => {
    return a.textContent.localeCompare(b.textContent);
  });

  buttons.forEach(button => container.appendChild(button));
</script>

// === Music Player Logic ===
(function setupMusicPlayer() {
  const songs = [
    'music/song1.mp3',
    'music/song2.mp3',
    'music/song3.mp3'
  ];

  const audio = document.getElementById('audio');
  const playBtn = document.getElementById('play-btn');
  const settingsBtn = document.getElementById('settings-btn');
  const settingsPanel = document.getElementById('settings-panel');
  const volumeSlider = document.getElementById('volume-slider');
  const musicToggle = document.getElementById('music-toggle');

  function loadRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    audio.src = songs[randomIndex];
  }

  loadRandomSong();

  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = '⏸ Pause';
    } else {
      audio.pause();
      playBtn.textContent = '▶️ Play';
    }
  });

  settingsBtn.addEventListener('click', () => {
    settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'block' : 'none';
  });

  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
  });

  musicToggle.addEventListener('change', () => {
    if (musicToggle.checked) {
      audio.play();
    } else {
      audio.pause();
    }
  });
})();
