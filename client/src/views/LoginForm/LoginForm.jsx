import React, { useState } from "react";
import { login } from "../../services/user.service";
import { useNavigate, Link } from "react-router-dom";
import { Box, Grid } from '@mui/material';
import Swal from "sweetalert2";
import "./style-login.css"

export default function LoginComponent(props){
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const submitForm = (event) => {
        event.preventDefault();
        login(user, password)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                navigate("/user/list")
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
                    <Box display="flex" justifyContent="flex-start">
                        <img className="img-login" src="https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2021/05/luca-6.jpg?resize=800%2C1132&ssl=1" alt="login" />
                    </Box>
                </Grid>
                <Grid item xs={8} className="left2">
                <div className="login">
                <br/>
                <div className="formulario">
                    <img className='img-ban' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="logo" width="250" height="100" onClick={() => navigate("/")}/>
                    <h1 className="subtitlo">Inicia sesión</h1>
                    <form onSubmit={submitForm}>
                        <div>
                            <label htmlFor="email" className="email"></label><br/>
                            <input className="inpt"  type="text" name="user"  placeholder="Email" value={user} onChange={(e)=> {
                                setUser(e.target.value);
                            }} />
                        </div>
                        <div>
                            <label htmlFor="password" className="passw"></label><br/>
                            <input className="inpt" type="password" name="password" placeholder="Contraseña" value={password} onChange={(e)=> {
                                setPassword(e.target.value);
                            }}/>
                            <br/><br/><br/>
                            <input className="btn-sub" type="submit" value="Iniciar sesión" />
                            <br/><br/><br/>
                            <Link className="linko" to={"/register"}>¿Primera vez aquí? <span className="bold">Regístrate aquí</span></Link>
                        </div>
                        <br/><br/>
                        
                    </form>
                </div>
            </div>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}