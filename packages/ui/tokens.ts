export const tokens = {
  color: {
    paper: "#F6F1E6",
    paper2: "#FBF7EF",
    ink: {
      900: "rgb(23 23 23)", // neutral-900 相当
      800: "rgb(38 38 38)", // neutral-800
      700: "rgb(64 64 64)", // neutral-700 (charcoal)
      600: "rgb(82 82 82)",
      500: "rgb(115 115 115)",
    },
  },
  radius: {
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
  },
  shadow: {
    soft: "0 1px 2px rgba(0,0,0,0.06)",
  },
} as const;
