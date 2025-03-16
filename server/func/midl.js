import {checkFunc} from "../services/usersFunc.js";

export const checkAuthMiddleware = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader) return res.status(401).json({ message: 'Отсутствует заголовок авторизации' });
		const token = authHeader
		if (!token) return res.status(401).json({ message: 'Отсутствует токен' });
		const user = await checkFunc(token);
		req.user = user;
		next();
	} catch (error) {
		res.status(401).json({ message: error.message });
	}
};