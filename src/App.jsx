import './App.css';
import {createBrowserRouter, RouterProvider, Navigate, createHashRouter} from 'react-router-dom'
import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode'
import { About, ContactForm, Home, Layout, Login, MovieDetails, Movies, Notfound, People, PersonDetails, Register, TvDetails, Tvshow } from './Components';
function App() {

  const [token, setToken] = useState(null)

  function saveUserData() {
    let token = localStorage.getItem('token')
    let savedUser = jwt_decode(token)
    setToken(savedUser)
  }

  useEffect(() => {
    if(localStorage.getItem('token') != null){
      saveUserData()
    }

  },[])

  function PrtoectRoutes(props){
    if(localStorage.getItem('token') == null){
      return <Navigate to='/login'/>
    }
    else {
      return props.children
    }
  }

  function logOut(){
    localStorage.removeItem('token')
    setToken(null)
    return <Navigate to='/login' />
  }
  let Routers = createHashRouter ([
    {path: '/', element: <Layout token={token} logout={logOut} /> , children: [
      {path:'home', element: <PrtoectRoutes><Home /></PrtoectRoutes>},
      {index: true, element:<PrtoectRoutes><Home /></PrtoectRoutes>},
      {path:'about', element: <PrtoectRoutes><About /></PrtoectRoutes>},
      {path:'movie-details/:id', element:<PrtoectRoutes><MovieDetails /></PrtoectRoutes>},
      {path:'tvshow-details/:id', element:<PrtoectRoutes><TvDetails /></PrtoectRoutes>},
      {path:'person-details/:id', element:<PrtoectRoutes><PersonDetails /></PrtoectRoutes>},
      {path:'movies', element:<PrtoectRoutes><Movies /></PrtoectRoutes>},
      {path:'contact-us', element:<PrtoectRoutes><ContactForm /></PrtoectRoutes>},
      {path:'*', element:<Notfound />},
      {path:'people', element: <PrtoectRoutes><People /></PrtoectRoutes>},
      {path:'tvshow', element: <PrtoectRoutes><Tvshow /></PrtoectRoutes>},
      {path:'/login', element:<Login saved={saveUserData} />},
      {path:'register', element:<Register />}
    ]},
  ])



  return (
    <RouterProvider router={Routers} />
  );
}

export default App;
