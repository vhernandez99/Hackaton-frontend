module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        nanomax: { max: "440px"},
        minsm: { min: "300px"},
        xxl: { min: "1400px"},
        smmax: { max: "640px" },
        mdmax: { max: "768px" },
        lgmax: { max: "1024px" },
        xlmax: { max: "1280px" },
        xxlmax: { max: "1400px" },
        
      },
      margin: {
        'principal': '20%',
        'principal2': '10%',
        'banner': '20%',
      },
      colors: {
        'primary': '#88482e ',
        'second': '#bc6f27 ',
        'third': '#0d0c0d  ',
        'fourth': '#713f86  ',
        'fifth': '#26153b ',
        'sixth': '#472a64  ',
        'blackcontainer':'#0c0c0c'
      },
    },
  },
  plugins: [],
}
