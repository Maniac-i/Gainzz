import React from 'react';
import './style.css'


function HomepageBtn(props) {

    return (
        <div className="card mb-5 mb-lg-0"   style={props.style}>
            <div className="card-body">
                <a href="/`{props.link}`" className="btn btn-dark text-uppercase">{props.title}</a>
            </div>
        </div>
    )
}

export default HomepageBtn;