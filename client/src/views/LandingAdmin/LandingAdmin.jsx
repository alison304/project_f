import React, { useEffect, useState } from "react";
import { getOneUser} from "../../services/user.service";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button } from '@mui/material';
import Swal from "sweetalert2";
import "./style-admin.css"

const LandingAdmin = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: '',
        isAdmin: true
    });
    
    const [errorsResponse, setErrorsResponse] = useState();
    const getOneUserFromService = async () => {
        try {
            const data = await getOneUser(id);
            data.data.user.birthdate = new Date(data.data.user.birthdate);
            data.data.user.password2 = data.data.user.password;
            setUser(data.data.user);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.error,
            });
        };
    };

    useEffect(() => {
        id && getOneUserFromService();
    }, [id]);

    return (
    <div className="page-admin">
        <br/>
        <Box sx={{ marginRight: '20px' }} display="flex" justifyContent="right">
            <Button variant="contained" onClick={() => navigate("/")}>Cerrar Sesion</Button>
        </Box>
        <Box display="flex" justifyContent="center">
            <h1 className="title2" onClick={() => navigate("/")}>MAGIC FILM</h1>
        </Box>
        <br />
        {id ? (
            <h2>BIENVENIDO {user.name}</h2>
        ) : (
            <h2>USUARIO NO PERMITIDO</h2>
        )}
        <br />
        <div>
            <h2>Eliga una de las opciones de usuario administrador</h2>
            <br/>
            <div className="btn-user">
                <Button variant="contained" sx={{ backgroundColor: '#d22215' }} className='btn-c' onClick={() => navigate("/user/list")}>Ver los usuarios</Button>
            </div>
            <div className="btn-mov">
            <Button variant="contained" sx={{ backgroundColor: '#d22215' }} className='btn-c' onClick={() => navigate("/movie/list")}>Ver Catalogo de películas</Button>
            </div>
        </div>
    </div>
    )
}

export default LandingAdmin