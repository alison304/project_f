import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from '@mui/material';
import "./style-admin.css";

const LandingAdmin = (props) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    useEffect(() => {

    }, [props.render]);

    return (
        <div className="page-admin">
            <br />
            <Box sx={{ marginRight: '20px' }} display="flex" justifyContent="right">
                <Button variant="contained" onClick={logout}>Cerrar Sesion</Button>
            </Box>
            <Box display="flex" justifyContent="center">
                <h1 className="title2" onClick={() => navigate("/")}>MAGIC FILM</h1>
            </Box>
            <br />
            <h2>BIENVENIDO {props.user.name}</h2>
            <br />
            <div>
                <h2>Eliga una de las opciones de usuario administrador</h2>
                <br />
                <div className="btn-user">
                    <Button variant="contained" sx={{ backgroundColor: '#d22215' }} className='btn-c' onClick={() => navigate("/user/list")}>Ver los usuarios</Button>
                </div>
                <div className="btn-mov">
                    <Button variant="contained" sx={{ backgroundColor: '#d22215' }} className='btn-c' onClick={() => navigate("/movie/list")}>Ver Catalogo de películas</Button>
                </div>
            </div>
        </div >
    )
}

export default LandingAdmin