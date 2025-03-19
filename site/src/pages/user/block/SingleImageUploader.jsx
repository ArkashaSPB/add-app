// SingleImageUploader.jsx
import React, {useEffect, useRef, useState} from 'react';
import { Box, Button } from "@mui/material";
import { uploadImgAPI } from "../../../api/siteAPI.js";

const url =  import.meta.env.VITE_IMG;

const SingleImageUploader = ({ onUpload, image }) => {
	const fileInputRef = useRef(null);

	const [put, setPut] = useState(null)

	useEffect(() => {
		image && setPut(url+ image );
	}, [image])

	const handleFileChange = async (e) => {
		const file = e.target.files[0];
		if (!file) return;
		try {
			const data = await uploadImgAPI(file);
			onUpload(data.filename);
		} catch (error) {
			console.error('Ошибка загрузки изображения:', error);
		}
	};

	// При клике на Box вызываем click для скрытого input
	const handleClick = () => {
		fileInputRef.current && fileInputRef.current.click();
	};

	return (
		<div>
			<Box
				onClick={handleClick}
				sx={{
					width: "150px",
					height: "150px",
					borderRadius: "10px",
					position: "relative",
					cursor: "pointer",
					// Если картинка загружена, используем её как фон
					background: image ? "transparent" : "#D9D9D9",
					backgroundImage: image ? `url(${put})`  : "none",
					backgroundSize: "cover",
					backgroundPosition: "center",
					"&::before": image
						? {}
						: {
							content: '""',
							position: "absolute",
							top: "50%",
							left: "50%",
							width: "56px",
							height: "2px",
							backgroundColor: "white",
							transform: "translate(-50%, -50%)",
						},
					"&::after": image
						? {}
						: {
							content: '""',
							position: "absolute",
							top: "50%",
							left: "50%",
							width: "2px",
							height: "56px",
							backgroundColor: "white",
							transform: "translate(-50%, -50%)",
						},
				}}
			/>
			<input
				ref={fileInputRef}
				type="file"
				accept="image/*"
				onChange={handleFileChange}
				style={{ display: 'none' }}
			/>
			{/* Дополнительно можно оставить кнопку для загрузки, если потребуется */}
			{/*<Button variant="contained" onClick={handleClick} sx={{ mt: 1 }}>*/}
			{/*	{image ? "Изменить изображение" : "Загрузить изображение"}*/}
			{/*</Button>*/}
		</div>
	);
};

export default SingleImageUploader;
