import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

import App from "./App.tsx";
import Navbar from "./components/Navbar.tsx";
import "./style.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={App} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
