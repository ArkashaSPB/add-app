import {$host, $authHost} from "./index.js";

export const authAPI = async (mas) => {
	const {data} = await $host.post(`u/auth`,mas )
	return data
}

export const regAPI = async (mas) => {
	const {data} = await $host.post(`u/reg`, mas)
	return data
}

export const checkAPI = async () => {
	const {data} = await $authHost.get(`u/check`)
	return data
}





