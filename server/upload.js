import multer from 'multer';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto'; // Для генерации случайного хэша

// Настройка хранилища для multer
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		const dir = './photo';
		// Создаём папку, если она не существует
		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true }); // recursive поддерживает создание подпапок (при необходимости)
		}
		cb(null, dir);
	},
	filename: (req, file, cb) => {
		const ext = path.extname(file.originalname); // Расширение файла (например, .png)
		const hash = crypto.randomBytes(8).toString('hex'); // Генерация случайного хэша (8 байт достаточно)
		cb(null, `${Date.now()}-${hash}${ext}`); // Генерация уникального имени
	},
});

// Экспортируем функцию загрузки одного файла
const upload = multer({ storage: storage });

export default upload;
