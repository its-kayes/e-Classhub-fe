import { Context, createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const OpenSettingContext: Context<NonNullable<unknown>> = createContext(
  {}
);

interface OpenSettingProviderProps {
  children: React.ReactNode; // Define the type of children prop
}

const OpenSettingProvider = ({ children }: OpenSettingProviderProps) => {
  const [openSetting, setOpenSetting] = useState(false);
  const value = { openSetting, setOpenSetting };

  return (
    <OpenSettingContext.Provider value={value}>
      {children}
    </OpenSettingContext.Provider>
  );
};

OpenSettingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useOpenSetting = () => {
  const openSetting = useContext(OpenSettingContext);
  return openSetting;
};

export default OpenSettingProvider;
