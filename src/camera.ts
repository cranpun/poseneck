import { Motion } from "./motion";

export class Camera {
    private _video: HTMLVideoElement;
    private _canvas: HTMLCanvasElement;
    private _ctx: CanvasRenderingContext2D;
    private _motion: Motion;
    private _loaded: boolean = false;

    public get video(): HTMLVideoElement {
        return this._video;
    }
    async setup(canvas: HTMLCanvasElement): Promise<HTMLVideoElement> {
        try {
            this._motion = new Motion();
            this._motion.init();
            this._canvas = canvas;
            this._ctx = this._canvas.getContext("2d");
            this._video = document.createElement("video")
            this._video.width = 640;
            this._video.height = 480;
            const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
                video: { width: 640, height: 480 },
                audio: false,
            });
            this._video.srcObject = stream;

            return new Promise((resolve) => {
                this._video.onloadedmetadata = (e) => {
                    resolve(this._video);
                };
            });

        } catch (e) {
            console.error(e);
        }
    }

    async start(canvas: HTMLCanvasElement): Promise<void> {
        await this.setup(canvas);
        this._video.play();
        this.capture();
    }

    capture(): void {
        const captureProc = async () => {
            //if (this._loaded) {
            //await this._motion.capture(this._video, this._ctx, this._canvas);

            window.requestAnimationFrame(captureProc);
            //}
        }
        captureProc();
    }
}