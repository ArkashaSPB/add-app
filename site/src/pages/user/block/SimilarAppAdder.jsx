import React, { useState } from "react";
import {Box, TextField, Button, Typography, useMediaQuery, useTheme} from "@mui/material";
import SingleImageUploader from "./SingleImageUploader";
import { styles } from "./../css/addCss.js";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const url = import.meta.env.VITE_IMG;

const SimilarAppAdder = ({ similarApps, setSimilarApps }) => {
	const [similarApp, setSimilarApp] = useState({
		img: "",
		name: "",
		author: "",
	});
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md")); // md = 900px

	console.log(isMobile)

	const handleAddSimilarApp = () => {
		if (similarApp.name && similarApp.author) {
			setSimilarApps([...similarApps, similarApp]);
			setSimilarApp({ img: "", name: "", author: "" }); // Очистка полей после добавления
		}
	};

	const handleRemoveSimilarApp = (index) => {
		const updatedApps = similarApps.filter((_, i) => i !== index);
		setSimilarApps(updatedApps);
	};

	// Функция изменения порядка массива при перетаскивании
	const handleDragEnd = (result) => {
		if (!result.destination) return;

		const updatedApps = Array.from(similarApps);
		const [removed] = updatedApps.splice(result.source.index, 1);
		updatedApps.splice(result.destination.index, 0, removed);

		setSimilarApps(updatedApps);
	};

	return (
		<Box mt="30px">
			<Typography component="h2" sx={styles.h2}>
				Похожие приложения
			</Typography>
			<Box sx={{display: 'flex', flexDirection:  {xs: 'column', md : 'row'}, gap: 2,  }}>
				{/* Поля для добавления нового приложения */}
				<Box sx={{ display: "flex", alignItems: "center", gap: 2,  }}>
					<Box>
						<SingleImageUploader
							image={similarApp.img}
							onUpload={(filename) => setSimilarApp({ ...similarApp, img: filename })}
						/>
					</Box>

					<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
						<TextField
							sx={{ ...styles.form2, width: 180 }}
							label="Название"
							variant="standard"
							value={similarApp.name}
							onChange={(e) => setSimilarApp({ ...similarApp, name: e.target.value })}
						/>
						<TextField
							sx={{ ...styles.form2, width: 180 }}
							label="Автор"
							variant="standard"
							value={similarApp.author}
							onChange={(e) => setSimilarApp({ ...similarApp, author: e.target.value })}
						/>
						<Button
							color="secondary"
							variant="contained"
							sx={styles.button2}
							onClick={handleAddSimilarApp}
							disabled={!similarApp.name || !similarApp.author}
						>
							Добавить
						</Button>
					</Box>
				</Box>

				{/* Список уже добавленных приложений с Drag and Drop */}
				<DragDropContext onDragEnd={handleDragEnd}>
					<Droppable droppableId="similarApps-droppable"  direction={isMobile ? "vertical" : "horizontal"}>
						{(provided) => (
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-around",
									gap: 4,
									overflowX: "auto",
									maxWidth: "100%",
									flexDirection:  {xs: 'column', md : 'row'},
									mt:{xs: '20px', md : 'none'},

								}}
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
								{similarApps.map((app, index) => (
									<Draggable key={index} draggableId={`app-${index}`} index={index}>
										{(provided) => (
											<Box
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												sx={{
													display: "flex",
													alignItems: "top",
													gap: 2,
													border: "1px solid #ddd", // Для визуализации перемещения
													padding: "8px",
													borderRadius: "8px",
													backgroundColor: "white", // Цвет фона элемента
												}}
											>
												<Box
													component="img"
													src={`${url}${app.img}`}
													alt={app.name}
													sx={{ width: {xs: '55px', md: '150px'}, height: {xs: '55px', md: '150px'}, borderRadius: "10px" }}
												/>
												<Box
													sx={{
														flexGrow: 1,
														display: "flex",
														flexDirection:  {xs: 'column', md : 'row'},
														justifyContent: "space-between",
														gap: 1,
														height: "100%",
													}}
												>
													<Box>
														<Box sx={styles.p2}>{app.name}</Box>
														<Box sx={styles.p2}>{app.author}</Box>
													</Box>
													<Box>
														<Button color="error" onClick={() => handleRemoveSimilarApp(index)}>
															Удалить
														</Button>
													</Box>
												</Box>
											</Box>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</Box>
						)}
					</Droppable>
				</DragDropContext>
			</Box>
		</Box>
	);
};

export default SimilarAppAdder;