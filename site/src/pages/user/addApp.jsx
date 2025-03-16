import React from 'react';
import {Box, Button, Container, TextField, Typography} from "@mui/material";

const AddApp = () => {
	return (
		<Box sx={styles.main}>
			<Container>
				<Box sx={styles.b1}>
					<Box>
						<Box component="img" src="/add/addImage.png"/>
					</Box>

					<Box>
						<TextField sx={styles.form1}  variant="standard" placeholder="Название приложения" />
					</Box>
				</Box>

				<Box sx={styles.b2} >

					<Box  sx={styles.b2Item}>
						оценка
						отзывы
					</Box>

					<Box sx={styles.line}/>

					<Box sx={styles.b2Item}>
						Количество скачиваний
					</Box>

					<Box sx={styles.line}/>

					<Box sx={styles.b2Item}>
						Возраст огр.
					</Box>

				</Box>


				<Box sx={styles.b3} >
					<Box>
						<Box component="img" src="/add/addImage2.png"/>
					</Box>
					<Box>
						<Box component="img" src="/add/addImage2.png"/>
					</Box>
					<Box>
						<Box component="img" src="/add/addImage2.png"/>
					</Box>
					<Box>
						<Box component="img" src="/add/addImage2.png"/>
					</Box>

				</Box>

				<Box mt="30px" >
					<Typography component="h2" sx={styles.h2}>Описание</Typography>

					<TextField
						sx={styles.form2}
						variant="standard"
						placeholder="Описание продукта"
						multiline
						minRows={1}
						maxRows={6}
						fullWidth
					/>
				</Box>
				<Box mt="30px" >
					<Typography component="h2" sx={styles.h2}>Последнее обновление</Typography>
					<TextField
						sx={styles.form2}
						variant="standard"
						placeholder="Последнее обновление продукта"
						multiline
						minRows={1}
						maxRows={6}
					/>
				</Box>

				<Box mt="30px" >
					<Typography component="h2" sx={styles.h2}>Оценка и количество оценок</Typography>
					<Box>
						<TextField
							sx={styles.form2}
							variant="standard"
							placeholder="Оценка"
						/>
					</Box>
					<Box mt="20px" >
						<TextField
							sx={styles.form2}
							variant="standard"
							placeholder="Количество оценок"
						/>
					</Box>

				</Box>

				<Box mt="30px" >
					<Typography component="h2" sx={styles.h2}>Отзывы</Typography>
					<Box>
						<TextField
							sx={styles.form2}
							variant="standard"
							placeholder="Автор"
						/>
					</Box>
					<Box>
						<TextField
							sx={styles.form2}
							variant="standard"
							placeholder="Дата отзыва"
						/>
					</Box>
					<Box>
						<TextField
							sx={styles.form2}
							variant="standard"
							placeholder="Последнее обновление продукта"
							multiline
							minRows={1}
							maxRows={6}
						/>
					</Box>


				</Box>

				<Box mt="30px" >
					<Typography component="h2" sx={styles.h2}>Новое в приложении</Typography>

					<TextField
						sx={styles.form2}
						variant="standard"
						placeholder="Описание"
						multiline
						minRows={1}
						maxRows={6}
						fullWidth
					/>
				</Box>

				<Box mt="30px" >
					<Typography component="h2" sx={styles.h2}>Похожие приложения</Typography>
				</Box>

				<Box >
					<Button color="secondary" variant="contained" sx={styles.button}>Создать</Button>

				</Box>
			</Container>
		</Box>
	);
};

const styles = {
	button:{
		width: "100%",
		height: "48px",
		color: "white",
		borderRadius: "15px",
		fontWeight: 600,
		fontSize: "16px",
		textTransform: "none",
	},
	h2: {
		fontSize: '32px',
		fontWeight: 'medium',
		mb: "18px"
	},

	b3:{
		display: 'flex',
		pt: '10px',
		gap: '20px',
		justifyContent: 'space-between',
	},
	b2:{
		display: 'flex',
		pt: '10px',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	b2Item: {
		flexGrow: 1,
		textAlign: 'center',
	},
	line:{
		height: '36px',
		borderRight: '1px solid #CECFCF'
	},


	form1: {
		"& .MuiInputBase-root": {
			fontFamily: "'Inter', sans-serif !important",
			fontSize: "32px !important",
			fontWeight: 600, // Semibold
		},
		"& .MuiInputBase-input": {
			color: "#8E8F8F", // Обычный текст 100%
			fontFamily: "'Inter', sans-serif !important",
			fontSize: "32px !important",
			fontWeight: 600,
		},
		"& .MuiInputBase-input::placeholder": {
			color: "rgba(30, 32, 32, 0.5)", // Плейсхолдер 50%
			fontWeight: 600,
		},

		"& .MuiInput-underline:before": {
			borderBottom: "1px solid rgba(93, 96, 96, 0.3)", // Нижняя линия 5D6060 30%
		},
		"& .MuiInput-underline:hover:before": {
			borderBottom: "1px solid rgba(93, 96, 96, 0.5)", // Чуть темнее при наведении
		},
		"& .MuiInput-underline:after": {
			borderBottom: "1px solid #5D6060", // Цвет линии при фокусе
		},
},

	form2: {
		"& .MuiInputBase-root": {
			fontFamily: "'Inter', sans-serif !important",
			fontSize: "20px !important",
			fontWeight: 600, // Semibold
		},
		"& .MuiInputBase-input": {
			color: "#8E8F8F", // Обычный текст 100%
			fontFamily: "'Inter', sans-serif !important",
			fontSize: "20px !important",
			fontWeight: 600,
		},
		"& .MuiInputBase-input::placeholder": {
			color: "rgba(30, 32, 32, 0.5)", // Плейсхолдер 50%
			fontWeight: 600,
		},

		"& .MuiInput-underline:before": {
			borderBottom: "1px solid rgba(93, 96, 96, 0.3)", // Нижняя линия 5D6060 30%
		},
		"& .MuiInput-underline:hover:before": {
			borderBottom: "1px solid rgba(93, 96, 96, 0.5)", // Чуть темнее при наведении
		},
		"& .MuiInput-underline:after": {
			borderBottom: "1px solid #5D6060", // Цвет линии при фокусе
		},
	},

	b1:{
		display: 'flex',
		pt: '112px',
		gap: '50px',
	},
	main: {
		minHeight: '100vh',
		pb: '100px',
		fontFamily: "'Inter', sans-serif",
		background: '#fff',
		color: '#000',

	},

}

export default AddApp;