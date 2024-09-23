import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store } from "./_redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
 {/* <StrictMode> */}
 
 <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Suspense>
  {/* </StrictMode> */}
  </Provider>
);


export function Loading () {
  return <div>Hello there</div>
}