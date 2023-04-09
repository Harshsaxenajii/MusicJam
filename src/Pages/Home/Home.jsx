import React, { useEffect, useState } from "react";
import Player from "../../components/Player";

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
  ]);
  const handleClick = (link) => {
    console.log(link);
    setSong(link);
  };
  return (
    <div>
      <div>this is home page</div>
      <div className="songData">
        {songsData.map((data) => (
          <div
            className="musicCard"
            key={data.name}
            style={{ cursor: "pointer" }}
            onClick={() => handleClick(data.musicSrc)}
          >
            <img src={data.cover} alt="" />
            <div>{data.name}</div>
            <div>{data.singer}</div>
          </div>
        ))}
      </div>
      <div>{song && <Player musicLink={song} />}</div>
    </div>
  );
};

export default Home;
