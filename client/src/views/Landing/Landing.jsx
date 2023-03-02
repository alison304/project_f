import React, { useEffect } from "react";
import LandingAdmin from '../LandingAdmin/LandingAdmin';
import LandingUser from "../LandingUser/LandingUser";
import Navbar from "../../components/navbar";
import "./style.css";
import Featured from "../../components/Featured";


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
                    <Navbar />
                    <Featured />
                    <LandingUser />
                </div>
            )}
        </React.Fragment>
    )
}

export default Landing
