import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetails.scss'
import profilePic from '../../Assets/profilePic1.jpg'

const PersonDetails = () => {
  let {id} = useParams()

  const [person, setPerson] = useState(null)

  async function getMoviesDetails(personId) {
    let {data} = await axios.get(`https://api.themoviedb.org/3/person/${personId}?api_key=d8ad769b9273eca9a573f35f9c5a3707&language=en-US`)
    setPerson(data)
  }

  useEffect(() => {
    getMoviesDetails(id)
  }, [])
  
  return (<>
    {person != null ?
      <div className='container'>
        <div className="row py-5 gy-4">
          <div className="col-lg-4 col-md-6">
          <img src={person.profile_path == null ? profilePic : 'https://image.tmdb.org/t/p/w500' + person.profile_path} alt="" className='w-100'/>
          </div>
          <div className="col-lg-8 col-md-6">
            <h2 className='mb-5'>{person.name}</h2>
            <p className='sub-tilte'>Work Fields : {person.known_for_department}</p>
            <p className='my-3'>{person.gender == 2 ? 'Male' : 'Female'}</p>
            <p className='my-3'>BirthDate : {person.birthday}</p>
            <p className='my-3'>Place of Birth : {person.place_of_birth}</p>
            {person.deathday != null ? <p className='my-3'>Death Date : {person.deathday}</p> : '' }
            <p className='my-3'>Popularity : {person.popularity}</p>
            <p className='my-3'>{person.biography}</p>
          </div>
        </div>
      </div> : '' }
    </>)
}

export default PersonDetails