import React, {useEffect, useState} from 'react';

import PublickPage from "./PublickPage.jsx";
import {getAppPublickIdAPI} from "../api/siteAPI.js";
import {useParams} from "react-router-dom";



const Public = () => {


    const { id } = useParams();
    const [app, setApp] = useState(null)

    const getFunc = () => {
        getAppPublickIdAPI(id).then(data => {
            setApp(data)
        })
    }

    useEffect(() => {
        getFunc()
    },[])

    if(app === null) return <p>Загрузка....</p>


    return (
        <>

            <PublickPage app={app}/>
        </>

    );
};

export default Public;