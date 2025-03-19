import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Box, Button, Typography} from "@mui/material";
import {getAppByIdAPI} from "../api/siteAPI.js";

import ShareIcon from '@mui/icons-material/Share';

import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


import SwiperImg from "./block/SwiperImg.jsx";
import {formatDate} from "../component/func.js";
import RatingBlock from "./block/RatingBlock.jsx";
import OtzivBlock from "./block/otzivBlock.jsx"; // Основной стиль

const ot = '20px'
const colorGreen = '#008660'
const colorGray = '#5D6060'
const fontText = '10px'


const url =  import.meta.env.VITE_IMG;
const AppPage = () => {

	const [app, setApp] = useState(null)

	const { id } = useParams();

	const getFunc = () => {
		getAppByIdAPI(id).then(data => {
			setApp(data)
		})
	}
	useEffect(() => {
		getFunc()
	},[])


	const htmlFunc = (m) => {
		return m.length > 270
			? m.slice(0, 270) + '...'
			: m
	}

	if(!app) return <p>Loading...</p>

	return (
		<Box sx={styles.b1}>

			<Box sx={{display: 'sticky'}}>
				<Box sx={styles.b1One}>
					<Box >
						<Box   component="img" src="/logo.svg"/>
					</Box>

				</Box>
			</Box>

			{/*img*/}
			<Box sx={styles.product}>
				<Box sx={styles.mainImg}>
					<Box component="img" src={`${url}${app.img}`}/>
				</Box>
				<Box sx={styles.productDiv}>
					<Typography    sx={{}}>{app.name}</Typography>
					<Typography    sx={{}}>entertainment</Typography>
				</Box>
			</Box>

			<Box sx={styles.three}>
				<Box>
					<Box>{app.rating}</Box>
					<Box>{app.review_count}</Box>
				</Box>
				<Box>
					<Box>{app.downloads}</Box>
					<Box fontSize={8}>(Количество скачиваний)</Box>
				</Box>
				<Box >
					<Box>{app.age_limit}</Box>
				</Box>
			</Box>

			{/*Button*/}
			<Box mx={ot}>
				<Button variant="contained" color="secondary" fullWidth sx={styles.button}>Установить</Button>
			</Box>

			<Box sx={styles.share }>
				<Box>
					<Button sx={styles.shareButton} aria-label="Поделиться">
						<ShareIcon /> Поделиться
					</Button>
				</Box>
				<Box>
					<Button  sx={styles.shareButton}  aria-label="Добавить в список желаний">
						<BookmarkAddIcon /> Добавить в список желаний
					</Button>

				</Box>
			</Box>

			<Box sx={styles.load}>
				<PhonelinkIcon  />
				Это приложение можно скачать на ваше
				устройство.
			</Box>

			<Box sx={styles.dostup}>
				<Box>
					<Box component="img" src="/homehert.svg" height="20px" />
				</Box>
				<Box>
					Вы можете открыть доступ к этому
					контенту членам вашей семьи.
					Подробнее
				</Box>

			</Box>

			<Box sx={styles.images}>
				<SwiperImg images={app.images} />
			</Box>


			<Box sx={styles.opis}>
				<Box sx={styles.flex2}>
					<Typography component="h3" sx={styles.h3}>Описание</Typography>
					<Box >
						<ArrowForwardIcon sx={{color: colorGray, fontSize: 14}} />
					</Box>
				</Box>

				<Box fontSize={fontText} dangerouslySetInnerHTML={{ __html: htmlFunc(app.description )}} />
			</Box>

			<Box sx={styles.lastUpdate}>
					<Typography component="h4" sx={styles.h4}>Последнее обновление</Typography>
					<Typography fontSize={fontText}>{formatDate(app.last_update)}</Typography>
			</Box>

			<Box sx={styles.teg}>
				<Box>Головоломки</Box>
				<Box>Блоки</Box>
				<Box>Офлайн</Box>
				<Box>Стилизация</Box>
				<Box>Однопользовательская игра</Box>
				<Box>Казульные игры</Box>

			</Box>

			<Box sx={styles.opis}>
				<Box sx={styles.flex2}>
					<Typography component="h3" sx={styles.h3}>Безопасность данных</Typography>
					<Box >
						<ArrowForwardIcon sx={{color: colorGray, fontSize: 14}} />
					</Box>
				</Box>

				<Box fontSize={fontText} dangerouslySetInnerHTML={{ __html: htmlFunc('Описание')}} />
			</Box>


			<Box sx={styles.ramka}>
				<Box >
					<Box>
						<Box component="img" src="/ramka1.svg"  />
					</Box>
					<Box>
						<Typography component="p">Это приложение может передавать указанные типы<br/> данных третьим лицам</Typography>
						<Typography  component="p" fontSize="8px !important">Сведения о приложении и его производительности</Typography>
					</Box>
				</Box>

				<Box >
					<Box>
						<Box component="img" src="/ramka2.svg"  />
					</Box>
					<Box>
						<Typography component="p">Это приложение может собирать указанные типы данных</Typography>
						<Typography  component="p" fontSize="8px !important">Личная информация</Typography>
					</Box>
				</Box>

				<Box >
					<Box>
						<Box component="img" src="/ramka3.svg"  />
					</Box>
					<Box>
						<Typography component="p">Данные шифруются при передаче</Typography>
					</Box>
				</Box>

				<Box>
					<Box>
						<Box component="img" src="/ramka4.svg"  />
					</Box>
					<Box>
						<Typography component="p">Вы можете запросить удаление данных</Typography>
					</Box>
				</Box>

				<Button>Подробнее</Button>



			</Box>

			<Box sx={styles.opis}>
				<Box sx={styles.flex2}>
					<Typography component="h3" sx={styles.h3}>Оценки и отзывы</Typography>
					<Box >
						<ArrowForwardIcon sx={{color: colorGray, fontSize: 14}} />
					</Box>
				</Box>
				<Box>
					<Typography fontSize={fontText} component="p">Оценки и отзывы проверены <InfoOutlinedIcon sx={{color: colorGray, fontSize: 10}} /></Typography>
				</Box>
			</Box>

			<Box sx={styles.teg2}>
				<Box>
					<Box component="img" src="/tv.svg"  /> TV
				</Box>
				<Box>
					<Box component="img" src="/hrom.svg"  /> Chromebook
				</Box>
				<Box>
					<Box component="img" src="/plan.svg"  /> Планшет
				</Box>

			</Box>

			<Box sx={{px: ot}}>
				<RatingBlock rating = {app.rating} count={app.review_count} review_count={app.review_count} />
			</Box>
			<Box sx={{px: ot, pt: '20px'}}>
				<OtzivBlock otziv={app.reviews}/>
			</Box>

			<Box sx={{height: 100}}></Box>
		</Box>
	);
};

export default AppPage;



const styles = {
	h3:{
		fontSize: '15px',
		mb: '15px',
		color: 'black',
	},
	h4:{
		fontSize: '10px',
		mb: '15px',
		color: 'black',
	},
	opis:{
		px: ot,

	},
	lastUpdate:{
		my: '20px',
		px: ot,
	},

	b1: {maxWidth: '420px', color: colorGray, minHeight: '100vh', bgcolor: 'white',  marginX: 'auto', '@media (max-width: 400px)': {
			maxWidth: '100%',
			fontFamily: "'Inter', sans-serif !important",
		},
	},
	b1One: {display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: ot,
		pt: '13px',
		boxShadow: '0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)' },
		mainImg:{width: '55px', height: '55px',borderRadius: '10px',overflow: 'hidden',
			'& img': {
				width: '100%',
				height: '100%',
				objectFit: 'cover',
			},
	},
	product: {
		px: ot,
		pt: '35px',
		display: 'flex',
		alignItems: 'top',
		justifyContent: 'space-between',
	},
	productDiv :{
		ml: '15px',
		flexGrow: 1,
		fontSize: '15px',
		fontWeight: 'semibold',
	},
	three:{
		position: 'relative',
		display: 'flex',
		justifyContent: 'space-between',
		gap: '8px',
		py: '16px',
		px: ot,
		'& div': {flexGrow: 1},
		'& div > *:not(:first-of-type)::before': {
			backgroundColor: 'rgb(232, 234, 237)',
			content: '""',
			display: 'block',
			height: '24px',
			width: '1px',
			position: 'absolute',
			left: 0,
			top: 'calc(50% - 12px)'
		}
	},
	button: {
		fontSize: '12px',
		fontWeight: '700',
		textTransform: 'none',
		borderRadius: '7px',
	},
	share: {
		display: 'flex',
		justifyContent: 'space-between',
		px: ot,
		py: '16px',
		color: `${colorGreen} `,
		fontWeight: '700',
		fontSize: '10px',
		'& div': {
			display: 'flex',
			alignItems: 'center',
		}

	},
	shareButton: {
		fontSize: '12px',
		textTransform: 'none',
		fontWeight: '600',
		color: colorGreen,
		'& svg': {
			fontSize: '16px',
			color: colorGreen,
			mr: '5px',
		},
	},
	load: {
		gap: 1,
		display: 'flex',
		px: ot,
		py: '16px',
		fontSize: fontText,
		color: colorGray
	},
	dostup: {
		gap: 1,
		display: 'flex',
		px: ot,
		py: '16px',
		fontSize: fontText,
	},
		images: {
			px: ot,
			py: '16px',
		},
		flex2:{
			display: 'flex', justifyContent: 'space-between',
		},
		teg:{
			display: 'flex', gap: 1, flexWrap: 'wrap', px: ot,
			'& div': {cursor: 'pointer', border: `1px solid rgba(93,96,96, 0.5)` , padding: '4px 10px', borderRadius: '20px', fontSize: fontText, },
			'& div:hover': {background: '#eee' }

		},
		teg2:{
			display: 'flex', gap: 1, px: ot, justifyContent: 'center', py: '16px',
			'& div': {cursor: 'pointer', border: `1px solid rgba(93,96,96, 0.5)` , padding: '4px 15px', borderRadius: '20px', fontSize: fontText, },
			'& div:hover': {background: '#eee' }
		},
		ramka:{
			border: '1px solid black', borderRadius: '5px', mx: ot, p: '10px', my: '15px',
			'& > div': {display: 'flex', mt: '10px'},
			'& > div > div:first-child': {
				width: '40px',
			},

			'& p': {fontSize: fontText,},
			'& button': {textTransform: 'none', color: colorGreen, fontSize: '10px',}
		}


}