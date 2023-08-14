import React from "react";
import "./Video.scss";
import icons from "../../until/icons";
import video from "../../assets/image/video.webp";
import channel from "../../assets/image/channel.jpg";

const Video = () => {
  const { AiOutlineEye } = icons;
  return (
    <div className="videos">
      <div className="video-top">
        <img src={video} alt="" className="video-image" />
        {/* <span>05:30</span> */}
      </div>
      <div className="content">
        <div className="video-title mb-2">
          Create app in 5 minutes #made by Chintu
        </div>
        <div className="video-details mb-2">
          <span>
            <AiOutlineEye />
            5m Views
          </span>
          &nbsp;
          <span>5 days ago</span>
        </div>
        <div className="video-channel">
          <img src={channel} alt="" className="channel-image me-2" />
          <span>Rainbow Hat Jr</span>
        </div>
      </div>
    </div>
  );
};

export default Video;
