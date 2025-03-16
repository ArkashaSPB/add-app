import express from 'express';
import dotenv from 'dotenv';
import upload from './upload.js'; // Импортируем multer
import cors from 'cors';
import { usersRouter} from "./routes/index.js"; // Импортируем бота


dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());



// Роуты
app.use('/api/u', usersRouter);


// Один файл
app.post('/api/upload', upload.single('image'), (req, res) => {
	if (!req.file) {
		return res.status(400).send('No file uploaded.');
	}
	res.status(200).send({ message: 'File uploaded successfully', filename: req.file.filename });
});

// Несколько файлов (до 10 изображений)
app.post('/api/uploads', upload.array('images', 10), (req, res) => {
	if (!req.files || req.files.length === 0) {
		return res.status(400).send('No files uploaded.');
	}
	const filenames = req.files.map(file => file.filename);
	res.status(200).send({ message: 'Files uploaded successfully', filenames });
});

// Роут для отдачи изображения по запросу
app.use('/api/img', express.static('photo'));

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Сервер запущен на порту ${PORT}`);
});

