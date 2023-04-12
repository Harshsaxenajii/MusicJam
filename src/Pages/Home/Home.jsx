import React, { useEffect, useState } from "react";
import Player from "../../components/Player";
import Navbar from "../../components/Navbar";
import search_logo from "./img/search.png";
import user_logo from "./img/logo.png";

const Home = () => {
  const [currentSongIndex, setSongIndex] = useState(0);
  const [songs] = useState([
    {
      id: 0,
      name: "Despacito",
      singer: "Luis Fonsi",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
      musicSrc:
        "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
    },
    {
      id: 1,
      name: "Bedtime Stories",
      singer: "Jay Chou",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",
      musicSrc:
        "http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3",
    },
    {
      id: 2,
      name: "Dorost Nemisham",
      singer: "Sirvan Khosravi",
      cover:
        "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
      musicSrc:
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
    },
    {
      id: 3,
      name: "Jeda Nasa",
      singer: "qwerty",
      cover:
        "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
      musicSrc:
        "https://res.cloudinary.com/dxzbdrvmn/video/upload/v1680929990/music%20application/Random%20Songs/Jeda_Nasha_fngkoe.mp3",
    },
    {
      id: 4,
      name: "patli kamariya",
      singer: "qwerty",
      musicSrc:
        "https://res.cloudinary.com/dxzbdrvmn/video/upload/v1680929990/music%20application/Random%20Songs/Patli_Kamariya_Mori_Haye_Haye_hj2s74.mp3",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
    },

    {
      id: 5,
      name: "Maan mare jaan",
      singer: "qwerty",
      musicSrc:
        "https://res.cloudinary.com/dxzbdrvmn/video/upload/v1680929986/music%20application/Random%20Songs/Tu_Maan_Meri_Jaan_ffyzj4.mp3",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",
    },
  ]);

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
          <div className="newNav">
            <div className="search_bar">
              <input type="text" placeholder="Search" />
              <button className="search_button">
                <img src={search_logo} alt="search" />
              </button>
            </div>
            <div className="user_info">
              <span>Harsh</span>
              <div className="user_logo_box">
                <img src={user_logo} alt="logo" />
              </div>
            </div>
          </div>
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

          <div>
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
  );
};

export default Home;
