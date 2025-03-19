import React, { useState } from "react";
import { Box, Button, TextField, Typography, IconButton, Rating } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

import { styles } from "./../css/addCss.js";
import { formatDate } from "../../../component/func.js";

const ReviewsAdder = ({ reviews, setReviews }) => {
	const [review, setReview] = useState({ name: "", text: "", data: "", stars: 0 });

	const handleAddReview = () => {
		if (!review.name || !review.text || !review.data) return;
		setReviews([...reviews, review]);
		setReview({ name: "", text: "", data: "", stars: 0 }); // Очистить поле после добавления
	};

	const handleDeleteReview = (index) => {
		const updatedReviews = reviews.filter((_, i) => i !== index); // Удаляем отзыв по индексу
		setReviews(updatedReviews);
	};

	// Обработка изменения порядка при DnD
	const handleDragEnd = (result) => {
		if (!result.destination) return;

		const updatedReviews = Array.from(reviews);
		const [removed] = updatedReviews.splice(result.source.index, 1);
		updatedReviews.splice(result.destination.index, 0, removed);

		setReviews(updatedReviews);
	};

	return (
		<Box mt="30px">
			<Typography component="h2" sx={styles.h2}>
				Отзывы
			</Typography>

			<DragDropContext onDragEnd={handleDragEnd}>
				<Droppable droppableId="reviews-list" direction="vertical">
					{(provided) => (
						<Box
							ref={provided.innerRef}
							{...provided.droppableProps}
							sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
						>
							{reviews.map((r, index) => (
								<Draggable key={index} draggableId={`review-${index}`} index={index}>
									{(provided) => (
										<Box
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											display="flex"
											alignItems="center"
											justifyContent="space-between"
											mt="10px"
											p="10px"
											border="1px solid #ddd"
											borderRadius="8px"
											sx={{ backgroundColor: "white" }}
										>
											<Box>
												<Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
													<Typography variant="subtitle1" fontWeight="bold">
														{r.name}
													</Typography>
													<Typography>{formatDate(r.data)}</Typography>
												</Box>
												<Rating sx={styles.stars} value={r.stars} readOnly size="small" />
												<Typography variant="body2">{r.text}</Typography>
											</Box>
											<IconButton color="error" onClick={() => handleDeleteReview(index)}>
												<DeleteIcon />
											</IconButton>
										</Box>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</Box>
					)}
				</Droppable>
			</DragDropContext>

			<Box display="flex" flexDirection="column" gap={2} mt="10px">
				<TextField
					variant="standard"
					label="Имя"
					value={review.name}
					onChange={(e) => setReview({ ...review, name: e.target.value })}
				/>
				<TextField
					variant="standard"
					label="Текст отзыва"
					multiline
					maxRows={6}
					value={review.text}
					onChange={(e) => setReview({ ...review, text: e.target.value })}
				/>
				<TextField
					variant="standard"
					label="Дата"
					type="date"
					InputLabelProps={{ shrink: true }}
					value={review.data}
					onChange={(e) => setReview({ ...review, data: e.target.value })}
				/>
				<Box>
					<Typography sx={{ fontSize: "16px", fontWeight: "500" }}>Оценка</Typography>
					<Rating
						sx={styles.stars}
						value={review.stars}
						onChange={(e, newValue) => setReview({ ...review, stars: newValue })}
					/>
				</Box>
				<Box>
					<Button
						color="secondary"
						sx={styles.button2}
						variant="contained"
						onClick={handleAddReview}
					>
						Добавить
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default ReviewsAdder;