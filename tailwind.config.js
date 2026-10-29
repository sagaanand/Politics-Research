/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Inter"',
          "system-ui",
          "sans-serif"
        ],
        serif: [
          '"New York"',
          "Charter",
          "Georgia",
          "serif"
        ],
        mono: [
          '"SF Mono"',
          '"JetBrains Mono"',
          "ui-monospace",
          "monospace"
        ]
      },
      colors: {
        apple: {
          bg: "#FBFBFD",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          cardHover: "#F5F5F7",
          border: "#E5E5EA",
          borderSubtle: "#F0F0F2",
          text: "#1D1D1F",
          textMuted: "#6E6E73",
          textSubtle: "#86868B",
          accent: "#0066CC",
          accentHover: "#0077ED",
          navy: "#0A2540",
          slate: "#334155"
        }
      },
      boxShadow: {
        'keynote': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'keynote-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.08), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'keynote-slide': '0 20px 45px -10px rgba(0, 0, 0, 0.07), 0 10px 20px -5px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
