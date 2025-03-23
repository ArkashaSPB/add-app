import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Загружаем переменные окружения
dotenv.config();

// Получаем значения переменных из .env
const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

if (!MYSQL_HOST || !MYSQL_USER || !MYSQL_PASSWORD || !MYSQL_DATABASE) {
	console.error('❌ Ошибка: отсутствуют необходимые переменные окружения в .env!');
	process.exit(1);
}

export async function connectToDatabase() {
	try {
		const connection = await mysql.createConnection({
			host: MYSQL_HOST,
			port: Number(MYSQL_PORT) || 3306, // По умолчанию 3306
			user: MYSQL_USER,
			password: MYSQL_PASSWORD,
			database: MYSQL_DATABASE,
			namedPlaceholders: true,
			connectTimeout: 10000,
		});

		// console.log('✅ Подключение к базе данных успешно!');
		return connection;
	} catch (error) {
		console.error('❌ Ошибка подключения к базе данных:', error.message);
		throw new Error('Ошибка подключения к MySQL');
	}
}
