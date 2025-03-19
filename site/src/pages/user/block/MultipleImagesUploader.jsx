import React, { useRef } from 'react';
import {Box, Button, IconButton} from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { uploadImgsAPI } from "../../../api/siteAPI.js";
const url = import.meta.env.VITE_IMG;
import DeleteIcon from '@mui/icons-material/Delete';

const MultipleImagesUploader = ({ images, setImages }) => {
	const fileInputRef = useRef(null);

	// При клике на серую область вызываем диалог выбора файлов
	const handleClick = () => {
		fileInputRef.current && fileInputRef.current.click();
	};

	const handleFilesChange = async (e) => {
		const files = Array.from(e.target.files);
		if (!files.length) return;
		try {
			// Загружаем файлы на сервер и получаем массив имён файлов
			const response = await uploadImgsAPI(files);
			console.log(response)
			// Объединяем уже загруженные файлы с новыми (ограничение до 10 штук)
			const updatedImages = [...images, ...response.filenames].slice(0, 10);
			setImages(updatedImages);
		} catch (error) {
			console.error('Ошибка загрузки изображений:', error);
		}
	};

	const onDragEnd = (result) => {
		if (!result.destination) return;
		const reordered = Array.from(images);
		const [removed] = reordered.splice(result.source.index, 1);
		reordered.splice(result.destination.index, 0, removed);
		setImages(reordered);
	};

	const handleDelete = (index) => {
		const updatedImages = images.filter((img, i) => i !== index);
		setImages(updatedImages);
	}



	return (
		<Box sx={{display: 'flex', gap: '10px'}}>
			<Box>
				<Box
					onClick={handleClick}
					sx={{
						width: "235px",
						height: "387px",
						borderRadius: "10px",
						position: "relative",
						cursor: "pointer",
						background: "#D9D9D9",
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						// Псевдоэлементы для крестика (индикатор загрузки)
						"&::before": {
							content: '""',
							position: "absolute",
							top: "50%",
							left: "50%",
							width: "56px",
							height: "2px",
							backgroundColor: "white",
							transform: "translate(-50%, -50%)",
						},
						"&::after": {
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
			</Box>

			{/* Если изображения загружены, отображаем их в списке с сортировкой */}
			{images.length > 0 && (
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="images-droppable" direction="horizontal">
						{(provided) => (
							<Box
								ref={provided.innerRef}
								{...provided.droppableProps}
								sx={{ display: 'flex', gap: '10px', overflowX: 'auto' }}
							>
								{images.map((img, index) => (
									<Draggable key={img} draggableId={img} index={index} >
										{(providedDraggable) => (
											<Box
												ref={providedDraggable.innerRef}
												{...providedDraggable.draggableProps}
												{...providedDraggable.dragHandleProps}
												sx={{
													position: 'relative',
													borderRadius: '10px',
													...providedDraggable.draggableProps.style,
												}}
											>
												<Box component="img"
														 sx={{
															height: '387px',
															 borderRadius: '10px',
														 }}
													src={`${url}${img}`}
													alt={`uploaded-${index}`}
												/>
												<Box sx={{
													position: 'absolute',
													top: '5px',
													right: '5px',
													display: 'flex',
													gap: '5px',
													alignItems: 'center',
													justifyContent: 'center',
													width: '30px',
													height: '30px',
												}}>
													<IconButton color="error" onClick={()=>handleDelete(index)}>
														<DeleteIcon />
													</IconButton>

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
			)}
			{/* Серая область для загрузки изображений */}

			{/* Скрытый input для выбора файлов */}
			<input
				ref={fileInputRef}
				type="file"
				accept="image/*"
				multiple
				onChange={handleFilesChange}
				style={{ display: 'none' }}
				id="multiple-images-input"
			/>



		</Box>
	);
};

export default MultipleImagesUploader;
