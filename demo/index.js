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
    imageSet: [
      {
        imgUrl: "./room.png",
        mapUrl: "./room-map.png",
      },
      {
        imgUrl: "./room1.png",
        mapUrl: "./room1-map.png",
      },
      // {
      //   imgUrl: "./room2.png",
      //   mapUrl: "./room2-map.png",
      // },
    ],
  },
  {
    selector: "#myclip",
    containerParams: {
      width: "1920px",
      height: "1080px",
    },
  }
);

const Alphaplay = new MyPlugin.Alpha(
  {
    animatedAttrs: {
      alpha: 1,
    },
    initialAttrs: {
      alpha: 0,
    },
  },
  {
    duration: 1000,
    selector: "!#spite-0",
  }
);
const Alphaplay1 = new MyPlugin.Alpha(
  {
    animatedAttrs: {
      alpha: 1,
    },
    initialAttrs: {
      alpha: 0,
    },
  },
  {
    duration: 1000,
    selector: "!#spite-1",
  }
);
// const Alphaplay2 = new MyPlugin.Alpha(
//   {
//     animatedAttrs: {
//       alpha: 1,
//     },
//     initialAttrs: {
//       alpha: 0,
//     },
//   },
//   {
//     duration: 10,
//     selector: "!#spite-2",
//   }
// );

const play = new MyPlugin.Scale(
  {
    animatedAttrs: {
      scale: { x: -40, y: 0 },
    },
  },
  {
    duration: 3000,
    selector: "!#map-0",
  }
);
const play2 = new MyPlugin.Scale(
  {
    animatedAttrs: {
      scale: { x: -40, y: 0 },
    },
  },
  {
    duration: 3000,
    selector: "!#map-1",
  }
);

newCustomClip.addIncident(Alphaplay, 0);
newCustomClip.addIncident(play, 0);
// newCustomClip.addIncident(Alphaplay2, 3000);
newCustomClip.addIncident(Alphaplay1, 3000);
newCustomClip.addIncident(play2, 3000);
clip.addIncident(newCustomClip, 0);

new Player({ clip, backgroundColor: "#fff" });
