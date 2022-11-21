import React, { useEffect, useState } from "react";
import axios from "axios";
import profilePic from "../../Assets/profilePic1.jpg";
import { Link } from "react-router-dom";
import './Tvshow.scss'

const Tvshow = () => {
  const [tvShow, setTvShow] = useState([]);
  const [category, setCategory] = useState("airing_today");

  async function getTvShows(pageNumber = 1, type = "airing_today") {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${type}?api_key=d8ad769b9273eca9a573f35f9c5a3707&language=en-US&page=${pageNumber}`
    );
    // 
    setTvShow(data.results);
  }

  let pagesArray = new Array(10).fill("1").map((el, i) => i + 1);


  function getPages(number) {
    getTvShows(number, category);
  }

  function getCategory(e) {
    let type = e.target.id;
    getTvShows(1, type);
    setCategory(type);
  }

  async function getSearch(e) {
    let search = e.target.value;
    if(search != ''){
      let { data } = await axios.get(`
      https://api.themoviedb.org/3/search/tv?api_key=d8ad769b9273eca9a573f35f9c5a3707&language=en-US&page=1&query=${search}&include_adult=false`);
      setTvShow(data.results)
    }else{
      getTvShows()
    }

  }

  useEffect(() => {
    getTvShows();
  }, []);

  return (
    <>
      <div className="container">
        <div className="category text-center">
          <p className="sub-tilte">Search By Category</p>
          <div className="button-groub d-flex justify-content-center">
            <div
              onClick={getCategory}
              id="airing_today"
              className="btn btn-info mx-3 text-white d-flex align-items-center"
            >
              Airing Today
            </div>
            <div
              onClick={getCategory}
              id="on_the_air"
              className="btn btn-info mx-3 text-white d-flex align-items-center"
            >
              On The Air
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
          </div>
        </div>
        <div className="search-byname">
          <input
            onBlur={getSearch}
            type="text"
            className="form-control w-75  m-auto my-4 bg-transparent text-white"
            placeholder="Search By tvShow Name..."
          />
        </div>
        <div className="row my-5 g-3">
          {tvShow.map((tvShows, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-6">
              <Link to={"/tvShow-details/" + tvShows.id}>
                <div className="tvShow-item">
                  <img
                    src={
                      tvShows.poster_path == null
                        ? profilePic
                        : "https://image.tmdb.org/t/p/w500" + tvShows.poster_path
                    }
                    alt=""
                    className="w-100"
                  />
                  <h5>{tvShows.name}</h5>
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
}

export default Tvshow