function alignBg() {
    const bg = document.querySelector(".bg");

    const leftSize = window.mozInnerScreenX;
    const topSize = window.mozInnerScreenY;
    const outerMargin = (1920 - window.outerWidth) / 2;
    
    bg.style.transform = `translateX(${-leftSize - outerMargin}px) translateY(${-topSize}px)`;
    bg.style.display = "block";
    window.requestAnimationFrame(alignBg);
}

function setContent() {
    const date = new Date();
    const timeEl = document.querySelector(".time");
    
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    timeEl.innerHTML = `${hours}:${minutes}`;
}

alignBg()
setContent();

window.requestAnimationFrame(alignBg);
