module.exports = {
  darkMode: 'class',
  mode: "jit",
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'dark-blue': {
        1: "hsl(209, 23%, 22%)", // Dark Blue
        2: "hsl(207, 26%, 17%)", // Very Dark Blue
        3: "hsl(200, 15%, 8%)", // Very Dark Blue (light)
      },
      'gray': {
        1: "hsl(0, 0%, 52%)", // Dark Gray
        2: "hsl(0, 0%, 98%)", // Very Light Gray
      },
      'white': "#ffffff"
    },
    fontFamily: {
      'display': ['"Nunito Sans"', 'sans-serif']
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      'primary': '14px',
      'secondary': '16px',
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
