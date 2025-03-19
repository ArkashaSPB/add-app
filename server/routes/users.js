import express from "express";
import {authFunc, checkFunc, regFunc} from "../services/usersFunc.js";
import {checkAuthMiddleware} from "../func/midl.js";

const router = express.Router();

// Авторизация (POST)
router.post("/auth", async (req, res) => {
	try {
		const { email, pass } = req.body;
		const token = await authFunc(email, pass);
		res.status(200).json(token);
	} catch (error) {
		res.status(500).json({ message: 'Ошибка при обработке запроса', error: error.message });
	}
});

// Регистрация (POST)
router.post("/reg", async (req, res) => {
	try {
		const { email, pass } = req.body;
		const token = await regFunc(email, pass);
		res.status(200).json(token );
	} catch (error) {
		res.status(500).json({ message: 'Ошибка при обработке запроса', error: error.message });
	}
});


router.get("/check", checkAuthMiddleware,  async (req, res) => {
	try {
		console.log(req.user);
		res.status(200).json( req.user);
	} catch (error) {
		res.status(500).json({ message: 'Ошибка при обработке запроса', error: error.message });
	}
});
export default router;



