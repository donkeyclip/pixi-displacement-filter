import { BrowserClip } from "@donkeyclip/motorcortex";
import { Application, Sprite, DisplacementFilter, Texture } from "pixi.js";

export default class MyClip extends BrowserClip {
  onAfterRender() {
    const app = new Application({
      width: this.attrs.width,
      height: this.attrs.height,
    });
    app.stage.filters = [];
    this.context.rootElement.appendChild(app.view);
    this.attrs.imageSet.forEach((element, i) => {
      const texture = Texture.from(element.imgUrl);
      const textureDepth = Texture.from(element.mapUrl);
      const img = new Sprite(texture);
      img.width = this.attrs.width;
      img.height = this.attrs.height;
      app.stage.addChild(img);
      const depthMap = new Sprite(textureDepth);
      app.stage.addChild(depthMap);
      const displacementFilter = new DisplacementFilter(depthMap);
      img.filters = [displacementFilter];
      this.setCustomEntity(`map-${i}`, displacementFilter);
      this.setCustomEntity(`spite-${i}`, img);
    });
  }
}
