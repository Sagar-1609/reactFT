import React from "react";
import AnimeList from "./AnimeList";

const product_list = [
  {
    anime_name: "OFFICIAL NARUTO MERCHANDISE",
    description: "Women's pink Chibi Naruto Graphic Printed Oversized hoodie",
    Price: 1100,
    orginal_price: 1400,
  },
  {
    anime_name: "OFFICIAL NARUTO MERCHANDISE",
    description: "Men's Blue Ramen Lover Graphic Printed Oversized T-shirt",
    Price: 700,
    orginal_price: 900,
  },
  {
    anime_name: "OFFICIAL NARUTO MERCHANDISE",
    description: "Men's Gardenia Sensei Graphic Print Oversized T-shirt",
    Price: 700,
    orginal_price: 900,
  },

  {
    anime_name: "OFFICIAL NARUTO MERCHANDISE",
    description:
      " Women's Black Chibi Naruto Graphic Printed Oversized Short Top",
    Price: 800,
    orginal_price: 1200,
  },
  {
    anime_name: "OFFICIAL NARUTO MERCHANDISE",
    description: "Women's pink Chibi hinata Graphic Printed Oversized T-shirt",
    Price: 900,
    orginal_price: 1200,
  },
  {
    anime_name: "OFFICIAL NARUTO MERCHANDISE",
    description: "Women's pink Chibi hinata Graphic Printed Oversized T-shirt",
    Price: 900,
    orginal_price: 1200,
  },
];

export default function list() {
  return (
    <>
      {product_list.map((data) => (
        <AnimeList
          key={data.index}
          anime_name={data.anime_name}
          description={data.description}
          Price={data.Price}
          orginal_price={data.orginal_price}
          Image={data.Image}
        />
      ))}
    </>
  );
}
