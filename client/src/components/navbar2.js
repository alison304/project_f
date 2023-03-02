import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import "./navbar.css";
import { useNavigate } from "react-router-dom";


const Navbar2 = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar className="navbar" sx={[
            {
                backgroundColor: 'rgba(0,0,0)'
            }]}>
        <Container maxWidth="xl">
            <div className='container'>
            <h1 className="title2" onClick={() => navigate("/")}>MAGIC FILM</h1>
            <img
                className='logo3'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt=""
            />

            <Box sx={{ flexGrow: 0 }}>
                <Button 
                    style={{
                        backgroundColor: "#d22215",
                        color: "#FFFFFF",
                        padding: "5px 11px",
                        fontSize: "14px"
                    }} 
                    onClick={() => navigate(`/login`)}>Iniciar sesión</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button 
                    style={{
                        backgroundColor: "#d22215",
                        color: "#FFFFFF",
                        padding: "5px 15px",
                        fontSize: "14px"
                    }} 
                    onClick={() => navigate(`/register`)}>Registrate</Button>
            </Box>
            </div>
        </Container>
        </AppBar>
    );
}
export default Navbar2
