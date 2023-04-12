import React, { useEffect, useState } from "react";
import Player from "../../components/Player";
import Navbar from "../../components/Navbar";
import TopNav from "../../components/TopNav";
import { songs } from "../../Songs";
import { AiOutlineHeart } from "react-icons/ai";
const fav = [3, 5, 7, 8];

const Home = () => {
  const [currentSongIndex, setSongIndex] = useState(0);
  const handleClick = (index) => {
    console.log(index);
    setSongIndex(index);
  };
  return (
    <div className="parentClass">
      <div className="mainDiv">
        <div className="mainNav">
          <Navbar />
        </div>
        <div className="maincont">
          <TopNav />
          <h4>Top Songs</h4>
          <div className="songData">
            {songs.map((data) => (
              <div
                className="musicCard"
                key={data.id}
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(data.id)}
              >
                <img className="img_cover" src={data.cover} alt="" />

                <div className="song_name">{data.name}</div>
                <div className="artist">{data.singer}</div>
              </div>
            ))}
          </div>

          <div></div>
          <div className="morecont">
            <div className="favbox">
              <h4>Liked</h4>
              <div className="imorecont favData fav">
                {songs
                  .filter((song) => {
                    return fav.includes(song.id);
                  })
                  .map((data) => (
                    <div className="favourite">
                      <div className="Datainfo">
                        <AiOutlineHeart className="ultraSmallLogo" />
                        <img className="favImg" src={data.cover} alt="" />
                        <div>{data.name}</div>
                      </div>

                      <div>{data.singer}</div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="playerbox">
              <h4>Now Playing</h4>

              <div className="imorecont player">
                {songs && (
                  <Player
                    currentSongIndex={currentSongIndex}
                    setSongIndex={setSongIndex}
                    musicLink={songs[currentSongIndex].musicSrc}
                    songs={songs}
                    songsImg={songs[currentSongIndex].cover}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
