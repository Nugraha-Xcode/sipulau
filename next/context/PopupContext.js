import React from "react";

const PopupContext = React.createContext({});

export const PopupProvider = PopupContext.Provider;
export const PopupConsumer = PopupContext.Consumer;
export default PopupContext;
