// AddApp.jsx
import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { addAppAPI } from "../../api/siteAPI.js";
import { styles } from './css/addCss.js';
import SingleImageUploader from "./block/SingleImageUploader.jsx";
import MultipleImagesUploader from "./block/MultipleImagesUploader.jsx";
import ReviewsAdder from "./block/ReviewsAdder.jsx";
import {Star} from "@mui/icons-material";
import SimilarAppAdder from "./block/SimilarAppAdder.jsx";

const url =  import.meta.env.VITE_IMG;
const AddApp = () => {

	const [massive, setMassive] = useState({
		name: 'Первое',
		img: '1742225330529-f200c5c3141dfb3f.png',
		description: 'sdf\nsad\nsadf\nasfd\nasdf\nasfd\nsda\nsadf',
		description2: '1 2 3 4 5 6 7 8 9 0',
		rating: '3.2', //рейтинг
		review_count: '3', // кол-во отзывов
		downloads: '2', //кол-во скачивание
		age_limit: '12', //возрастное ограничение
		last_update: '2025-03-20', //последнее обновление
		images: [
			'1742225338185-56a6a471c85cf825.jpg',
			'1742225338185-4a20d43cc52adafe.jpg',
			'1742225338185-b1d383db1d3aa081.jpg',
			'1742225338186-873cc21d01d244ab.jpg'
		],
		reviews: [ // отзывы
			{
				name: 'Валера',
				text: 'ыв',
				data: '2025-03-05',
				stars: 2
			},
			{
				name: 'Аркадий',
				text: 'Такой',
				data: '2025-03-05',
				stars: 2
			},
			{
				name: 's',
				text: 's',
				data: '2025-03-12',
				stars: 0
			}
		],
		similar_apps: [ // Похожие приложения
			{
				img: '1742225317438-35598692ef61a2b1.png',
				name: 's',
				author: 's'
			},
			{
				img: '1742225398968-c2ad04ca4fbe810e.jpg',
				name: 'еще одно',
				author: 'Кино'
			}
		]
	});

	// const [massive, setMassive] = useState({
	// 	name: '',
	// 	img: '',
	// 	description: '',
	// 	description2: '',
	// 	rating: '', //рейтинг
	// 	review_count: '', // кол-во отзывов
	// 	downloads: '', //кол-во скачивание
	// 	age_limit: '', //возрастное ограничение
	// 	last_update: '', //последнее обновление
	// 	images: [],
	// 	reviews: [], //отзывы
	// 	similar_apps: [], //Похожие приложения
	// });
	//
	//

	console.log(massive)


	const addFunc = () => {
		addAppAPI(massive)
			.then((res) => console.log('Приложение добавлено:', res))
			.catch((err) => console.error(err));
	};

	return (
		<Box sx={styles.main}>
			<Container>
				<Box sx={styles.b1}>
					<Box>
						{/* Компонент для загрузки основного изображения (massive.img) */}
						<SingleImageUploader
							onUpload={(filename) => setMassive({ ...massive, img: filename })}
							image={massive.img}
						/>
					</Box>
					<Box>
						{/* Поле ввода для названия приложения */}
						<TextField
							sx={styles.form1}
							variant="standard"
							placeholder="Название приложения"
							value={massive.name}
							onChange={(e) => setMassive({ ...massive, name: e.target.value })}
						/>
					</Box>
				</Box>


				<Box sx={styles.b2}>
					<Box sx={styles.b2Item}>
						<Box sx={styles.b2ItemOne} >
							<TextField
								sx={{ ...styles.form2, width: 100 }}
								variant="standard"
								placeholder="Оценка"
								value={massive.rating}

								onChange={(e) => setMassive({ ...massive, rating: e.target.value })}
							/>
							<Star/>
						</Box>
						<Box sx={styles.b2ItemOne}>
							<Typography sx={styles.p}>Отзывы:</Typography>

							<TextField
								sx={{ ...styles.form2, width: 100 }}
								variant="standard"
								placeholder="кол-во"
								value={massive.review_count}
								onChange={(e) => setMassive({ ...massive, review_count: e.target.value })}
							/>
						</Box>
					</Box>

					<Box sx={styles.line}></Box>
					<Box sx={styles.b2Item}>
						<TextField
							sx={styles.form2}
							variant="standard"
							placeholder="Количество скачиваний"
							value={massive.downloads}
							onChange={(e) => setMassive({ ...massive, downloads: e.target.value })}
						/>
					</Box>
					<Box sx={styles.line}></Box>
					<Box sx={styles.b2Item}>
						<TextField
							sx={styles.form2}
							variant="standard"
							placeholder="Возраст орг."
							value={massive.age_limit}
							onChange={(e) => setMassive({ ...massive, age_limit: e.target.value })}

						/>
					</Box>
				</Box>

				{/*	несколько картинок*/}
				<Box mt="30px">
					<MultipleImagesUploader
						images={massive.images}
						setImages={(newImages) => setMassive({ ...massive, images: newImages })}
					/>
				</Box>




				{/*описание  */}
				<Box mt="30px">
					<Typography component="h2" sx={styles.h2}>Описание</Typography>
					<TextField
						sx={styles.form2}
						variant="standard"
						placeholder="Описание продукта"
						multiline
						minRows={1}
						maxRows={6}
						fullWidth
						value={massive.description}
						onChange={(e) => setMassive({ ...massive, description: e.target.value })}
					/>
				</Box>

				{/*описание  */}
				<Box mt="30px">
					<Typography component="h2" sx={styles.h2}>Последнее обновление</Typography>
					<TextField
						variant="standard"
						fullWidth
						label="Последнее обновление продукта"
						type="date"
						InputLabelProps={{ shrink: true }}
						value={massive.last_update}
						onChange={(e) => setMassive({ ...massive, last_update: e.target.value })}
					/>

				</Box>


				{/* Здесь можно добавить аналогичные блоки для reviews, downloads, age_limit, similar_apps и т.д. */}
				{/* Компонент для работы с функцией отзывов */}
				<ReviewsAdder
					reviews={massive.reviews}
					setReviews={(newReviews) =>
						setMassive({ ...massive, reviews: newReviews })
					}
				/>

				{/*описание  */}
				<Box mt="30px">
					<Typography component="h2" sx={styles.h2}>Новое в приложении</Typography>
					<TextField
						sx={styles.form2}
						variant="standard"
						placeholder="Описание"
						multiline
						minRows={1}
						maxRows={6}
						fullWidth
						value={massive.description2}
						onChange={(e) => setMassive({ ...massive, description2: e.target.value })}
					/>
				</Box>

				<SimilarAppAdder
					similarApps={massive.similar_apps}
					setSimilarApps={(apps) =>
						setMassive({ ...massive, similar_apps: apps })
					}
				/>
				<Box mt="30px">
					<Button color="secondary" variant="contained" sx={styles.button} onClick={addFunc}>
						Создать
					</Button>
				</Box>
			</Container>
		</Box>
	);
};

export default AddApp;
