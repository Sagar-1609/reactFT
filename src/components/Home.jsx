import React from "react";
import Header from "./Header";
import AnimeList from "./AnimeList";
import Anime from "./Anime";
import { useState } from "react";

export default function Home() {
  const [setInfo, getInfo] = useState("");
  console.log("search is :", setInfo);

  return (
    <>
      {""}
      <Header inputType="search" setData={getInfo} />

      <div class="coverimage">
        <div class="coverimage2"></div>
      </div>

      <div class="cover-image">
        <div class="poster1 poster"></div>
        <div class="poster2 poster"></div>
      </div>
      <div class="saleupdate">
        <h1>winter collection</h1>
      </div>

      <br />
      <br />

      <Anime />
      <AnimeList />
    </>
  );
}
