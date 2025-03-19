export const styles = {
	button:{
		width: "100%",
		height: "48px",
		color: "white",
		borderRadius: "15px",
		fontWeight: 600,
		fontSize: "16px",
		textTransform: "none",
	},
	button2:{
		color: "white",
		borderRadius: "15px",
		fontWeight: 600,
		fontSize: "16px",
		textTransform: "none",
	},
	h2: {
		fontSize: '32px',
		fontWeight: 'medium',
		mb: "18px"
	},

	b3:{
		display: 'flex',
		pt: '10px',
		gap: '20px',
		justifyContent: 'space-between',
	},
	b2:{
		display: 'flex',
		pt: '10px',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	b2Item: {
		flexGrow: 1,
		textAlign: 'center',
	},
	b2ItemOne: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '10px',
	},
	line:{
		height: '36px',
		borderRight: '1px solid #CECFCF'
	},
	p:{
		fontFamily: "'Inter', sans-serif",
		fontSize: "18px ",
	},
	p2:{
		fontFamily: "'Inter', sans-serif",
		fontSize: "20px",
		color: "#ADAFAF",
	},
	form1: {
		"& .MuiInputBase-root": {
			fontFamily: "'Inter', sans-serif !important",
			fontSize: "32px !important",
			fontWeight: 600, // Semibold
		},
		"& .MuiInputBase-input": {
			color: "#8E8F8F", // Обычный текст 100%
			fontFamily: "'Inter', sans-serif !important",
			fontSize: "32px !important",
			fontWeight: 600,
		},
		"& .MuiInputBase-input::placeholder": {
			color: "rgba(30, 32, 32, 0.5)", // Плейсхолдер 50%
			fontWeight: 600,
		},

		"& .MuiInput-underline:before": {
			borderBottom: "1px solid rgba(93, 96, 96, 0.3)", // Нижняя линия 5D6060 30%
		},
		"& .MuiInput-underline:hover:before": {
			borderBottom: "1px solid rgba(93, 96, 96, 0.5)", // Чуть темнее при наведении
		},
		"& .MuiInput-underline:after": {
			borderBottom: "1px solid #5D6060", // Цвет линии при фокусе
		},
	},

	form2: {
		"& .MuiInputBase-root": {
			fontFamily: "'Inter', sans-serif !important",
			fontSize: "20px !important",
			fontWeight: 600, // Semibold
		},
		"& .MuiInputBase-input": {
			color: "#8E8F8F", // Обычный текст 100%
			fontFamily: "'Inter', sans-serif !important",
			fontSize: "20px !important",
			fontWeight: 600,
		},
		"& .MuiInputBase-input::placeholder": {
			color: "rgba(30, 32, 32, 0.5)", // Плейсхолдер 50%
			fontWeight: 600,
		},

		"& .MuiInput-underline:before": {
			borderBottom: "1px solid rgba(93, 96, 96, 0.3)", // Нижняя линия 5D6060 30%
		},
		"& .MuiInput-underline:hover:before": {
			borderBottom: "1px solid rgba(93, 96, 96, 0.5)", // Чуть темнее при наведении
		},
		"& .MuiInput-underline:after": {
			borderBottom: "1px solid #5D6060", // Цвет линии при фокусе
		},
	},

	b1:{
		display: 'flex',
		pt: '112px',
		gap: '50px',
	},
	main: {
		minHeight: '100vh',
		pb: '100px',
		fontFamily: "'Inter', sans-serif",
		background: '#fff',
		color: '#000',

	},
	stars: {
		color: "#02885F", // Устанавливаем цвет звезд
		"& .MuiRating-iconFilled": { color: "#02885F" }, // Цвет заполненных звезд
		"& .MuiRating-iconHover": { color: "#02885F" }, // При наведении

	}
}