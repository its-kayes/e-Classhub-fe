import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store/app/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import ThemeProvider from "./Context/ThemeContext.tsx"; // Import ThemeProvider, not ThemeContext
import OpenSettingProvider from "./Context/OpenSettingContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <OpenSettingProvider>
            <App />
          </OpenSettingProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
