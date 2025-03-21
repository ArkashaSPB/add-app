import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {getAppByUserAPI} from "../../api/siteAPI.js";
import EditIcon from "@mui/icons-material/Edit";

const User = () => {

	const [apps, setApps] = useState([])

	const  getFunc = ()  => {
		getAppByUserAPI().then(data => {
			setApps(data)
		})
	}

	useEffect(() => {
		getFunc()
	}, [])
	console.log(apps)

	return (
		<Container sx={{pt: 2, color:'white'}}>
			<Button sx={{
				width: "100%",
				height: "48px",
				color: "white",
				borderRadius: "15px",
				fontWeight: 600,
				fontSize: "16px",
				textTransform: "none"
			}} variant="contained" color="primary" component={NavLink} to="/add-app">Создать новое приложение</Button>

			<Box>
				<Typography  component="h2"  sx={{
					mt: 2, mb: 2, fontSize: '32px', fontWeight: '700',
				}}>Мои приложения</Typography>
				{apps.length > 0 && apps.map((app, index) =>
				<Box key={index}
					sx={{
						mb: 3, display: 'flex', justifyContent: 'space-between',
					}}
				>
					<Box sx={{
						fontSize: {xs: '12px', md:"20px" },
						fontWeight: 'bold',
					}}>{app.name}</Box>
					<Box
						sx={{display: 'flex', gap: 1, alignItems: 'center'}}
					>

						<Button color="warning" variant="contained" sx={{
							height: {xs: 'auto', md:"48px" },
							color: "white",
							borderRadius: "15px",
							fontWeight: 700,
							fontSize:  {xs: '12px', md:"16px" },
							textTransform: "none",
						}} component={NavLink} to={`/edit-app/${app.id}`}><EditIcon /></Button>

						<Button variant="contained" sx={{
							height: {xs: 'auto', md:"48px" },
							color: "white",
							borderRadius: "15px",
							fontWeight: 700,
							fontSize:  {xs: '12px', md:"16px" },
							textTransform: "none",
						}} component={NavLink} to={`/app/${app.id}`}>Предпросмотр</Button>
					</Box>


				</Box>
				)}


			</Box>

		</Container>
	);
};

export default User;