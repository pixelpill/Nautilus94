<script>
  const container = document.getElementById('game-container');
  const buttons = Array.from(container.getElementsByClassName('game-button'));

  buttons.sort((a, b) => {
    return a.textContent.localeCompare(b.textContent);
  });

  buttons.forEach(button => container.appendChild(button));
</script>
