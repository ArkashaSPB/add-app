import React from "react";
import { Box, Typography, Avatar, Rating, Button, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {formatDate} from "../../component/func.js";

const OtzivBlock = ({ otziv, fontText }) => {
	const styles = {
		container: {
			display: "flex",
			flexDirection: "column",
			gap: "16px",
			maxWidth: "600px",
			margin: "0 auto",
		},
		review: {
			borderBottom: "1px solid #ddd",
			paddingBottom: "16px",
		},
		header: {
			display: "flex",
			alignItems: "center",
			gap: "10px",
		},
		avatar: {
			width: 40,
			height: 40,
			bgcolor: "#4CAF50",
		},
		name: {
			fontWeight: "bold",
			fontSize: fontText,
		},
		dateRow: {
			display: "flex",
			alignItems: "center",
			gap: "8px",
		},
		stars: {
			color: "#2e7d32",
		},
		date: {
			color: "gray",
			fontSize: "10px",
		},
		text: {
			marginTop: "8px",
			fontSize: fontText,
		},
		usefulText: {
			color: "gray",
			fontSize: "0.75rem",
			marginTop: "8px",
		},
		buttons: {
			display: "flex",
			alignItems: "center",
			gap: "10px",
			marginTop: "8px",

		},
		button: {
			textTransform: "none",
			borderRadius: "20px",
			borderColor: "gray",
			color: "black",
			padding: "4px 12px",
		},
	};

	return (
		<Box sx={styles.container}>
			{otziv.map((item, index) => (
				<Box key={index} sx={styles.review}>
					{/* Аватар + имя + меню */}
					<Box sx={styles.header}>
						<Avatar sx={styles.avatar}>{item.name.charAt(0).toUpperCase()}</Avatar>
						<Box sx={{ flex: 1 }}>
							<Typography sx={styles.name}>{item.name}</Typography>
							<Box sx={styles.dateRow}>
								<Rating value={item.stars} readOnly precision={0.5} size="small" sx={styles.stars} />
								<Typography sx={styles.date}>{formatDate(item.data)}</Typography>
							</Box>
						</Box>
						<IconButton>
							<MoreVertIcon />
						</IconButton>
					</Box>

					{/* Текст отзыва */}
					<Typography sx={styles.text}>{item.text}</Typography>

					{/* Количество отметок "полезно" */}
					<Typography sx={styles.usefulText}>
						{Math.floor(Math.random() * 50)} человек отметили этот отзыв как полезный.
					</Typography>

					{/* Кнопки "Да/Нет" */}
					<Box sx={styles.buttons}>
						<Typography sx={{fontSize: '0.75rem'}}>Вам помогла эта информация?</Typography>
						<Button variant="outlined" sx={styles.button}>Да</Button>
						<Button variant="outlined" sx={styles.button}>Нет</Button>
					</Box>
				</Box>
			))}
		</Box>
	);



};

// Функция для форматирования даты



export default OtzivBlock;
