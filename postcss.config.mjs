// const config = {
//   plugins: ["@tailwindcss/postcss"],
// };
// export default config;



// tailwind.config.js
const config = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        raleway: ['var(--font-raleway)'],
      },
    },
  },
  plugins: ["@tailwindcss/postcss"],
}
export default config;
