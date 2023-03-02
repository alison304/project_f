import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "./featured.css";

const Featured = () => {
    return (
        <div className='featured'>
            <img
                className='cover'
                src="https://i.postimg.cc/c4MVk6vy/peakpx-3.jpg"
                alt=""
            />
            <div className="info">
                <h1 className='subt'>LUCA</h1>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon className='pla'/>
                        <span className='inf2'>Reproducir</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
