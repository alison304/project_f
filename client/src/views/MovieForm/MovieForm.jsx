import React, { useEffect, useState } from "react";
import { createMovie, getOneMovie, updateMovie } from "../../services/movie.service";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Grid, Button } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Swal from "sweetalert2";
import "./movieForm.css";

const MovieForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({
        name: '',
        category: '',
        year: '',
        photo: ''
    });
    const [errorsResponse, setErrorsResponse] = useState();

    const getOneMovieFromService = async () => {
        try {
            const data = await getOneMovie(id);
            setMovie(data.data.movie);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.error,
            });
        };
    };

    useEffect(() => {
        id && getOneMovieFromService();
    }, [id]);

    const movieSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Too Short!')
            .max(30, 'Too Long!')
            .required('Required name'),
        category: Yup.string()
            .min(3, 'Too Short!')
            .max(10, 'Too Long!')
            .required("Required category"),
        year: Yup.number()
            .min(1800, 'Minimum year')
            .required("Required year"),
        photo: Yup.string()
    });

    const sendNewMovie = async (movie) => {
        try {
            console.log("sendNewMovie", movie);
                {id ? await updateMovie(id, movie)
                    .then((response) => {
                        Swal.fire({
                            icon: 'success',
                            title: response.data.message,
                            text: "",
                        }).then((result) => {
                            navigate("/movie/list");
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                    :
                    await createMovie(movie)
                        .then((response) => {
                            Swal.fire({
                                icon: 'success',
                                title: response.data.message,
                                text: "",
                            }).then((result) => {
                                navigate("/movie/list");
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                        })
        }}
        catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.response.data.error,
            });
            setErrorsResponse(error.response.data.error.errors);
        }
    };

    return (
        <React.Fragment>
            <Formik
                enableReinitialize={true}
                initialValues={movie}
                validationSchema={movieSchema}
                onSubmit={sendNewMovie}
            >
                {({ values, errors, touched, setFieldValue }) => (
                    <Form>
                        <Grid container>
                            <Grid container direction="column" item xs={2}>
                                <Box display="flex" justifyContent="flex-start">
                                    <img className='img-regist' src="https://lumiere-a.akamaihd.net/v1/images/p_encanto_homeent_22359_4892ae1c.jpeg" alt="imagen" />
                                </Box>
                            </Grid>
                            <Grid container direction="column" item xs={10}>
                                <Box className='registro'>
                                    <br/>
                                    <h1 className="title2" onClick={() => navigate("/")}>MAGIC FILM</h1>    
                                    <br/>
                                    {id ? (
                                        <h2>EDITAR {movie.name}</h2>
                                    ) : (
                                        <h2>CREAR PELICULA</h2>
                                    )}
                                    <br />
                                    <div className='row'>
                                        <div className='column'>
                                            <br />
                                            <div>
                                                <label>Nombre</label>
                                                <Field name="name" />
                                                {errors.name && touched.name ? (
                                                    <div>{errors.name}</div>
                                                ) : null}
                                                {errorsResponse?.name && (
                                                    <div>{errorsResponse.name.message}</div>
                                                )}
                                            </div>
                                            <br />
                                            <div>
                                                <label>Categoría</label>
                                                <Field name="category" />
                                                {errors.category && touched.category ? (
                                                    <div>{errors.category}</div>
                                                ) : null}
                                                {errorsResponse?.category && (
                                                    <div>{errorsResponse.category.message}</div>
                                                )}
                                            </div>
                                            <br />
                                            <div>
                                                <label>Año de lanzamiento</label>
                                                <Field name="year" />
                                                {errors.year && touched.year ? (
                                                    <div>{errors.year}</div>
                                                ) : null}
                                                {errorsResponse?.year && (
                                                    <div>{errorsResponse.year.message}</div>
                                                )}
                                            </div>
                                            <br />
                                            <div>
                                                <label>Portada</label>
                                                <Field name="photo" />
                                                {errors.photo && touched.photo ? (
                                                    <div>{errors.photo}</div>
                                                ) : null}
                                                {errorsResponse?.photo && (
                                                    <div>{errorsResponse.photo.message}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    {id ? (
                                        <Button variant="contained" sx={{ backgroundColor: 'red', display: 'inline', fontSize: 14 }} className='btn-c' type="submit">Actualizar</Button>

                                    ) : (
                                        <Button variant="contained" sx={{ backgroundColor: 'red', display: 'inline', fontSize: 14 }} className='btn-c' type="submit">Registrar</Button>
                                    )}
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    {id ? (
                                        <Button variant="contained" sx={{ backgroundColor: 'red', display: 'inline', fontSize: 14 }} className='btn-c' onClick={() => navigate("/movie/list")}>Cancel</Button>

                                    ) : (
                                        <Button variant="contained" sx={{ backgroundColor: 'red', display: 'inline', fontSize: 14 }} className='btn-c' onClick={() => navigate("/")}>Cancel</Button>
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                    </Form>
                )
                }
            </Formik >
        </React.Fragment >

    )
}

export default MovieForm
