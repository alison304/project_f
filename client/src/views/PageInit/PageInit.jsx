import { Button, Box, Grid } from '@mui/material';
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import "./style.css"
import Navbar2 from '../../components/navbar2';

const PageInit = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar2/>
            <div className="banner2">
                <Box display="flex" justifyContent="center" marginBottom="20px">
                    <h1 className="title">Películas y series ilimitadas y mucho más</h1>
                </Box>
                <p className="title2">Disfruta donde quieras y cuando quieras</p>
            </div>
            <br/>
            <div className="md">
                <p className='opcion'></p>
                <br/>
            </div>
            <div className='footer'>
        </div>
    </div>
    )
}

export default PageInit