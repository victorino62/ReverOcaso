window.onload = function() {
    // Seleciona o player de áudio e os controles
    const audio = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause");
    const seekBar = document.getElementById("seek-bar");
    const currentTimeEl = document.getElementById("current-time");
    const durationEl = document.getElementById("duration");

    let isPlaying = false;

    // Função para formatar o tempo em minutos e segundos
    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }

    // Atualiza a duração total do áudio
    audio.onloadedmetadata = () => {
        durationEl.textContent = formatTime(audio.duration);
        seekBar.max = audio.duration;
    };

    // Função para atualizar o tempo atual
    audio.ontimeupdate = () => {
        seekBar.value = audio.currentTime;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    };

    /* Função para pular para um tempo específico no áudio
    seekBar.oninput = () => {
        audio.currentTime = seekBar.value;
    };
    */

    

    // Atualiza o botão quando o áudio termina
    audio.onended = () => {
        playPauseBtn.innerHTML = '<span class="iconify" data-icon="mdi:play" data-width="24"></span>';
        isPlaying = false;
    };
};
