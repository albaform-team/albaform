module.exports = {
  extends: ["stylelint-config-standard"],
  plugins: ["stylelint-order"],
  rules: {
    "order/properties-order": [
      [
        // Layout
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",
        "display",
        "flex",
        "flex-direction",
        "flex-wrap",
        "gap",
        "align-items",
        "justify-content",

        // Box model
        "box-sizing",
        "width",
        "height",
        "margin",
        "padding",

        // Border / Background
        "border",
        "border-radius",
        "background",
        "background-color",

        // Visual
        "box-shadow",
        "opacity",

        // Typography
        "color",
        "font-size",
        "font-weight",
        "line-height",
        "text-align",
        "cursor",
        "transition",
        "animation",
      ],
      {
        unspecified: "bottom",
      },
    ],
  },
};
