import React from 'react'
import Hero from './Hero'


import { ActionMovies, HorrorMovies, ComedyMovies, AnimatedMovies, CrimeMovies } from '../Requests'
export default function Home() {
  
  return (
    <div className = "bg-[#141414]">
        
        <Hero /> 
        <ActionMovies  />
        <HorrorMovies  />
        <ComedyMovies  /> 
        <AnimatedMovies  />
        <CrimeMovies  />

    </div>
  )
}
