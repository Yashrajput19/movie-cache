import React,{useState} from 'react'
import MovieComponent from './MovieComponent'
import axios from 'axios';
const API_KEY = "3451fe25"


const Home = () => {

  const [searchQuery , setSearchQuery] = useState("");
  const [timeoutId,setTimeoutId] = useState();
  const [movieList , setMovieList] = useState([]);

  const fetchData = async (searchString)=>{
    const res = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`)
    setMovieList(res.data.Search);
  }
  const textChangeHandler =  (e) => {

    clearTimeout(timeoutId);
    setSearchQuery(e.target.value);
    const timeout = setTimeout(()=> fetchData(e.target.value) ,500);
    setTimeoutId(timeout);

  }

  return (
    <>
      <div className='flex justify-center gap-2 text-white p-5'>
          <input value={searchQuery} placeholder='Search for movies' onChange={textChangeHandler}
           className='bg-black text-white w-96 rounded border-2 h-10 p-5' />
        <button className='bg-sky-500 p-2 rounded'>Create Playlist</button>
        <button className='bg-red-600 p-2 rounded' >Log Out</button>
      </div>

      <div className='flex flex-row flex-wrap p-5 justify-evenly gap-[24px] text-white'>
        {
          movieList?.length? movieList.map((movie,index) => <MovieComponent key={index} movie={movie}/>) : "No Movie Search"
        }
      </div>
    </>
  )
}

export default Home