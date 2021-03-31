import React from 'react';
import { Link } from 'react-router-dom'
 
function BroCard(props) {
  return(

    <div className="bro card float-left" style={{width: 18 + "rem"}}>
  <img className="card-img-top" src={props.thumbnail} alt="Card cap" />
  <div className="card-body">
    <div class="text-center mb-3">
    <Link href={"https://www.youtube.com/watch?v=" + props.videoId}className="btn btn-outline-dark btn-small">WATCH</Link>
    </div>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
  </div>
</div>
  )
}

export default BroCard;