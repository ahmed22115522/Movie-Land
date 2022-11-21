import React, {useState, useEffect} from 'react'
import './Home.scss'
import axios from 'axios'
import profilePic from '../../Assets/profilePic1.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from 'react-router-dom'

const Home = () => {

  const [carousel, setCarousel] = useState([])
  const [movies, setMovies] = useState([])
  const [tvshow, setTvshow] = useState([])
  const [people, setPeople] = useState([])

async  function getData(type, func, limit) {
    let  {data} = await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=d8ad769b9273eca9a573f35f9c5a3707`)
    func(data.results.slice(0 , limit))
  }

useEffect(() => {
  getData('movie',setCarousel,12)
  getData('movie',setMovies,10)
  getData('tv',setTvshow,10)
  getData('person',setPeople,10)
}, [])


  return (<>
  <div className="carousel-container">
  <div className="container">
  <h2 className=' font-monospace'>OUR LATEST MOVIES</h2>
  </div>
    <OwlCarousel items={6} autoplay={true} loop autoplayTimeout={2500} autoplayHoverPause={true} responsiveClass={true} className='owl-theme container pt-2 mb-0 text-center' >
      {carousel.map((movie,i) => 
          <div key={i} className='item mx-1'>
            <Link to={'/movie-details/' + movie.id }>
              <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="" />
            </Link>
            
          </div>
      )}
    </OwlCarousel>
  </div>

  <div className="container">
    {/* Movies Start */}
      <div className="row my-5 g-3">

        <div className="col-md-4 col-12 d-flex flex-column justify-content-center">

          <div className="title-border w-25"></div>
          <h2 className='pt-3'>Trending Movies <br /> To Watch Right Now</h2>
          <h3 className='fs-6 py-3 sub-tilte'>Most Watched Movies by Days</h3>
          <div className="title-border"></div>

        </div>

        {movies.map((movie,i) => 
                <div key={i} className="col-md-2 col-6">
                  <Link to={'/movie-details/' + movie.id }>
                    <div className="movie position-relative">
                      <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="" className='w-100'/>
                      <h2 className='fs-6 py-2'>{movie.title}</h2>
                      <div className="rating text-center bg-info position-absolute top-0 end-0">{movie.vote_average.toPrecision(2)}</div>
                    </div>
                  </Link>


              </div>
              )}

      </div>
          {/* Tv Shows Start */}
      <div className="row my-5 g-3">

        
        <div className="col-md-4 col-12 d-flex flex-column justify-content-center">

          <div className="title-border w-25"></div>
          <h2 className='pt-3'>Trending Tvshows <br /> To Watch Right Now</h2>
          <h3 className='fs-6 py-3 sub-tilte'>Most Watched Tvshow by Days</h3>
          <div className="title-border"></div>

        </div>

        {tvshow.map((tv,i) => 
                <div key={i} className="col-md-2 col-6">
                  <Link to={'/tvshow-details/' + tv.id }>
                    <div className="movie position-relative">
                      <img src={'https://image.tmdb.org/t/p/w500' + tv.poster_path} alt="" className='w-100'/>
                      <h2 className='fs-6 py-2'>{tv.name}</h2>
                    <div className="rating text-center bg-info position-absolute top-0 end-0">{tv.vote_average.toPrecision(2)}</div>
                    </div>
                  </Link>

              </div>
              )}

      </div>
      {/* People Start */}
      <div className="row my-5 g-3">
        
        
        <div className="col-md-4 col-12 d-flex flex-column justify-content-center">

          <div className="title-border w-25"></div>
          <h2 className='pt-3'>Trending People <br /> To Watch Right Now</h2>
          <h3 className='fs-6 py-3 sub-tilte'>Most Watched People by Days</h3>
          <div className="title-border"></div>

        </div>

        {people.map((person,i) => 
                <div key={i} className="col-md-2 col-6">
                  <Link to={'/person-details/' + person.id }>
                    <div className="movie position-relative">
                      <img src={person.profile_path == null ? profilePic : 'https://image.tmdb.org/t/p/w500' + person.profile_path} alt="" className='w-100'/>
                      <h2 className='fs-6 py-2'>{person.name}</h2>
                    </div>
                  </Link>

              </div>
              )}

      </div>
  </div>

</>)
}

export default Home

// d8ad769b9273eca9a573f35f9c5a3707

/*
// {'https://image.tmdb.org/t/p/w500' + person.profile_path}
{person.profile_path == null ? profilePic : 'https://image.tmdb.org/t/p/w500' + person.profile_path}
{array.map((ele) => {
  
})}

*/