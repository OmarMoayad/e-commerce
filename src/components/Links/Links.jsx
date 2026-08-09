import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useAuthStore from "../../auth/useAuthStore";
import themeStore from "../../auth/useThemeStore";

const navStyle = {
    color: "text.primary",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "0.78rem",
    fontWeight: 500,
    letterSpacing: "2px",
    position: "relative",
    transition: ".3s",
    "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        bottom: -8,
        width: 0,
        height: "2px",
        backgroundColor: "text.primary",
        transition: ".3s",
    },

    "&:hover::after": {
        width: "100%",
    },

    "&.active::after": {
        width: "100%",
    },
};


export default function Links() {
    const token = useAuthStore((state) => state.token);
    const logout = useAuthStore((state) => state.logout);
    const { t } = useTranslation();


    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <>
            <Link component={RouterLink} to="/" underline="none" sx={navStyle}>
                {t("Home")}
            </Link>

            <Link component={RouterLink} to="/products" underline="none" sx={navStyle}>
                {t("Shop")}
            </Link>

            {token && (
                <Link component={RouterLink} to="/cart" underline="none" sx={navStyle}>
                    {t("Cart")}
                </Link>
            )}

            {!token ? (
                <>
                    <Link component={RouterLink} to="/login" underline="none" sx={navStyle}>
                        {t("Login")}
                    </Link>

                    <Link
                        component={RouterLink}
                        to="/register"
                        underline="none"
                        sx={navStyle}
                    >
                        {t("Register")}
                    </Link>
                </>
            ) : (
                <Link underline="none" sx={navStyle} onClick={handleLogout}>
                    {t("Logout")}
                </Link>
            )}
        </>
    )
};
