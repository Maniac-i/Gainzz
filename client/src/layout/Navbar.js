import React from 'react';

const Navbar = () => {
    return (
        <section>
        <a className="menu-toggle rounded" href="#">
            <i className="fas fa-bars"></i>
        </a>
        <nav id="navbar navbar-default navbar-fixed-top">
            <ul className="navbar-fixed-top">
                <li className="navbar-fixed-top-item">
                    <a className="js-scroll-trigger" href="#">Home</a>
                </li>
                <li className="navbar-fixed-top-item">
                    <a className="js-scroll-trigger" href="#">Today</a>
                </li>
                <li className="navbar-fixed-top-item">
                    <a className="js-scroll-trigger" href="#">Month</a>
                </li>
                <li className="navbar-fixed-top-item">
                    <a className="js-scroll-trigger" href="#">Workouts</a>
                </li>
            </ul>
        </nav>
        </section>

    );
};

export default Navbar;
