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
            </div>
            <div className='footer'>
            <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        bgcolor: "#141212",
                    }}
                >
                <Grid container>
                    <Grid item md={6} xs={12}>
                        <div className="logo-container">
                            <img
                            src="/assets/Logo/favicon.ico"
                            alt="Foto Logo"
                            width="50"
                            height="50"
                            />
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box display="flex" justifyContent="flex-end">
                            <div className="social-container">
                            <br/>
                            <p className='text-1'>Encuentranos en redes</p>
                            <a href="https://www.youtube.com/" className="social">
                                <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>
                            <a href="https://www.facebook.com/" className="social">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://www.twitter.com/" className="social">
                                <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                            <a href="https://www.instagram.com/" className="social">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </div>
        </div>
    )
}

export default PageInit