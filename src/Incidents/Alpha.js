import { Effect } from "@donkeyclip/motorcortex";

export default class Alpha extends Effect {
  getScratchValue() {
    return 0;
  }

  onGetContext() {}

  onProgress(ms) {
    const initialValue = this.initialValue;
    const targetValue = this.targetValue;
    const difference = targetValue - initialValue;
    this.element.entity.alpha =
      this.getFraction(ms) * difference + initialValue;
  }
}
