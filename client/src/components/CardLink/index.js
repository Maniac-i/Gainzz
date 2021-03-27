import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'
 

function CardLink(props) {

    return (
        <div className="card mb-5 mb-lg-0"   style={props.style}>
            <div className="card-body">
                <Link to={"/" + props.link} className="btn btn-dark text-uppercase">{props.title}</Link>
            </div>
        </div>
    )
}

export default CardLink;