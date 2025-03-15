window.onload = function() {
    const audio = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause");
    const seekBar = document.getElementById("seek-bar");
    const currentTimeEl = document.getElementById("current-time");
    const durationEl = document.getElementById("duration");

    let isPlaying = false;

      // Controle de volume
      volumeBar.oninput = () => {
        audio.volume = volumeBar.value;
    };

    // Função para formatar o tempo em minutos e segundos
    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    // Atualizar a duração total do áudio
    audio.onloadedmetadata = () => {
        durationEl.textContent = formatTime(audio.duration);
        seekBar.max = audio.duration;
    };

    // Atualizar a barra de progresso e o tempo atual
    audio.ontimeupdate = () => {
        seekBar.value = audio.currentTime;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    };

    // Controle de Play/Pause
    playPauseBtn.onclick = () => {
        if (isPlaying) {
            audio.pause();
            playPauseBtn.textContent = "Play";
        } else {
            audio.play();
            playPauseBtn.textContent = "Pause";
        }
        isPlaying = !isPlaying;
    };

    // Atualizar a posição do áudio ao usar a barra de progresso
    seekBar.oninput = () => {
        audio.currentTime = seekBar.value;
    };
   
   
  // Código para aplicar o efeito de shake no ícone do WhatsApp
  setInterval(function() {
    var icon = document.getElementById("whatsapp-icon");
    if (icon) {
      icon.classList.add("shake");

      setTimeout(function() {
        icon.classList.remove("shake");
      }, 500);
    }
  }, 10000);
};
     

  