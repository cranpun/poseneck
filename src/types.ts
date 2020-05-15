
/** from posenet types **/
export type Vector2D = {
    y: number;
    x: number;
};
export type Keypoint = {
    score: number;
    position: Vector2D;
    part: string;
};
export type Pose = {
    keypoints: Keypoint[];
    score: number;
};
