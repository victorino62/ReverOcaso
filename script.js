window.onload = function() {
    

    // --- EFEITO SHAKE NO WHATSAPP ---
    setInterval(function() {
        var icon = document.getElementById("whatsapp-icon");
        if (icon) {
            icon.classList.add("shake");
            setTimeout(function() {
                icon.classList.remove("shake");
            }, 500);
        }
    }, 10000);

    // --- CARROSSEL DE BANNERS ---
    const carouselImages = [
        'images/capa_carrossel_2.svg',
        'images/capa_carrossel_1.svg'
    ];
    const carouselImagesMobile = [
        'images/capa_carrossel_mobile_1.png',
        'images/capa_carrossel_mobile_2.png'
    ];
    let currentIndex = 0;
    const carouselImg = document.getElementById('carousel-image');
    const carouselImgMobile = document.getElementById('carousel-image-mobile');

    // Pré-carrega imagens
    carouselImages.concat(carouselImagesMobile).forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Garante que carrossel só roda se existem imagens e elementos
    if (carouselImg && carouselImgMobile) {
        carouselImg.src = carouselImages[currentIndex];
        carouselImg.style.opacity = 1;
        carouselImgMobile.src = carouselImagesMobile[currentIndex];
        carouselImgMobile.style.opacity = 1;

        function fadeOut(element, duration, callback) {
            let opacity = 1;
            const interval = 50;
            const gap = interval / duration;
            function fade() {
                opacity -= gap;
                if (opacity <= 0) {
                    opacity = 0;
                    element.style.opacity = opacity;
                    if (callback) callback();
                } else {
                    element.style.opacity = opacity;
                    setTimeout(fade, interval);
                }
            }
            fade();
        }

        function fadeIn(element, duration) {
            let opacity = 0;
            const interval = 50;
            const gap = interval / duration;
            function fade() {
                opacity += gap;
                if (opacity >= 1) {
                    opacity = 1;
                    element.style.opacity = opacity;
                } else {
                    element.style.opacity = opacity;
                    setTimeout(fade, interval);
                }
            }
            fade();
        }

        function changeImageWithFade(nextIndex) {
            fadeOut(carouselImg, 400, () => {
                carouselImg.src = carouselImages[nextIndex];
                fadeIn(carouselImg, 400);
            });
            fadeOut(carouselImgMobile, 400, () => {
                carouselImgMobile.src = carouselImagesMobile[nextIndex];
                fadeIn(carouselImgMobile, 400);
            });
        }

        setInterval(() => {
            currentIndex = (currentIndex + 1) % carouselImages.length;
            changeImageWithFade(currentIndex);
        }, 6000);
    }
};
