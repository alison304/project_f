import React, { useEffect } from "react";
import LandingAdmin from '../LandingAdmin/LandingAdmin';
import Navbar from "../../components/navbar";
import "./style.css";
import Featured from "../../components/Featured";
import List from "../../components/List";

const Landing = (props) => {
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

    }, [props.render]);

    return (
        <React.Fragment>
            {user.isAdmin ? (
                <LandingAdmin user={user} />

            ) : (
                <div className="fondo">
                    <Navbar/>
                    <Featured/>
                    <List/>
                </div>
            )}
        </React.Fragment>
    )
}

export default Landing
