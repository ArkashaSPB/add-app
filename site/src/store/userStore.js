import { create } from "zustand";
import axios from "axios";
import {checkAPI} from "../api/siteAPI.js";

export const userStore = create((set) => ({
	user: null, // { id, email }
	loading: true,

	checkAuth: async () => {
		const token = localStorage.getItem("token");
		if (!token) {
			set({ user: null, loading: false });
			return;
		}

		try {
			checkAPI().then(data => {
				if(data){
					set({ user: data, loading: false });
				}else{
					localStorage.removeItem("token");
				}
			}).catch(error => {
				localStorage.removeItem("token");
			})
		} catch (error) {
			localStorage.removeItem("token");
			set({ user: null, loading: false });
		}
	},

	logout: (navigate) => { // Добавляем параметр navigate
		localStorage.removeItem("token");
		set({ user: null });
		if (navigate) navigate("/"); // Перенаправление на главную страницу
	},

}));

// Автоматическая проверка токена при запуске
userStore.getState().checkAuth();
