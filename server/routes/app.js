import express from 'express';
import {checkAuthMiddleware} from "../func/midl.js";
import {addApp, deleteApp, getAppAll, getAppById, getAppByUser, updateApp} from "../services/appFunc.js";

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const app = await getAppAll();
		res.status(200).json(app);
	} catch (error) {
		res.status(500).json({ message: 'Ошибка сервера', error });
	}
});

router.get('/user', checkAuthMiddleware, async (req, res) => {
	try {
		const user  = req.user.id;
		console.log(user)
		const app = await getAppByUser(user);
		res.status(200).json(app);
	} catch (error) {
		res.status(500).json({ message: 'Ошибка сервера', error });
	}
});

router.get('/:id', checkAuthMiddleware, async (req, res) => {
	try {
		const user = req.user.id;
		const id  = req.params.id;
		const app = await getAppById(id, user);
		res.status(200).json(app);
	} catch (error) {
		res.status(500).json({ message: 'Ошибка сервера', error });
	}
});

router.post('/', checkAuthMiddleware, async (req, res) => {
	try {
		const user = req.user.id;
		const m = await addApp( user,  req.body);
		res.json(m);
	} catch (error) {
		res.status(500).json({ message: 'Ошибка сервера', error });
	}
});


router.put('/:id', checkAuthMiddleware, async (req, res) => {
	try {
		const user = req.user.id;
		const id  = req.params.id;
		await updateApp(id, user,  req.body);
		res.json({ message: 'Приложение обновлено' });
	} catch (error) {
		res.status(500).json({ message: 'Ошибка сервера', error });
	}
});


router.delete('/:id', checkAuthMiddleware, async (req, res) => {
	try {
		const id = req.params.id;
		await deleteApp(id);
		res.json({ message: 'Приложение удалено' });
	} catch (error) {
		res.status(500).json({ message: 'Ошибка сервера', error });
	}
});

export default router;