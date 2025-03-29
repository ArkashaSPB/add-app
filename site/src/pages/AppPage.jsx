import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Box, Button, Typography} from "@mui/material";
import {getAppByIdAPI} from "../api/siteAPI.js";

import PublickPage from "./PublickPage.jsx"; // Основной стиль

const AppPage = () => {

	const [app, setApp] = useState(null)
	const { id } = useParams();
	const navigate = useNavigate();


	const getFunc = () => {
		getAppByIdAPI(id).then(data => {
			setApp(data)
		})
	}

	useEffect(() => {
		getFunc()
	},[])

	const style ={
		button: {

			height: {xs: '16px', md:"48px" },
			color: "white",
			borderRadius: "0px",
			fontWeight: 600,
			fontSize: {xs: '6px', md:"16px" },
			textTransform: "none",
		}
	}

	const copyLinkToClipboard = () => {
		const currentDomain = window.location.origin; // Получаем текущий домен
		const link = `${currentDomain}/public/${id}`; // Формируем ссылку
		navigator.clipboard
			.writeText(link) // Копируем ссылку в буфер обмена
			.then(() => alert("Ссылка успешно скопирована!")) // Уведомление об удачном копировании
			.catch((error) =>
				console.error("Ошибка копирования ссылки: ", error)
			); // Обработка ошибок
	};







	if(!app) return <p>Loading...</p>

	return (
		<>
			<Box sx={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr',
				mb: 2,
			}}>
				<Button
					sx={style.button}
					onClick={copyLinkToClipboard} // Вызов функции копирования
					variant="contained"
				>
					Скопировать ссылку
				</Button>

				<Button
					sx={style.button}
					onClick={() => navigate('/user')}
					variant="contained">Закрыть предосмотр</Button>
			</Box>
			<PublickPage app={app}/>
		</>
	);
};

export default AppPage;



