import { Camera } from "./camera";

window.addEventListener("load", async () => {
    const c = new Camera();
    const btstart = document.querySelector("#bt-start");
    btstart.addEventListener("click",() => {
        const canv: HTMLCanvasElement = document.querySelector("#poseneckcanvas");
        c.start(canv);
    });
});