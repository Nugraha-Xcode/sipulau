import { useReducer, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import "tippy.js/dist/tippy.css";

import { AppProvider } from "../context/AppContext";
import { expireTime, changeExpireTime } from "../utils/expireTime";
import Snackbar from "../components/core/Snackbar";
import useToggle from "../utils/useToggle";

import "tailwindcss/tailwind.css";
import "../styles/global.css";
import "../styles/map.css";
import Modal from "../components/modal";
import Login from "../components/Login";
import { useAuth } from "../hooks/useAuth";
import shallow from "zustand/shallow";

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
  const [isLoginModal, toggleLogin] = useToggle();
  const [isLoading, setIsLoading] = useState(true);
  const [authToken, setAuth] = useAuth(
    (state) => [state.authToken, state.setAuth],
    shallow
  );

  const handleSetSnack = (message, messageType) => {
    dispatch({ type: "setSnack", message: message, messageType: messageType });
  };

  const handleResetSnack = () => {
    dispatch({ type: "resetSnack" });
  };

  const getTokenOnReload = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        process.env.NEXT_PUBLIC_DIRECTUS_URL + "/auth/refresh",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          method: "POST",
          credentials: "include",
        }
      );
      const resJson = await res.json();
      if (
        res.status === 200 &&
        resJson?.data?.access_token &&
        resJson.data.expires
      ) {
        setAuth(resJson.data.access_token);
        changeExpireTime(resJson.data.expires);
      }
    } catch (err) {
      setAuth("");
      handleSetSnack(err.message, "error");
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 5);
    }
  };

  const silentRefreshToken = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_DIRECTUS_URL + "/auth/refresh",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          method: "POST",
          credentials: "include",
        }
      );
      const resJson = await res.json();
      if (
        res.status === 200 &&
        resJson?.data?.access_token &&
        resJson.data.expires
      ) {
        setAuth(resJson.data.access_token);
        changeExpireTime(resJson.data.expires);
      } else {
        setAuth("");
      }
    } catch (err) {
      setAuth("");
      handleSetSnack(err.message, "error");
    }
  };

  useEffect(() => {
    if (authToken.length) {
      setTimeout(() => {
        silentRefreshToken();
      }, expireTime - 500);
    }
  }, [authToken]);

  useEffect(() => {
    getTokenOnReload();
  }, []);

  return (
    <AppProvider
      value={{
        handleSetSnack,
        t,
        isAuth: authToken.length,
        isLoginModal,
        toggleLogin,
      }}
    >
      <Component {...pageProps} />
      <Snackbar
        isShowing={state.snack}
        toggle={handleResetSnack}
        text={state.snackMessage}
        type={state.messageType}
      />
      <Modal isShowing={isLoginModal} handleModal={toggleLogin} size='md'>
        <Login toggle={toggleLogin} />
      </Modal>
    </AppProvider>
  );
}

export default appWithTranslation(MyApp);
