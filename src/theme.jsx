import { createTheme } from "@mui/material";
import themeStore from "./auth/useThemeStore";


const gettheme = () => {
    const mode = themeStore((state) => state.mode);
    return createTheme({
    palette: {
        mode,
        text: {
            primary: mode === "light" ? "#000000" : "#ffffffff",
            secondary: mode === "light" ? "#666666" : "#ffffff",
        },
    },
    }
);
}
export default gettheme;