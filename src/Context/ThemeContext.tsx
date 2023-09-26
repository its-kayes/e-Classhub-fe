import { FC, ReactNode, createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// export const ThemeContext: Context<NonNullable<unknown>> = createContext({});

export const ThemeContext = createContext({
  isDark: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setIsDark: (isDark: boolean) => {},
});

const ThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isDark, setIsDark] = useState(false);
  // setInterval(() => {
  //   setIsDark(!isDark);
  // }, 2000);
  const value = { isDark, setIsDark };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};

export default ThemeProvider;
