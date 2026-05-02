/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#F4F5E8",
          foreground: "#34665B",
        },
        secondary: {
          DEFAULT: "#34665B",
          foreground: "#F4F5E8",
        },
        "secondary-dark": "#2A5249",
        "secondary-darker": "#1E3B34",
        accent: {
          DEFAULT: "#E8B86D",
          hover: "#D4A35C",
          foreground: "#1E3B34",
        },
        "text-primary": "#34665B",
        "text-secondary": "#5A7D73",
        "text-on-dark": "#F4F5E8",
        "surface-light": "#FFFFFF",
        "surface-cream": "#EDEEDF",
        "status-open": "#5A9A6E",
        "status-limited": "#D4956A",
        "status-full": "#C4706A",
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: "24px",
        lg: "16px",
        md: "12px",
        sm: "8px",
        full: "9999px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { transform: "translateX(-150%)" },
          "100%": { transform: "translateX(150%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 0.6s ease-in-out",
        float: "float 3s ease-in-out infinite",
        "float-delay-1": "float 3s ease-in-out 0.5s infinite",
        "float-delay-2": "float 3s ease-in-out 1s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
