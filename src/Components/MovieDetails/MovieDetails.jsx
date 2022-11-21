import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetails.scss'
import { HiStar } from "react-icons/hi";

const MovieDetails = () => {
  let {id} = useParams()

  const [movie, setMovie] = useState(null)

  async function getMoviesDetails(movieId) {
    let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d8ad769b9273eca9a573f35f9c5a3707`)
    setMovie(data)
  }

  useEffect(() => {
    getMoviesDetails(id)
  }, [])
  
  return (<>
    {movie != null ?
      <div className='container'>
        <div className="row py-5 gy-4">
          <div className="col-lg-4 col-md-6">
          <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="" className='w-100'/>
          </div>
          <div className="col-lg-8 col-md-6">
            <h2>{movie.title}</h2>
            <p className='sub-tilte'>{movie.tagline}</p>

            {movie.genres.map((el,i) => 
                <span key={i} className="badge bg-info mb-3 me-2 px-4 py-2 fw-light text-white fs-6">{el.name}</span>
            )}
            <p className='my-3'>Vote : {movie.vote_average.toPrecision(2)} {movie.vote_average.toPrecision(2) >= 7 ? <HiStar className='fs-5 text-warning' /> : ''} </p>
            <p className='my-3'>Vote Count : {movie.vote_count}</p>
            <p className='my-3'>Popularity : {movie.popularity}</p>
            <p className='my-3'>Release Date : {movie.release_date}</p>
            <p className='my-3'>{movie.overview}</p>
          </div>
        </div>
      </div> : '' }
    </>)
}

export default MovieDetails