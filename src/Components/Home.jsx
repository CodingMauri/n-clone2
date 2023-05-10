import React from 'react'
import Hero from './Hero'


import { ActionMovies, HorrorMovies, ComedyMovies, AnimatedMovies, CrimeMovies } from '../Requests'
export default function Home() {
  
  return (
    <div className = "bg-[#141414]">
        
        <Hero /> 
        <ActionMovies  rowId = "1" />
        <HorrorMovies rowId = "2" />
        <ComedyMovies rowId = "3" /> 
        <AnimatedMovies rowId = "4" />
        <CrimeMovies rowId = "5" />

    </div>
  )
}
