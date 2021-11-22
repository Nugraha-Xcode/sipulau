import { useReducer } from "react";
import { useRouter } from "next/router";

import { AppProvider } from "../context/AppContext";
import Snackbar from "../components/core/Snackbar";

import "tailwindcss/tailwind.css";
import "../styles/global.css";
import "../styles/map.css";

const initialValue = {
  snack: false,
  snackMessage: "",
  messageType: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setSnack":
      return {
        snack: true,
        snackMessage: action.message,
        messageType: action.messageType,
      };
    case "resetSnack":
      return { snack: false, snackMessage: "", messageType: "" };
    default:
      throw new Error();
  }
};

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const router = useRouter();
  const t = router.locale === "en" ? "en" : "id";

  const handleSetSnack = (message, messageType) => {
    dispatch({ type: "setSnack", message: message, messageType: messageType });
  };

  const handleResetSnack = () => {
    dispatch({ type: "resetSnack" });
  };

  return (
    <AppProvider value={{ handleSetSnack, t }}>
      <Component {...pageProps} />
      <Snackbar
        isShowing={state.snack}
        toggle={handleResetSnack}
        text={state.snackMessage}
        type={state.messageType}
      />
    </AppProvider>
  );
}

export default MyApp;
