/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#6366F1",
          "primary-hover": "#4F46E5",
  
          background: "#0B1120",
          surface: "#111827",
          card: "#172033",
  
          border: "#334155",
  
          heading: "#F8FAFC",
          text: "#CBD5E1",
          muted: "#94A3B8",
  
          accent: "#06B6D4",
          success: "#10B981",
          warning: "#F59E0B",
          danger: "#EF4444",
        },
      },
    },
    plugins: [],
  };