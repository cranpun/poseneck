import { Camera } from "./camera";

window.addEventListener("load", async () => {
    const c = new Camera();
    const btstart = document.querySelector("#bt-start");
    btstart.addEventListener("click",async () => {
        const canv: HTMLCanvasElement = document.querySelector("#poseneckcanvas");
        await c.start(canv);
    });
});