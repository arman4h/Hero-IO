import React, { createContext, useContext, useMemo, useState } from "react";
import appsJson from "../data/App.json";
import { getInstalledAppIds, installApp, uninstallApp } from "../utils/installation";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [apps] = useState(appsJson);
  const [installedIds, setInstalledIds] = useState(() => getInstalledAppIds());

  const handleInstall = (appId) => {
    const installedNow = installApp(appId);
    setInstalledIds(getInstalledAppIds());
    return installedNow;
  };

  const handleUninstall = (appId) => {
    uninstallApp(appId);
    setInstalledIds(getInstalledAppIds());
  };

  const contextValue = useMemo(
    () => ({
      apps,
      installedIds,
      isInstalled: (appId) => installedIds.includes(Number(appId)),
      installById: handleInstall,
      uninstallById: handleUninstall,
    }),
    [apps, installedIds]
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
}
