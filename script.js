document.addEventListener("DOMContentLoaded", () => {
    // 1. 슬라이드 로직
    const slides = document.querySelectorAll(".slide");
    let current = 0;
    setInterval(() => {
        slides[current].style.opacity = "0";
        current = (current + 1) % slides.length;
        slides[current].style.opacity = "1";
    }, 8000);

    // 2. 런처 버튼 및 로딩바 로직
    const btn = document.getElementById("gameStartBtn");
    const modal = document.getElementById("launcherModal");
    const bar = document.getElementById("progressBar");
    const text = document.getElementById("progressText");

    btn.addEventListener("click", () => {
        modal.classList.remove("hidden");
        let p = 0;
        const i = setInterval(() => {
            p += Math.floor(Math.random() * 10) + 2;
            if (p >= 100) {
                p = 100;
                clearInterval(i);
                setTimeout(() => {
                    modal.classList.add("hidden");
                    bar.style.width = "0%";
                }, 500);
            }
            bar.style.width = p + "%";
            text.innerText = p + "%";
        }, 200);
    });
});
