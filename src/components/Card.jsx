import { Text } from "@chakra-ui/react";
import React from "react";


const getPosterUrl=(posterPatch)=>{
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPatch}`
}

const Card = ({ title, id, overview, poster_path }) => {
  
  return (
    <>
      <figure>
        <Text color="gray.900">{title}</Text>
        <img src={getPosterUrl(poster_path)} alt="" />
        <Text color="yellow.500">{overview}</Text>
      </figure>
    </>
  );
};

export default Card;
