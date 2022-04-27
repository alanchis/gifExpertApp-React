import React, { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({ category }) => {
//   const [images, setImages] = useState([]);

const state = useFetchGifs(category);
console.log(state.loading)








  return (

    <>
      <h3 className='animate__animated animate__backInRight'>{category}</h3>

      { state.loading && <p className="animate__animated animate__flash">Loading...</p> }

   
    <div className="card-grid">
      {state.data.map((img) => {
        return <GifGridItem 
            key={img.id} 
            {...img} />;
      })}
    </div>

    </>
  );
};

export default GifGrid;
