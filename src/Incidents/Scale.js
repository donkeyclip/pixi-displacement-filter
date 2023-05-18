import { Effect } from "@donkeyclip/motorcortex";
import compoAttrs from "./compoAttrs";

export default class Scale extends Effect {
  getScratchValue() {
    return { x: 0, y: 0 };
  }

  onGetContext() {}

  onProgress(ms) {
    const displacementFilter = this.element.entity;
    compoAttrs.scale.forEach((axis) => {
      const initialValue = this.initialValue[axis];
      const targetValue = this.targetValue[axis];
      const difference = targetValue - initialValue;
      displacementFilter.scale[axis] =
        this.getFraction(ms) * difference + initialValue;
    });
  }
}
