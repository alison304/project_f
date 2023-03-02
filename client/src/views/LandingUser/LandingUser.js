import "./LandingUser.css";
import React, { useEffect, useState } from "react";
import { getMovieList } from "../../services/movie.service";
import { getCategoryList } from "../../services/category.service";

const LandingUser = (props) => {
    const [categoryList, setCategoryList] = useState([]);
    const [movieList, setMovieList] = useState([]);

    const getCategoryListFromService = async () => {
        try {
            const data = await getCategoryList();
            console.log(data.data.categoryList);
            setCategoryList(data.data.categoryList);
        } catch (error) {
            console.log("getCategoryListFromService", error);
        }
    };

    const getMovieListFromService = async () => {
        try {
            const data = await getMovieList();
            console.log(data.data.movieList);
            setMovieList(data.data.movieList);
        } catch (error) {
            console.log("getMovieListFromService", error);
        }
    };

    useEffect(() => {
        getCategoryListFromService();
        getMovieListFromService();
    }, [props.render]);    

    return (
        <div>
                <div className='asd'></div>
                    <div className='fondolista'>
                        <div className="list">
                        {categoryList.map(category => 
                            <React.Fragment>
                                <span className="listTitle">{category.name}</span>
                                    <div className="wrapper">
                                        <div className="container5">
                                            {movieList.filter(x => x.category === category.name).map(movie => 
                                                <React.Fragment>
                                                    <div className="mov">
                                                        <img
                                                            width="220px"
                                                            height="180px"
                                                            src={movie.photo}
                                                            alt="cloudinary"
                                                        />
                                                    </div>
                                                </React.Fragment>                            
                                            )}
                                    </div>
                                </div>
                            </React.Fragment>                            
                        )}
                        </div>
                    </div>
        </div>
    )
}

export default LandingUser
