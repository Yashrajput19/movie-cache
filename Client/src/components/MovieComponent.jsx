import React from 'react'
import { useNavigate } from "react-router-dom";
const MovieComponent = (props) => {

  const {Title , Year ,imdbID ,Type ,Poster} = props.movie;
  const navigate = useNavigate();

  return (
    <div className='flex flex-col p-2.5 w-[280px] 
    shadow-[0_3px_10px_0_rgba(170,170,170)] bg-white cursor-pointer' onClick={() =>navigate(`/movie/${imdbID}`)}>
        
        <img src={Poster} 
        alt="Movie Image" className='object-fill h-[362px]'/>

        <span className='text-[18px] font-semibold
         text-black my-[15px] text-ellipsis overflow-hidden'>
            {Title}
        </span>

        <div className='flex flex-row justify-between'>
            <span className='text-[16px] font-semibold
         text-black capitalize' >Year : {Year}</span>
            <span className='text-[16px] font-semibold
         text-black capitalize' >Type: {Type}</span>
            
        </div>

        <div className='flex justify-center p-2 mt-2 bg-red-500 rounded text-white'>
          <button>Add to Playlist</button>
        </div>
    </div>
  )
}

export default MovieComponent;