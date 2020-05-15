import { Camera } from "./camera";

window.addEventListener("load", async () => {
    const c = new Camera();
    const canv: HTMLCanvasElement = document.querySelector("#stickmancanvas");
    await c.start(canv);
});