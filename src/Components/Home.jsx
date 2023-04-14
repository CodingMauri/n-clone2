import React from 'react'
import Main from './Main'
import { ActionMovies, HorrorMovies, ComedyMovies, AnimatedMovies } from '../Requests'
export default function Home() {
  return (
    <div className = "bg-[#141414]">
        <Main /> 
        <ActionMovies rowId = "1" />
        <HorrorMovies rowId = "2" />
        <ComedyMovies rowId = "3" /> 
        <AnimatedMovies rowId = "4" />

    </div>
  )
}
