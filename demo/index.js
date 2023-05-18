import { loadPlugin, HTMLClip } from "@donkeyclip/motorcortex";
import Player from "@donkeyclip/motorcortex-player";
import PluginDefinition from "../dist/pixi-displacement-filter.esm";
const MyPlugin = loadPlugin(PluginDefinition);

const clip = new HTMLClip({
  html: `<div class="container">
        <div id="myclip"></div>
    </div>`,
  css: `
        .container{
          width: 1920px;
          height: 1080px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
        }
        #myclip{
          width: 1920px;
          height: 1080px;
          
        }
    `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
});

const newCustomClip = new MyPlugin.Clip(
  {
    width: 1920,
    height: 1080,
    imgUrl: "./Frame.png",
    mapUrl: "./Frame2.png",
  },
  {
    selector: "#myclip",
    containerParams: {
      width: "1920px",
      height: "1080px",
    },
  }
);

const play = new MyPlugin.Scale(
  {
    animatedAttrs: {
      scale: { x: -20, y: 0 },
    },
  },
  {
    duration: 1500,
    selector: "!#displacement",
  }
);
const play2 = new MyPlugin.Scale(
  {
    animatedAttrs: {
      scale: { x: 0, y: 0 },
    },
  },
  {
    duration: 1500,
    selector: "!#displacement",
  }
);

newCustomClip.addIncident(play, 0);
newCustomClip.addIncident(play2, 3500);
clip.addIncident(newCustomClip, 0);

new Player({ clip, backgroundColor: "#fff", loop: true, autoplay: true });
