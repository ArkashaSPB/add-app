import React, {useEffect, useState} from 'react';
import {Box, Button, Typography} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import SwiperImg from "./block/SwiperImg.jsx";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {formatDate} from "../component/func.js";
import RatingBlock from "./block/RatingBlock.jsx";
import OtzivBlock from "./block/otzivBlock.jsx";
import BottomNav from "./block/BottomNav.jsx";

const url =  import.meta.env.VITE_IMG;

const ot = '20px'
const colorGreen = '#008660'
const colorGray = '#5D6060'
const fontText = '0.875rem'

const PublickPage = ({app}) => {


    const [scrolled, setScrolled] = useState(false);

    const htmlFunc = (m) => {
        if(!m ){
            return('Нет описания')
        }else{
            return m.length > 270
                ? m.slice(0, 270) + '...'
                : m
        }
    }



    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box sx={styles.b1}>

            <Box sx={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <Box sx={{
                    ...styles.b1One,
                    ...(scrolled ? styles.shadow : {})
                }}>
                    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                        <Box sx={{flexGrow: 1, }}>
                            <Box  component="img" src="/logo.svg" />
                        </Box>
                        <Box sx={{display: "flex", flexGrow: 0, gap: 2}}>
                            <Box component="img" src="/search.svg"  />
                            <Box component="img" src="/vopros.svg"  />
                            <Box sx={{background: '#D9D9D9', width: 20, height: 20, borderRadius: '100%' }}></Box>
                        </Box>

                    </Box>
                </Box>
            </Box>

            {/*img*/}
            <Box sx={styles.product}>
                <Box sx={styles.mainImg}>
                    <Box component="img" src={`${url}${app.img}`}/>
                </Box>
                <Box sx={styles.productDiv}>
                    <Typography    sx={{fontSize: '15px', color: '#1E2020', fontWeight: 600}}>{app.name}</Typography>

                    <Typography    sx={{fontSize: '13px', color: colorGreen, fontWeight: 600}}>FIFA</Typography>
                    <Typography    sx={{fontSize: '8px'}}>Есть реклама</Typography>

                </Box>
            </Box>

            <Box sx={{...styles.three, textAlign: 'center'}}>
                <Box flexGrow={1}>
                    <Box>{app.rating} <Box component="img" src="/star.svg" sx={{mr: 1}}/></Box>
                    <Box>{app.review_count}</Box>
                </Box>
                <Box sx={styles.line}/>
                <Box  flexGrow={1}>
                    <Box>{app.downloads}</Box>
                    <Box fontSize={8}>(Количество скачиваний)</Box>
                </Box>
                <Box sx={styles.line}/>
                <Box  flexGrow={1}>
                    <Box sx={{ width: '13px', height: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px',
                        mx: 'auto', color: colorGreen, borderRadius: '100%', border: `1px solid  ${colorGreen}` }}>{app.age_limit}</Box>
                    <Box sx={{fontSize: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>{app.age_limit}+ <InfoOutlinedIcon sx={{color: colorGray, fontSize: 10}} /></Box>
                </Box>
            </Box>

            {/*Button*/}
            <Box mx={ot}>
                <Button variant="contained" color="secondary" fullWidth sx={styles.button}>Установить</Button>
            </Box>

            <Box sx={styles.share }>
                <Box>
                    <Button sx={styles.shareButton} aria-label="Поделиться">
                        <Box component="img" src="/p1.svg" sx={{mr: 1}}  /> Поделиться
                    </Button>
                </Box>
                <Box>
                    <Button  sx={styles.shareButton}  aria-label="Добавить в список желаний">
                        <Box component="img" src="/p2.svg" sx={{mr: 1}}  /> Добавить в список желаний
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
                    <Box>
                        <ArrowForwardIcon sx={{color: colorGray, fontSize: 14}} />
                    </Box>
                </Box>

                <Box fontSize={fontText} dangerouslySetInnerHTML={{ __html: htmlFunc('Описание')}} />
            </Box>


            <Box sx={styles.ramka}>
                <Box >
                    <Box>
                        <Box component="img" src="/ramka1.png"  />
                    </Box>
                    <Box>
                        <Typography component="p">Это приложение может передавать указанные типы<br/> данных третьим лицам</Typography>
                        <Typography  component="p" fontSize="0.75rem !important">Сведения о приложении и его производительности</Typography>
                    </Box>
                </Box>

                <Box >
                    <Box>
                        <Box component="img" src="/ramka2.png"  />
                    </Box>
                    <Box>
                        <Typography component="p">Это приложение может собирать указанные типы данных</Typography>
                        <Typography  component="p" fontSize="0.75rem !important">Личная информация</Typography>
                    </Box>
                </Box>

                <Box >
                    <Box>
                        <Box component="img" src="/ramka3.png"  />
                    </Box>
                    <Box>
                        <Typography component="p">Данные шифруются при передаче</Typography>
                    </Box>
                </Box>

                <Box>
                    <Box>
                        <Box component="img" src="/ramka4.png"  />
                    </Box>
                    <Box>
                        <Typography component="p">Вы можете запросить удаление данных</Typography>
                    </Box>
                </Box>

                <Button component="a" href="#">Подробнее</Button>



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
                <OtzivBlock fontText={fontText} otziv={app.reviews}/>
            </Box>

            <Box sx={{px: ot, pt: '20px'}}>
                <Typography component="h3" sx={styles.h3}>Новое в приложении</Typography>
                <Box fontSize={fontText} dangerouslySetInnerHTML={{ __html: htmlFunc(app.description2 )}} />
            </Box>


            <Box sx={{px: ot, pt: '20px'}}>
                <Box sx={styles.flex2}>
                    <Typography component="h3" sx={styles.h3}>{app.name}: другие приложения</Typography>
                    <Box>
                        <ArrowForwardIcon sx={{color: colorGray, fontSize: 14}} />
                    </Box>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                    {app.similar_apps.map((item, i) =>
                        <Box display="flex" gap="10px" key={i}>
                            <Box>
                                <Box sx={{width: '55px', height: '55px', borderRadius: '10px'}} component="img" src={url+item.img} ></Box>
                            </Box>
                            <Box>
                                <Typography sx={{fontSize: '12px'}}>{item.name}</Typography>
                                <Typography sx={{fontSize: '10px'}}>{item.author}</Typography>
                                <Typography sx={{fontSize: '10px'}}>4,7 <Box component="img" src="/star.svg"  /></Typography>
                            </Box>
                        </Box>
                    )}

                </Box>
            </Box>

            <Box sx={{px: ot, pt: '20px'}}>
                <Box sx={styles.flex2}>
                    <Typography component="h3" sx={styles.h3}>Похожие приложения</Typography>
                    <Box>
                        <ArrowForwardIcon sx={{color: colorGray, fontSize: 14}} />
                    </Box>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
                    {app.similar_apps.map((item, i) =>
                        <Box display="flex" gap="10px" key={i}>
                            <Box>
                                <Box sx={{width: '55px', height: '55px', borderRadius: '10px'}} component="img" src={url+item.img} ></Box>
                            </Box>
                            <Box>
                                <Typography sx={{fontSize: '12px'}}>{item.name}</Typography>
                                <Typography sx={{fontSize: '10px'}}>{item.author}</Typography>
                                <Typography sx={{fontSize: '10px'}}>4,7 <Box component="img" src="/star.svg"  /></Typography>
                            </Box>
                        </Box>
                    )}

                </Box>
            </Box>

            <BottomNav/>
            <Box sx={{height: 100}}></Box>
        </Box>
    );
};

const styles = {
    h3:{
        fontSize: '20px',
        mb: '15px',
        color: 'black',
        fontWeight: '500',
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

    b1: {maxWidth: '520px', color: colorGray, minHeight: '100vh', bgcolor: 'white',  marginX: 'auto', '@media (max-width: 400px)': {
            maxWidth: '100%',
            fontFamily: "'Inter', sans-serif !important",
        },
    },
    shadow: {
        boxShadow: '0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)'
    },

    b1One: {display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: ot,
        pt: '13px', pb: '10px', backgroundColor: '#fff',
    },
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
        fontSize: '10px',
        '& div': {flexGrow: 1},
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
        display: 'flex', gap: 1, flexWrap: 'wrap', px: ot, pb: '15px',
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
            ml: 1
        },

        '& p': {fontSize: fontText,},
        '& a': {textTransform: 'none', textDecoration: 'none', color: colorGreen, fontSize: '0.75rem', fontWeight: 'bold'},
    },
    line: {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        flexGrow: 0,
        '&:before': { content: '""' , height: '18px' , width: '1px', backgroundColor: '#CECFCF' },
    }


}

export default PublickPage;