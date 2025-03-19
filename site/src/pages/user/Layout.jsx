import React from 'react';
import {Box, Button, Container} from "@mui/material";
import {userStore} from "../../store/userStore.js";
import {NavLink, useNavigate} from "react-router-dom";



const Layout = ({children}) => {
	const navigate = useNavigate();
	const { user, logout, checkAuth} = userStore();
	return (
		<>
			<Container>
				<Box sx={{display: 'flex', justifyContent: 'space-between', py: 2 }}>
					<Box>
						<Button component={NavLink} to="/user"  sx={{
							color:'white',
							fontSize: '16px',
						}}>Профиль</Button>
					</Box>
					<Box>
						<Button component="a" sx={{
							color:'white',
							fontSize: '16px',
							textDecoration: 'underline',
						}} onClick={()=>logout(navigate)}>Выйти</Button>
					</Box>

				</Box>
			</Container>

			{children}
		</>
	);
};

export default Layout;