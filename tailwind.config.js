/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        introDark: 'hsl(217, 28%, 15%)',
        mainDark: 'hsl(218, 28%, 13%)',
        footerDark: 'hsl(216, 53%, 9%)',
        testimonialDark: 'hsl(219, 30%, 18%)',

        cyan: ' hsl(176, 68%, 64%)',
        callBlue: 'hsl(198, 60%, 50%)',
        lightRed: 'hsl(0, 100%, 63%)',
        White: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
    plugins: [],
  },
};
