import React, { useEffect, useState } from "react";
import Player from "../../components/Player";

const Home = () => {
  const [song, setSong] = useState("");
  const [songsData] = useState([
    {
      name: "Jeda Nasa",
      link: "https://res.cloudinary.com/dxzbdrvmn/video/upload/v1680929990/music%20application/Random%20Songs/Jeda_Nasha_fngkoe.mp3",
      singer: "qwerty",
    },
    {
      name: "patli kamariya",
      link: "https://res.cloudinary.com/dxzbdrvmn/video/upload/v1680929990/music%20application/Random%20Songs/Patli_Kamariya_Mori_Haye_Haye_hj2s74.mp3",
      singer: "qwerty",
    },
    {
      name: "Maan mare jaan",
      link: "https://res.cloudinary.com/dxzbdrvmn/video/upload/v1680929986/music%20application/Random%20Songs/Tu_Maan_Meri_Jaan_ffyzj4.mp3",
      singer: "qwerty",
    },
  ]);
  const handleClick = (link) => {
    setSong(link);
  };
  return (
    <div>
      <div>this is home page</div>
      {songsData.map((data) => (
        <div
          key={data.name}
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(data.link)}
        >
          <div>{data.name}</div>
          <div>{data.singer}</div>
        </div>
      ))}
      <div>{song && <Player musicLink={song} />}</div>
    </div>
  );
};

export default Home;
