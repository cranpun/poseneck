import { Camera } from "./camera";

window.addEventListener("load", async () => {
    const c = new Camera();
    const canv: HTMLCanvasElement = document.querySelector("#poseneckcanvas");
    const btstart = document.querySelector("#bt-start");
    btstart.addEventListener("click",async () => {
        await c.start(canv);
    });
});