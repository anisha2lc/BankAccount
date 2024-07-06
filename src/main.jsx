import React from "react";
import ReactDOM from "react-dom/client";
import App from "./container/App.jsx";
import "./assets/scss/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ThemeProvider from "./components/ThemeProvider.jsx";
import { ToastContainer } from "react-toastify";
import ErrorBoundaryComponent from "./components/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition="Bounce"
          />
          <ErrorBoundaryComponent>
            <App />
          </ErrorBoundaryComponent>
          <ToastContainer />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
