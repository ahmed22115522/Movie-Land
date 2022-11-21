import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './MovieDetails.scss'
import { HiStar } from "react-icons/hi";

const TvDetails = () => {
  let {id} = useParams()

  const [tvShow, setTvShow] = useState(null)

  async function getMoviesDetails(tvshowId) {
    let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${tvshowId}?api_key=d8ad769b9273eca9a573f35f9c5a3707&language=en-US`)
    setTvShow(data)
  }

  useEffect(() => {
    getMoviesDetails(id)
  }, [])
  
  return (<>
    {tvShow != null ?
      <div className='container'>
        <div className="row py-5 gy-4">
          <div className="col-lg-4 col-md-6">
          <img src={'https://image.tmdb.org/t/p/w500' + tvShow.poster_path} alt="" className='w-100'/>
          </div>
          <div className="col-lg-8 col-md-6">
            {tvShow.networks.map((network,i) => 
                          <div key={i} className="img-container text-center my-3">
                          <img  className='w-25' src={'https://image.tmdb.org/t/p/w500' + network.logo_path}  />
                        </div>
            )}
            <h2>{tvShow.name}</h2>
            <p className='sub-tilte'>{tvShow.tagline}</p>

            {tvShow.genres.map((el,i) => 
                <span key={i} className="badge bg-info mb-3 me-2 px-4 py-2 fw-light text-white fs-6">{el.name}</span>
            )}
            <p className='my-3'>Vote : {tvShow.vote_average.toPrecision(2)} {tvShow.vote_average.toPrecision(2) >= 7 ? <HiStar className='fs-5 text-warning' /> : ''} </p>
            <p className='my-3'>Vote Count : {tvShow.vote_count}</p>
            <p className='my-3'>Popularity : {tvShow.popularity}</p>
            <p className='my-3'>Release Date : {tvShow.first_air_date}</p>
            <p className='my-3'>{tvShow.overview}</p>
          </div>
        </div>
      </div> : '' }
    </>)
}

export default TvDetails