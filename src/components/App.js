import React, { useState, useEffect } from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos("dog");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // setSelectedVideo(response.data.items[0]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row"></div>
        <div className="eleven wide column">
          <VideoDetail video={selectedVideo} />
        </div>
        <div className="five wide column">
          <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default App;
