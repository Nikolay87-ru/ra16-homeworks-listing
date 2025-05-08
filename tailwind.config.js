module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['"Work Sans"', 'sans-serif'],
      },
      colors: {
        'gray-200': '#e9e9e9',
        'green-700': '#3c763d',
        'yellow-600': '#8a6d3b',
        'red-600': '#a94442',
      },
      boxShadow: {
        'md': '2px 2px 4px 0 #d1d1d1',
      },
      borderRadius: {
        'sm': '2px',
      },
    },
  },
  plugins: [],
}
