import React, { useEffect, useState } from "react";
import "./Movies.scss";
import axios from "axios";
import profilePic from "../../Assets/profilePic1.jpg";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [category, setCategory] = useState("now_playing");

  async function getMovies(pageNumber = 1, type = "now_playing") {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=d8ad769b9273eca9a573f35f9c5a3707&language=en-US&page=${pageNumber}&region=US`
    );
    setMovie(data.results);
  }

  let pagesArray = new Array(10).fill("1").map((el, i) => i + 1);

  function getPages(number) {
    getMovies(number, category);
  }

  function getCategory(e) {
    let type = e.target.id;
    getMovies(1, type);
    setCategory(type);
  }

  async function getSearch(e) {
    let search = e.target.value;
    if(search != ''){
      let { data } = await axios.get(`
      https://api.themoviedb.org/3/search/movie?api_key=d8ad769b9273eca9a573f35f9c5a3707&language=en-US&query=${search}&page=1&include_adult=false`);
      setMovie(data.results)
    }else{
      getMovies()
    }

  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="container">
        <div className="category text-center">
          <p className="sub-tilte">Search By Category</p>
          <div className="button-groub d-flex justify-content-center">
            <div
              onClick={getCategory}
              id="now_playing"
              className="btn btn-info mx-3 text-white d-flex align-items-center"
            >
              Now Playing
            </div>
            <div
              onClick={getCategory}
              id="popular"
              className="btn btn-info mx-3 text-white d-flex align-items-center"
            >
              Popular
            </div>
            <div
              onClick={getCategory}
              id="top_rated"
              className="btn btn-info mx-3 text-white d-flex align-items-center"
            >
              Top Rated
            </div>
            <div
              onClick={getCategory}
              id="upcoming"
              className="btn btn-info mx-3 text-white d-flex align-items-center"
            >
              Upcoming
            </div>
          </div>
        </div>
        <div className="search-byname">
          <input
            onBlur={getSearch}
            type="text"
            className="form-control w-75  m-auto my-4 bg-transparent text-white"
            placeholder="Search By Movie Name..."
          />
        </div>
        
        <div className="row my-5 g-3">
          {movie.map((movies, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-6">
              <Link to={"/movie-details/" + movies.id}>
                <div className="movie-item">
                  <img
                    src={
                      movies.poster_path == null
                        ? profilePic
                        : "https://image.tmdb.org/t/p/w500" + movies.poster_path
                    }
                    alt=""
                    className="w-100"
                  />
                  <h5>{movies.title}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="pages d-flex justify-content-center mb-3">
        <div className="btn-group" role="group" aria-label="Basic example">
          {pagesArray.map((page) => (
            <button
              key={page}
              onClick={() => getPages(page)}
              type="button"
              className="btn btn-primary"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
