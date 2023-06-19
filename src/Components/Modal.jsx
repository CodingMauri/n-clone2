import React from 'react'
import { MdNightlightRound } from 'react-icons/md'

function Modal({open,item}) {


    if(!open) return null
  return (
      
    <div className = "w-full h-[%50] flex-row justify-center items-center rounded-lg ">
        <div className = "w-full">
            <img src = {`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt = {item.title}/>
        </div>
    </div>
  )
}

export default Modal