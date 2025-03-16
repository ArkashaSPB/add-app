import React from 'react';
import {Button, Container} from "@mui/material";
import {NavLink} from "react-router-dom";

const User = () => {
	return (
		<Container sx={{pt: 2}}>
			<Button variant="outlined" component={NavLink} to="/add-app">Добавить</Button>
		</Container>
	);
};

export default User;