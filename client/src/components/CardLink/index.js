import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function CardLink(props) {

    return (
        <div className="cardlink mb-5 mb-lg-0"   style={props.style}>
            <div className="card-body">
                <Link to={"/" + props.link} className="btn text-white text-uppercase" style={{fontSize: '', backgroundColor: "#5f6975"}}>{props.title}</Link>
            </div>
        </div>
    )
}

export default CardLink;