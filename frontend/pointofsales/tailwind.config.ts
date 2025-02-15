import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundColor: {
        backdrop: "rgba(0,0,0,0.3)",
        outOfStock: "rgba(0,0,0,0.5)",
      },
      spacing: {
        "50%": "50%",
      },
    },
  },
  plugins: [],
} satisfies Config;
