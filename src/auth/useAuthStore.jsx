import { create } from "zustand";


const useAuthStore = create((set) => ({

    token: localStorage.getItem("accestoken"),
    setToken: (newToken) => {
        set({
            token: newToken
        });
        localStorage.setItem("accestoken", newToken);

    },
    logout: () => {
        set({
            token: null
        });
        localStorage.removeItem("accestoken");
    },

}));

export default useAuthStore;