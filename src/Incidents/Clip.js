import { BrowserClip } from "@donkeyclip/motorcortex";
import { Application, Sprite, DisplacementFilter, Texture } from "pixi.js";

export default class MyClip extends BrowserClip {
  onAfterRender() {
    let app = new Application({
      width: this.attrs.width,
      height: this.attrs.height,
    });
    this.context.rootElement.appendChild(app.view);
    const texture = Texture.from(this.attrs.imgUrl);
    const texture2 = Texture.from(this.attrs.mapUrl);

    let img = new Sprite(texture);
    img.width = this.attrs.width;
    img.height = this.attrs.height;
    app.stage.addChild(img);

    const depthMap = new Sprite(texture2);
    app.stage.addChild(depthMap);
    const displacementFilter = new DisplacementFilter(depthMap);
    app.stage.filters = [displacementFilter];
    this.setCustomEntity("displacement", displacementFilter);
  }
}
