import { connectToDatabase } from '../func/db.js';
import { v4 as uuidv4 } from 'uuid';

export const authFunc = async (email, password) => {
	const connection = await connectToDatabase();
	try {
		// Ищем пользователя по email
		const [rows] = await connection.execute('SELECT * FROM users WHERE email = ? LIMIT 1', [email]);
		if (rows.length === 0) {
			throw new Error('Пользователь не найден');
		}
		const user = rows[0];
		// В продакшене пароль следует хранить в зашифрованном виде!
		if (user.password !== password) {
			throw new Error('Неверный пароль');
		}
		// Возвращаем токен, сохранённый в БД
		return user.token;
	} catch (error) {
		throw new Error('Ошибка при запросе к базе данных: ' + error.message);
	} finally {
		await connection.end();
	}
};

export const regFunc = async (email, pass) => {
	const connection = await connectToDatabase();
	console.log(email, pass);
	try {
		// Проверяем, существует ли пользователь
		const [existing] = await connection.execute('SELECT * FROM users WHERE email = ? LIMIT 1', [email]);
		if (existing.length > 0) {
			throw new Error('Пользователь уже существует');
		}
		// Генерируем уникальный токен
		const token = uuidv4();
		// Вставляем нового пользователя в БД
		await connection.execute('INSERT INTO users (email, pass, token) VALUES (?, ?, ?)', [email, pass, token]);
		return token;
	} catch (error) {
		throw new Error('Ошибка при запросе к базе данных: ' + error.message);
	} finally {
		await connection.end();
	}
};

export const checkFunc = async (token) => {
	const connection = await connectToDatabase();
	try {
		const [rows] = await connection.execute('SELECT * FROM users WHERE token = ? LIMIT 1', [token]);
		if (rows.length === 0) throw new Error('Неверный токен');
		return rows[0];
	} catch (error) {
		throw new Error('Ошибка при запросе к базе данных: ' + error.message);
	} finally {
		await connection.end();
	}
};
