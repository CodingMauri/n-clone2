import React from 'react'
import MovieCarousel from "./MovieCarousel"
export default function SearchedMovies({SearchedMovies}) {

  return (
    <div>
        <h2 className = "text-white font-bold text-2xl mb-4">Search Results</h2>
        <MovieCarousel>

        </MovieCarousel>
      
    </div>
  )
}
