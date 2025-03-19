export const formatDate = (dateString) => {
	const months = [
		"января", "февр.", "марта", "апреля", "мая", "июня",
		"июля", "августа", "сентября", "октября", "ноября", "декабря"
	];

	const date = new Date(dateString); // Преобразуем строку в объект Date

	if (isNaN(date)) return "Неверная дата"; // Проверяем, что дата корректна

	const day = date.getDate(); // Получаем день
	const month = months[date.getMonth()]; // Получаем название месяца
	const year = date.getFullYear(); // Получаем год
	return `${day} ${month} ${year} г.`;
};
