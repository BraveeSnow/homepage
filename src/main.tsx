import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import { ChakraProvider } from "@chakra-ui/react"
import { ThemeProvider } from "next-themes"
import system from "./theme.ts"

import App from "./App.tsx"
import Navbar from "./components/Navbar.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <ThemeProvider attribute={"class"} disableTransitionOnChange>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" Component={App} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ChakraProvider>
  </StrictMode>,
)
