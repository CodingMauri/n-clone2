import React from 'react'
import Main from './Main'
import { ActionMovies, HorrorMovies, ComedyMovies } from '../Requests'
export default function Home() {
  return (
    <div className = "bg-[#141414]">
        <Main /> 
        <ActionMovies />
        <HorrorMovies />
        <ComedyMovies /> 

    </div>
  )
}
