import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./featured.css";
import { useNavigate } from "react-router-dom";

const Featured = () => {
    const navigate = useNavigate();
    return (
        <div className='featured'>
            <img
                className='cover'
                src="https://i.postimg.cc/c4MVk6vy/peakpx-3.jpg"
                alt=""
            />
            <div className="info">
                <h1 className='subt'>LUCA</h1>
                    <button className="play" onClick={() => navigate(`/register`)}>
                        <PlayArrowIcon className='pla'/>
                        <span className='inf2'>Reproducir</span>
                    </button>
            </div>
        </div>
    )
}

export default Featured
