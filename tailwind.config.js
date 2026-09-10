/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  "extend": {
    "colors": {
      "bg-dark": "#0B0B0B",
      "surface-dark": "#1A1A1A",
      "gold": "#F5C400",
      "whatsapp": "#25D366"
    },
    "fontFamily": {
      "display": [
        "Clash Display",
        "sans-serif"
      ],
      "body": [
        "Plus Jakarta Sans",
        "sans-serif"
      ]
    }
  }
},
  plugins: [],
};