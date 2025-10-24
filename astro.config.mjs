import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// Astro 5 fix: correct passthrough service import
import { passthroughImageService } from "astro/assets/services"

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [
      {
        provider: "local",
        name: "InterLocal",
        cssVariable: "--font-inter",
        variants: [
          { weight: 400, style: "normal", src: ["./src/assets/fonts/Inter-Regular.woff2"] },
          { weight: 600, style: "normal", src: ["./src/assets/fonts/Inter-SemiBold.woff2"] },
          { weight: 700, style: "normal", src: ["./src/assets/fonts/Inter-Bold.woff2"] }
        ]
      },
      {
        provider: "local",
        name: "InterLocalDisplay",
        cssVariable: "--font-inter-display",
        variants: [
          { weight: 400, style: "normal", src: ["./src/assets/fonts/InterDisplay-Regular.woff2"] },
          { weight: 500, style: "normal", src: ["./src/assets/fonts/InterDisplay-Medium.woff2"] },
          { weight: 600, style: "normal", src: ["./src/assets/fonts/InterDisplay-SemiBold.woff2"] }
        ]
      }
    ]
  },
  // Fixed image setup for Astro 5.11+
  image: {
    service: passthroughImageService(),
  },
})
