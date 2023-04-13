import React, { useEffect, useState } from "react";
import "./People.scss";
import axios from "axios";
import profilePic from "../../Assets/profilePic1.jpg";
import { Link } from "react-router-dom";
const People = () => {

  let pagesArray = new Array(10).fill("1").map((el, i) => i + 1);

  const [person, setPerson] = useState([]);
  const [searched, setSearched] = useState('Trinding')

  async function getData(pagenNum = 1) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/person/day?api_key=d8ad769b9273eca9a573f35f9c5a3707&page=${pagenNum}`
    );
    setPerson(data.results);
    setSearched('Trinding')
  }

  async function getDataCategories(pagenNum = 1) {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/person/popular?api_key=d8ad769b9273eca9a573f35f9c5a3707&language=en-US&page=${pagenNum}`
    );
    setPerson(data.results);
    setSearched('Popular')
  }


  function getPages(number) {
    getData(number);
  }

  function getCategory(e) {
    getDataCategories(1);
  }

  async  function getSearch(e){
    let name = e.target.value
    if(name != '') {
      let {data} = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=d8ad769b9273eca9a573f35f9c5a3707&language=en-US&query=${name}&page=1&include_adult=false`)
      setPerson(data.results)
    }else{
      getData();
    }

  }


  useEffect(() => {
    getData();
  }, []);

  return (<>
    <div className="container">
      
    <div className="button-groub d-flex justify-content-center">
            <div
              onClick={() => getData(1)}
              id="trending"
              className="btn btn-info mx-3 text-white d-flex align-items-center"
            >
              Trinding
            </div>
            <div
              onClick={getCategory}
              id="popular"
              className="btn btn-info mx-3 text-white d-flex align-items-center"
            >
              Popular
            </div>
          </div>

      <div className="search-byname">
        <input
        onChange={getSearch}
          type="text"
          className="form-control w-75  m-auto my-5 bg-transparent text-white"
          placeholder="Search By Person Name..."
        />
      </div>

    <p className="sub-tilte text-center">Most {searched} People Right Now </p>

      <div className="row my-5 g-3">
          {person.map((person, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-6">
              <Link to={"/person-details/" + person.id}>
                <div className="movie-item">
                  <img
                    src={
                      person.profile_path == null
                        ? profilePic
                        : "https://image.tmdb.org/t/p/w500" + person.profile_path
                    }
                    alt=""
                    className="w-100"
                  />
                  <h5>{person.name}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>


      <div className="pages d-flex justify-content-center mb-3">
        <div className="btn-group" role="group" aria-label="Basic example">
          {pagesArray.map((page) => (
            <button
              onClick={() => getPages(page)}
              key={page}
              type="button"
              className="btn btn-primary"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
    </>);
};

export default People;
