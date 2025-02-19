import React, { createContext, useState, ReactNode } from "react";

export interface AppContextProps {
  titleId: string;
  setTitleId: (titleId: string) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [titleId, setTitleId] = useState<string>("navigation.defaultMessage");

  return (
    <AppContext.Provider
      value={{
        titleId,
        setTitleId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
