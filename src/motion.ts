import * as posenet from "@tensorflow-models/posenet";
import * as T from "./types";
import { Target } from "./target";

export class Motion {
    private _net: any;
    private _target: Target;

    async init(): Promise<void> {
        this._net = await posenet.load({
            architecture: 'MobileNetV1',
            outputStride: 16,
            inputResolution: { width: 640, height: 480 },
            multiplier: 0.75
        });
        this._target = new Target();
        this._target.init();
    }
    capture(video: HTMLVideoElement, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): Promise<void> {
        // const pose: T.Pose = await this._net.estimateSinglePose(video, {
        //     flipHorizontal: true
        // });
        //console.log("points");
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawvideo(video, ctx, canvas);
        // this.drawtarget(ctx);
        // this.drawpose(pose.keypoints, ctx);
    }

    private drawvideo(video: HTMLVideoElement, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(-video.width, 0);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        ctx.restore();
    }

    private drawpose(points: T.Keypoint[], ctx: CanvasRenderingContext2D) {
        console.log("points");
        for (const p of points) {
            if (p.score > 0.15) {
                ctx.save();
                // ctx.beginPath();
                // ctx.arc(p.position.x, p.position.y, 5, 0, 2 * Math.PI);
                // // ctx.fillStyle = color;
                // ctx.fill();
                ctx.fillStyle = "#00F";
                ctx.fillText(`${p.part}(${Math.floor(p.position.x)}, ${Math.floor(p.position.y)})`, p.position.x, p.position.y);
                ctx.restore();
            }
        }
    }

    private drawtarget(ctx: CanvasRenderingContext2D) {
        const tgt: T.Pose = this._target.nowPose();
        ctx.save();
        for(const k of tgt.keypoints) {
            ctx.beginPath();
            ctx.arc(k.position.x, k.position.y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "#F00";
            ctx.fill();
        }
        ctx.restore();
    }
}

export interface PoseNet {
    estimateSinglePose(input: HTMLVideoElement, anyconfig?: any): Promise<T.Pose>;
}
