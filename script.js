let main = document.querySelector("#main");
let crsr = document.querySelector('.cursor');

main.addEventListener("mousemove", (dets) => {
    // console.log(dets.x)
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
});