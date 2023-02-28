import React, { useEffect } from "react";
import LandingAdmin from '../LandingAdmin/LandingAdmin';

const Landing = (props) => {
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {

    }, [props.render]);

    return (
        <React.Fragment>
            {user.isAdmin ? (
                <LandingAdmin user={user} />

            ) : (
                <div>
                    Alison
                </div>
            )}
        </React.Fragment>
    )
}

export default Landing
