import React, { useState, useEffect } from "react";
import Jumbotron from "../../components/Jumbotron/index";
import BroCard from '../../components/BroCard/index';
import API from "../../utils/API";

function Broscience() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos()
  }, [])

  function loadVideos() {

    API.broscience()
      .then((res) => {
       let allVideos = res.data.items;
       console.log(allVideos)
        setVideos(allVideos);
        console.log(videos);
      })
      .catch((err) => console.log(err))
  }

  return(
    <div>
    <Jumbotron title="Bro Science" />
    {videos.map((video) => (
        <BroCard
          videoId={video.id.videoId}
          title={video.snippet.title}
          description={video.snippet.description}
          thumbnail={video.snippet.thumbnails.high.url}
          key={video.etag}
          
        />
      ))}
    </div>

  )
}

export default Broscience;