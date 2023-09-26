import { RouterProvider } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { useTheme } from "./Context/ThemeContext";
import routers from "./routes/Routers";
import { Toaster } from "react-hot-toast";

function App() {
  const { isDark } = useTheme();
  return (
    <div
      className={`min-h-screen min-w-full ${
        isDark ? "bg-darkBg text-white" : "bg-white text-black"
      }`}
    >
      <RouterProvider router={routers} />
      <Toaster />
      {/* <ReactTooltip /> */}
    </div>
  );
}

export default App;
