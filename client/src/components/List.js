import "./list.css";
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const List = (props) => {
    const navigate = useNavigate();

    return (
        <div>
                <div className='asd'></div>
                    <div className='fondolista'>
                        <div className="list">
                            <span className="listTitle">Películas</span>
                            <div className="wrapper">
                                <div className="container5">
                                    <div className="mov">
                                        
                                    </div>
                                    <div className="mov">
                                        
                                    </div>
                                    <div className="mov">
                                        
                                    </div>
                                    <div className="mov">
                                        
                                    </div>
                                    <div className="mov">
                                        
                                    </div>
                                    <div className="mov">

                                    </div>
                                </div>
                                <div className="container5">
                                    <div className="mov">
                                        
                                    </div>
                                    <div className="mov">
                                        
                                    </div>
                                    <div className="mov">
                                        
                                    </div>
                                    <div className="mov">
                                        
                                    </div>
                                    <div className="mov">
                                        
                                    </div>
                                    <div className="mov">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default List
