import * as T from "./types";

export class Target {
    private _targets: T.Pose[];
    private _idx: number;

    public init() {
        this._idx = 0;
        this._targets = [];

        // 初期位置
        this._targets.push({
            keypoints: [
                { part: "nose", position: { x: 100, y: 100 }, score: 0 },
                { part: "leftEye", position: { x: 80, y: 100 }, score: 0 },
                { part: "rightEye", position: { x: 120, y: 100 }, score: 0 },
            ], score: 0
        });

        // // 上向き
        // this._targets.push({
        //     keypoints: [
        //         { part: "nose", position: { x: 100, y: 100 }, score: 0 },
        //         { part: "leftEye", position: { x: 80, y: 100 }, score: 0 },
        //         { part: "rightEye", position: { x: 120, y: 100 }, score: 0 },
        //     ], score: 0
        // });

        // // 下向き
        // this._targets.push({
        //     keypoints: [
        //         { part: "nose", position: { x: 100, y: 100 }, score: 0 },
        //         { part: "leftEye", position: { x: 80, y: 100 }, score: 0 },
        //         { part: "rightEye", position: { x: 120, y: 100 }, score: 0 },
        //     ], score: 0
        // });

        // // 左向き
        // this._targets.push({
        //     keypoints: [
        //         { part: "nose", position: { x: 100, y: 100 }, score: 0 },
        //         { part: "leftEye", position: { x: 80, y: 100 }, score: 0 },
        //         { part: "rightEye", position: { x: 120, y: 100 }, score: 0 },
        //     ], score: 0
        // });

        // // 右向き
        // this._targets.push({
        //     keypoints: [
        //         { part: "nose", position: { x: 100, y: 100 }, score: 0 },
        //         { part: "leftEye", position: { x: 80, y: 100 }, score: 0 },
        //         { part: "rightEye", position: { x: 120, y: 100 }, score: 0 },
        //     ], score: 0
        // });

        // // 左傾き
        // this._targets.push({
        //     keypoints: [
        //         { part: "nose", position: { x: 100, y: 100 }, score: 0 },
        //         { part: "leftEye", position: { x: 80, y: 100 }, score: 0 },
        //         { part: "rightEye", position: { x: 120, y: 100 }, score: 0 },
        //     ], score: 0
        // });

        // // 右傾き
        // this._targets.push({
        //     keypoints: [
        //         { part: "nose", position: { x: 100, y: 100 }, score: 0 },
        //         { part: "leftEye", position: { x: 80, y: 100 }, score: 0 },
        //         { part: "rightEye", position: { x: 120, y: 100 }, score: 0 },
        //     ], score: 0
        // });
    }

    public nowPose(): T.Pose {
        return this._targets[this._idx];
    }

    // private check(pose: T.Pose) {
    //     // targetの確認
    //     let res = true;
    //     const tgt = this._targets[this._idx];

    //     for(const [i, k] of tgt.keypoints.entries()) {
    //         const now = pose.keypoints[i]; // indexは同じ
    //         if(k.position.x = 
    //     }
    // }
}
