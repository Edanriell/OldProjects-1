import React from 'react';
import { Link } from 'react-router-dom';

import './page-not-found.scss';


const NotFound = () => (
    <>
    <section className="wrapper">
        <div className="container">
            <div id="scene" className="scene" >
                <div className="circle" ></div>
                <div className="one">
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>
                <div className="two" >
                    <div className="content">
                        <span className="piece"></span>
                        <span className="piece"></span>
                        <span className="piece"></span>
                    </div>
                </div>
                
                <p className="p404">404</p>
                <p className="p404">404</p>
            </div>
            <div className="text">
                <article>
                    <p>Uh oh! Looks like you got lost. <br></br>Go back to the homepage if you dare!</p>
                    <Link to='/'><button>i dare!</button></Link>
                </article>
            </div>

        </div>
    </section>
    </>
);

export default NotFound;

