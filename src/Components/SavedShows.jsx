import React ,{useState,useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'
import {db} from "../firebase"
import { doc, onSnapshot} from 'firebase/firestore'
import MovieCarousel from './MovieCarousel'

const SavedShows = () => {
    const [savedMovies,setSavedMovies] = useState([])
    const {user} = UserAuth()

    useEffect(() => {
        onSnapshot(doc(db,'users',`${user?.email}`),(doc) => {
            setSavedMovies(doc.data()?.savedMovies)
        })
    },[user?.email])

   
  return (
      <div className = "w-full ">


\    <MovieCarousel movies = {savedMovies}  />
    </div>
  )
}

export default SavedShows