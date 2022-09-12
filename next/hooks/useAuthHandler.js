import { useContext } from "react";
import { useAuth } from "./useAuth";
import shallow from "zustand/shallow";
import AppContext from "../context/AppContext";

export const useAuthHandler = () => {
  const { handleSetSnack } = useContext(AppContext);
  const [setAuth] = useAuth((state) => [state.setAuth], shallow);

  const handleLogout = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_DIRECTUS_URL + "/auth/logout",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          method: "POST",
          credentials: "include",
        }
      );
      if (res.status === 200) {
        setAuth("");
      } else if (res.status >= 400 && res.status <= 499) {
        const resJson = await res.json();
        throw new Error(resJson.errors[0].message);
      } else {
        throw new Error("Internal server error");
      }
    } catch (err) {
      handleSetSnack(err.message, "error");
    }
  };
  return { handleLogout };
};
