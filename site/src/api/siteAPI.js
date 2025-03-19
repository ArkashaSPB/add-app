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



export const uploadImgAPI = async (file) => {
	const formData = new FormData();
	formData.append('image', file); // 'image' — это имя поля, которое ожидается на сервере

	const { data } = await $host.post('upload', formData, {
		headers: {
			'Content-Type': 'multipart/form-data', // Указываем, что отправляем форму с файлом
		},
	});
	return data;
};

export const uploadImgsAPI = async (files) => {
	const formData = new FormData();
	// Добавляем каждый файл в форму с именем поля 'images'
	files.forEach(file => {
		formData.append('images', file);
	});

	const { data } = await $host.post('uploads', formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return data;
};


//app

export const allAppAPI = async () => {
	const {data} = await $host.get(`app` )
	return data
}

export const getAppByUserAPI = async () => {
	const {data} = await $authHost.get(`app/user`)
	return data
}

export const getAppByIdAPI = async (id) => {
	const {data} = await $authHost.get(`app/`+id)
	return data
}


export const addAppAPI = async (mas) => {
	const {data} = await $authHost.post(`app`, mas)
	return data
}


export const editAppAPI = async (id, mas) => {
	const {data} = await $authHost.put(`app/` + id, mas)
	return data
}

export const deleteAppAPI = async (id) => {
	const {data} = await $authHost.delete(`app/` + id)
	return data
}




