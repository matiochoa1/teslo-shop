import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { TesloApp } from "./TesloApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TesloApp />
  </StrictMode>,
);
