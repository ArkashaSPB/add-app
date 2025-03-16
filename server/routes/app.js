import express from "express";

const router = express.Router();

router.get("/", async  (req, res) => {
	try {

		res.status(200).json(1);
	} catch (error) {
		res.status(500).json({ message: 'promo Произошла ошибка при обработке запроса' });
	}
})


export default router;