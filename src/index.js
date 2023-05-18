import Scale from "./Incidents/Scale";
import MyClip from "./Incidents/Clip";

import pkg from "../package.json";

export default {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [
    {
      exportable: Scale,
      name: "Scale",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            scale: {
              type: "object",
              props: {
                x: {
                  type: "number",
                },
                y: { type: "number" },
              },
            },
          },
        },
      },
    },
  ],
  Clip: {
    exportable: MyClip,
  },
};
