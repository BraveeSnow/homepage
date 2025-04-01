import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    body: {
      background: "background",
    },
  },
  theme: {
    tokens: {
      colors: {
        // dark colors
        background: { value: "#2e3440" },
        surface0: { value: "#3b4252" },

        // blues
        accent: { value: "#88c0d0" },
      },
      fonts: {
        body: { value: "Space Grotesk, sans-serif" },
      },
    },
  },
  strictTokens: true,
})

export default createSystem(defaultConfig, config)
