function showProfile() {
    document.querySelector('.btn').style.display = "none";  // hide Register button
    document.getElementById('iconsBox').style.display = "flex"; // show icons
}



const track = document.querySelector(".carousel-track");
let isDown = false;
let startX;
let scrollLeft;

track.addEventListener("mousedown", (e) => {
    isDown = true;
    track.style.animationPlayState = "paused";
    startX = e.pageX;
    scrollLeft = track.offsetLeft;
});
track.addEventListener("mouseup", () => {
    isDown = false;
    track.style.animationPlayState = "running";
});
track.addEventListener("mouseleave", () => {
    isDown = false;
    track.style.animationPlayState = "running";
});
track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    const walk = (e.pageX - startX) * 1.5;
    track.style.transform = `translateX(${walk}px)`;
});