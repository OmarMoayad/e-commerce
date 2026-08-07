import { create } from "zustand";


const themeStore = create((set) => ({

    mode: "light",
    toggleTheme: () => {
        set((state) => ({
            mode: state.mode === "light" ? "dark" : "light"
        }));
    },
}));

export default themeStore;
