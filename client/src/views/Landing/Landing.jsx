import React from 'react';
import LandingAdmin from '../LandingAdmin/LandingAdmin';

const user = JSON.parse(localStorage.getItem("user"));
const isAdmin = { user };

const Landing = () => {
    return (
        <React.Fragment>
            {isAdmin ? (
                <LandingAdmin />

            ) : (
                <div>
                    Alison
                </div>
            )}
        </React.Fragment>
    )
}

export default Landing
