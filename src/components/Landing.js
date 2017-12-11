import React from 'react';

import './../styles/Landing.css';

const Landing = () => {
  return (
    <section id="landing_wrapper">
      <VideoLoader />

    </section>
  )
};

export default Landing;



const VideoLoader = () => {
  let vidPath = `/public/assets/video/tower_vid_1.mp4`;
  return (
    <div id="bg_video_loader">
      <p>asdfasdfasdfasdff</p>
      <video loop
             muted
             autoPlay
             className="bg_video_player"
             src="/public/assets/video/tower_vid_1.mp4"
             type="video/mp4">
      </video>
    </div>
  )
}
