import React from "react";
import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const {data:images, loading} = useFetchGifs(category);



  //getGifs();
  return (
    <>
      <h3>{category}</h3>
      { loading && <p>Loading</p> }
    {images.map((image) => (
      <GifGridItem key={image.id} {...image} />
    ))}

    </>
  );
};

export default GifGrid;
