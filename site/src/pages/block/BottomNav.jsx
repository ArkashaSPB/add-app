import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AppsIcon from "@mui/icons-material/Apps";
import MovieIcon from "@mui/icons-material/Movie";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const BottomNav = () => {
	const [value, setValue] = useState(1);

	return (
		<Paper
			sx={{
				position: "fixed",
				bottom: 0,
				left: 0,
				right: 0,
				boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
				zIndex: 99,
			}}
			elevation={3}
		>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => setValue(newValue)}
			>
				<BottomNavigationAction label="Игры" icon={<SportsEsportsIcon />} />
				<BottomNavigationAction label="Приложения" icon={<AppsIcon />} />
				<BottomNavigationAction label="Фильмы" icon={<MovieIcon />} />
				<BottomNavigationAction label="Книги" icon={<MenuBookIcon />} />
				<BottomNavigationAction label="Детям" icon={<StarBorderIcon />} />
			</BottomNavigation>
		</Paper>
	);
};

export default BottomNav;
