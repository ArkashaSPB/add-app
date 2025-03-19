import React from "react";
import { Box, Typography, LinearProgress, Rating } from "@mui/material";

const ratingData = {
	average: 3.1,
	totalReviews: "2,81 тыс.",
	stars: [
		{ stars: 5, value: 60 },
		{ stars: 4, value: 20 },
		{ stars: 3, value: 10 },
		{ stars: 2, value: 5 },
		{ stars: 1, value: 60 },
	],
};

const RatingBlock = ({rating, count}) => {
	return (
		<Box sx={styles.container}>
			{/* Средний рейтинг */}
			<Box sx={styles.ratingBox}>
				<Typography variant="h2" sx={styles.averageRating}>
					{rating}
				</Typography>
				<Rating value={parseFloat(rating)} precision={0.1} readOnly sx={styles.stars} />

				<Typography sx={styles.reviewCount}>{count} отзывов</Typography>
			</Box>

			{/* Гистограмма отзывов */}
			<Box sx={styles.histogram}>
				{ratingData.stars.map((item, index) => (
					<Box key={index} sx={styles.row}>
						<Typography sx={styles.starNumber}>{item.stars}</Typography>
						<LinearProgress
							variant="determinate"
							value={item.value}
							sx={{
								flex: 1,
								height: 10,
								borderRadius: 5,
								backgroundColor: "#ddd",
								"& .MuiLinearProgress-bar": {
									backgroundColor: "#2e7d32", // Цвет полосы рейтинга
								},
							}}
						/>
					</Box>
				))}
			</Box>
		</Box>
	);
};

const styles = {
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "20px",
	},
	ratingBox: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	averageRating: {
		fontSize: "48px",
		fontWeight: "bold",
	},
	stars: {
		fontSize: "24px",
		color: "#2e7d32",
	},
	reviewCount: {
		color: "gray",
		fontSize: "14px",
	},
	histogram: {
		display: "flex",
		flexDirection: "column",
		gap: "5px",
		width: "100%",
	},
	row: {
		display: "flex",
		alignItems: "center",
		gap: "8px",
	},
	starNumber: {
		width: "15px",
		fontSize: "14px",
		fontWeight: "medium",
	},
};

export default RatingBlock;
