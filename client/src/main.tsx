import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === "production") disableReactDevTools();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RecoilRoot>
);
