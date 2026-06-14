const panelTime = document.getElementById('panelTime');

function updateClock() {
  const now = new Date();
  panelTime.textContent = now.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}

updateClock();
setInterval(updateClock, 1000);
