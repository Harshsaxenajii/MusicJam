import React, { useEffect, useState } from "react";
import Player from "../../components/Player";
import Navbar from "../../components/Navbar";
import search_logo from "./img/search.png";
import user_logo from "./img/logo.png";

const Home = () => {
  const [song, setSong] = useState("");
  const [songsData] = useState([
    // {
    //   name: "Jeda Nasa",
    //   link: "https://res.cloudinary.com/dxzbdrvmn/video/upload/v1680929990/music%20application/Random%20Songs/Jeda_Nasha_fngkoe.mp3",
    //   singer: "qwerty",
    // },
    // {
    //   name: "patli kamariya",
    //   link: "https://res.cloudinary.com/dxzbdrvmn/video/upload/v1680929990/music%20application/Random%20Songs/Patli_Kamariya_Mori_Haye_Haye_hj2s74.mp3",
    //   singer: "qwerty",
    // },
    // {
    //   name: "Maan mare jaan",
    //   link: "https://res.cloudinary.com/dxzbdrvmn/video/upload/v1680929986/music%20application/Random%20Songs/Tu_Maan_Meri_Jaan_ffyzj4.mp3",
    //   singer: "qwerty",
    // },
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg",
      musicSrc:
        "http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3",
    },
    {
      name: "Bedtime Stories",
      singer: "Jay Chou",
      cover:
        "http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg",
      musicSrc:
        "http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3",
    },
    {
      name: "Dorost Nemisham",
      singer: "Sirvan Khosravi",
      cover:
        "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
      musicSrc:
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
    },
    {
      name: "Dorost Nemisham",
      singer: "Sirvan Khosravi",
      cover:
        "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
      musicSrc:
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
    },
    {
      name: "Dorost Nemisham",
      singer: "Sirvan Khosravi",
      cover:
        "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
      musicSrc:
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
    },
    {
      name: "Dorost Nemisham",
      singer: "Sirvan Khosravi",
      cover:
        "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
      musicSrc:
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
    },
    {
      name: "Dorost Nemisham",
      singer: "Sirvan Khosravi",
      cover:
        "https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg",
      musicSrc:
        "https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3",
    },
  ]);
  const handleClick = (link) => {
    console.log(link);
    setSong(link);
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
            {songsData.map((data) => (
              <div
                className="musicCard"
                key={data.name}
                style={{ cursor: "pointer" }}
                onClick={() => handleClick(data.musicSrc)}
              >
                <img className="img_cover" src={data.cover} alt="" />

                <div className="song_name">{data.name}</div>
                <div className="artist">{data.singer}</div>
              </div>
            ))}
          </div>
          <div className="morecont">
            <div className="favbox">
              <h4>Liked</h4>
              <div className="imorecont fav"></div>
            </div>
            <div className="playerbox">
              <h4>Now Playing</h4>
              <div className="imorecont player"></div>
            </div>
            <div>{song && <Player musicLink={song} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
