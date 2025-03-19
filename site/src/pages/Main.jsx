import React, { useState } from 'react';
import { Box, Button, Container, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from "@mui/material";
import { userStore } from "../store/userStore.js";
import {Link, useNavigate} from "react-router-dom";
import {authAPI, regAPI} from "../api/siteAPI.js";
import {toast} from "react-toastify";

const Main = () => {
	const navigate = useNavigate();


	const { user, logout, checkAuth} = userStore();
	const [email, setEmail] = useState('')
	const [pass, setPass] = useState('')

	// Состояния для диалогов
	const [openLogin, setOpenLogin] = useState(false);
	const [openRegister, setOpenRegister] = useState(false);

	// Открытие / закрытие модалок
	const handleOpenLogin = () => setOpenLogin(true);

	const handleCloseLogin = () => {
		setOpenLogin(false);
		setEmail('')
		setPass('')

	}
	const handleOpenRegister = () => setOpenRegister(true);

	const handleCloseRegister = () => {
		setOpenRegister(false);
		setEmail('')
		setPass('')
	}

	const authPath  = () => {

		authAPI({email, pass}).then(data => {
			if(data.success){
				localStorage.setItem("token", data.token);
				checkAuth()
				handleCloseLogin()

			}else{
				toast.error(data.message)
			}
		}).catch(error => {
			console.log('Сервер не доступен')
		})
	}

	const regFunc = () => {
		regAPI({email, pass}).then(data => {
			if(data.success){
				localStorage.setItem("token", data.token);
				checkAuth()
				handleCloseRegister()
			}else{
				toast.error(data.message)
			}
		})
	}


	return (
		<>
			<Box sx={styles.container}>
				<Box sx={styles.leftBlur}></Box>
				<Box sx={styles.rightBlur}></Box>
				<Container sx={styles.fon}>
					<Box flexGrow={1}>
						<Box sx={styles.t1}>Создай приложение в плей маркет</Box>
						<Box sx={styles.t2}>в несколько Кликов</Box>
						<Box sx={styles.buttonBlock}>
							{user && user.id ? (
								<>
									<Button component={Link} to="/user" sx={styles.button} variant="contained">
										Кабинет
									</Button>
									<Button onClick={()=>logout(navigate)} sx={styles.button} color="error" variant="contained">
										Выйти
									</Button>
								</>
							) : (
								<>
									<Button onClick={handleOpenLogin} sx={styles.button} variant="contained">
										Авторизация
									</Button>
									<Button onClick={handleOpenRegister} sx={styles.button} variant="contained">
										Регистрация
									</Button>
								</>
							)}
						</Box>
					</Box>
				</Container>
			</Box>

			{/* Модалка Авторизации */}
			<Dialog open={openLogin} onClose={handleCloseLogin}>
				<DialogTitle>Авторизация</DialogTitle>
				<DialogContent >
					<Box sx={styles.bf}>
						<TextField
							value={email} onChange={(e)=> setEmail(e.currentTarget.value)}
							autoFocus  label="Email" type="email"  />
						<TextField
							value={pass} onChange={(e)=> setPass(e.currentTarget.value)}
							label="Пароль" type="password"  />
					</Box>

				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseLogin}>Отмена</Button>
					<Button sx={styles.button} onClick={authPath} variant="contained" color="primary">Войти</Button>
				</DialogActions>
			</Dialog>

			{/* Модалка Регистрации */}
			<Dialog  open={openRegister} onClose={handleCloseRegister}>
				<DialogTitle>Регистрация</DialogTitle>
				<DialogContent>
					<Box sx={styles.bf}>
					<TextField value={email} onChange={(e)=> setEmail(e.currentTarget.value)}
						 label="Email" type="email" fullWidth />
					<TextField
						value={pass} onChange={(e)=> setPass(e.currentTarget.value)}
						 label="Пароль" type="password" fullWidth />
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseRegister}>Отмена</Button>
					<Button onClick={regFunc} sx={styles.button}  variant="contained" color="primary">Зарегистрироваться</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

// Стили
const styles = {
	bf:{
		display: 'flex', flexDirection: 'column', gap: 2, my:2
	},
	buttonBlock: {
		mt: '10px',
		display: "flex",
		gap: "20px",
		justifyContent: "flex-end",
	},
	button: {
		width: "269px",
		height: "48px",
		color: "white",
		borderRadius: "15px",
		fontWeight: 600,
		fontSize: "16px",
		textTransform: "none",
	},
	t1: {
		fontSize: "32px",
		textTransform: "uppercase",
		fontWeight: '800',
	},
	t2: {
		fontSize: "32px",
		textTransform: "uppercase",
		fontWeight: '600',
		fontStyle: "italic",
	},
	fon: {
		width: "100%",
		height: "100%",
		backgroundImage: 'url("/fon.png")',
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left center",
		textAlign: "right",
		color: "#fff",
		display: 'flex',
		alignItems: "center",
	},
	container: {
		position: 'relative',
		overflowY: 'visible',
		backgroundSize: 'cover',
		height: '100vh',
	},
	leftBlur: {
		position: 'absolute',
		width: { xs: '40%', md: '40%' },
		height: { xs: '50%', md: '50%' },
		left: '0',
		top: '50%',
		transform: 'translate(0%, -50%)',
		background: 'rgba(73, 184, 132, 0.15)',
		filter: 'blur(10000px)',
		borderRadius: '50%',
	},
	rightBlur: {
		position: 'absolute',
		width: { xs: '40%', md: '40%' },
		height: { xs: '50%', md: '50%' },
		right: '0',
		top: '50%',
		transform: 'translate(0%,-50%)',
		background: 'rgba(255,255,255,0.15)',
		filter: 'blur(10000px)',
		borderRadius: '50%',
	},
};

export default Main;
