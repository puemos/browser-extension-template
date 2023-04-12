const theme = require("tailwindcss/defaultTheme");

function rem2px(input, fontSize = 16) {
  if (input == null) {
    return input;
  }
  switch (typeof input) {
    case "object":
      if (Array.isArray(input)) {
        return input.map((val) => rem2px(val, fontSize));
      }
      const ret = {};
      for (const key in input) {
        ret[key] = rem2px(input[key], fontSize);
      }
      return ret;
    case "string":
      return input.replace(
        /(\d*\.?\d+)rem$/,
        (_, val) => `${parseFloat(val) * fontSize}px`
      );
    case "function":
      return eval(
        input
          .toString()
          .replace(
            /(\d*\.?\d+)rem/g,
            (_, val) => `${parseFloat(val) * fontSize}px`
          )
      );
    default:
      return input;
  }
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx}", "../design-system/src/**/*.{ts,tsx}"],
  important: "#browser-extension-template",
  theme: {
    ...rem2px(theme),
    extend: {
      fontFamily: {
        sans: ["system-ui", ...theme.fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
