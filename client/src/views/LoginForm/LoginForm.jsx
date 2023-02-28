import React, { useState } from "react";
import { login } from "../../services/user.service";
import { useNavigate, Link } from "react-router-dom";
import { Box, Grid } from '@mui/material';
import Swal from "sweetalert2";
import "./style-login.css"

export default function LoginComponent(props) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const submitForm = (event) => {
        event.preventDefault();
        login(user, password)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate("/landing")
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.data.error,
                });
            })
    }

    return (
        <React.Fragment>
            <Grid container spacing={2} className="pato">
                <Grid item xs={4}>
                    <Box display="flex" justifyContent="flex-center">
                        <img className="img-login" src="https://es.web.img3.acsta.net/pictures/15/07/08/14/59/530666.jpg" alt="login" />
                    </Box>
                </Grid>
                <Grid item xs={8} className="left2">
                    <div className="login">
                        <br /><br />
                        <div className="formulario">
                            <h1 className="title2" onClick={() => navigate("/")}>MAGIC FILM</h1>
                            <br /><br /><br /><br />
                            <h1>Bienvenido!</h1>
                            <br />
                            <p>Por favor inicie sesión en su cuenta</p>
                            <br /><br />
                            <h1 className="subtitlo">Inicia sesión</h1>
                            <form onSubmit={submitForm}>
                                <div>
                                    <label htmlFor="email" className="email"></label><br />
                                    <input className="inpt" type="text" name="user" placeholder="Email" value={user} onChange={(e) => {
                                        setUser(e.target.value);
                                    }} />
                                </div>
                                <div>
                                    <label htmlFor="password" className="passw"></label><br />
                                    <input className="inpt" type="password" name="password" placeholder="Contraseña" value={password} onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                    <br /><br /><br />
                                    <input className="btn-sub" type="submit" value="Iniciar sesión" />
                                    <br /><br /><br />
                                    <Link className="linko" to={"/register"}>¿Primera vez aquí? <span className="bold">Regístrate aquí</span></Link>
                                </div>
                                <br /><br />

                            </form>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}