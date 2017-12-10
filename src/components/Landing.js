import React from 'react';

const Landing = () => {
  return (
    <section id="landing_wrapper">
      <VideoLoader />
    </section>
  )
};

export default Landing;




const VideoLoader = () => {
  return (
    <div id="bg_video_loader">
      <video loop muted autoPlay poster="img/videoframe.jpg" className="bg_video_player">
        <source src="./../assets/video/tower_vid_1.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
