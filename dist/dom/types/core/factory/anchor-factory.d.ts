import { Connection } from "../connector/connection-impl";
import { Endpoint } from "../endpoint/endpoint-impl";
import { PointArray } from "../common";
import { JsPlumbInstance } from "../core";
import { Anchor } from "../anchor/anchor";
import { AnchorPlacement } from "../anchor-manager";
export declare type AnchorOrientationHint = -1 | 0 | 1;
export declare type Orientation = [number, number];
export declare type Face = "top" | "right" | "bottom" | "left";
export declare type Axis = [Face, Face];
export declare const X_AXIS_FACES: Axis;
export declare const Y_AXIS_FACES: Axis;
export declare type AnchorComputeParams = {
    xy?: PointArray;
    wh?: PointArray;
    txy?: PointArray;
    twh?: PointArray;
    element?: Endpoint;
    timestamp?: string;
    index?: number;
    tElement?: Endpoint;
    connection?: Connection;
    elementId?: string;
    rotation?: number;
    tRotation?: number;
};
export interface AnchorOptions {
    cssClass?: string;
}
export declare type AnchorId = "Assign" | "AutoDefault" | "Bottom" | "BottomCenter" | "BottomLeft" | "BottomRight" | "Center" | "Continuous" | "ContinuousBottom" | "ContinuousLeft" | "ContinuousRight" | "ContinuousTop" | "ContinuousLeftRight" | "ContinuousTopBottom" | "Left" | "LeftMiddle" | "Perimeter" | "Right" | "RightMiddle" | "Top" | "TopCenter" | "TopLeft" | "TopRight";
export declare type AnchorSpec = AnchorId | [AnchorId, AnchorOptions] | AnchorPlacement;
export declare const Anchors: {
    get: (instance: JsPlumbInstance, name: string, args: any) => Anchor;
};
export declare function makeAnchorFromSpec(instance: JsPlumbInstance, spec: AnchorSpec, elementId?: string): Anchor;
export declare type ShapeFunction = (anchorCount: number, p?: any) => Array<any>;