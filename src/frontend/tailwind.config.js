import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Figtree", "system-ui", "sans-serif"],
        sans: ["Figtree", "system-ui", "sans-serif"],
      },
      colors: {
        vermillion: {
          50: "oklch(97% 0.015 28)",
          100: "oklch(93% 0.04 28)",
          200: "oklch(85% 0.08 28)",
          400: "oklch(65% 0.18 28)",
          500: "oklch(52% 0.22 28)",
          600: "oklch(44% 0.2 28)",
          700: "oklch(36% 0.17 28)",
          900: "oklch(20% 0.06 28)",
        },
        amber: {
          300: "oklch(83% 0.13 70)",
          400: "oklch(78% 0.15 65)",
          500: "oklch(72% 0.15 58)",
          600: "oklch(62% 0.15 52)",
        },
        charcoal: {
          50: "oklch(97% 0.006 75)",
          100: "oklch(93% 0.012 75)",
          700: "oklch(30% 0.03 30)",
          800: "oklch(22% 0.025 30)",
          900: "oklch(14% 0.025 30)",
        },
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
