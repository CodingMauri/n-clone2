import React ,{useState,useEffect} from 'react'
import Slider from "react-slick"
import { UserAuth } from '../context/AuthContext'
import {db} from "../firebase"
import {motion} from 'framer-motion'
import {updateDoc, doc, onSnapshot} from 'firebase/firestore'
import ExpandedMovie from './ExpandedMovie'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SavedShows = () => {
    const [movies,setMovies] = useState([])
    const {user} = UserAuth()
    const [expand, setExpand] = useState(null);

    useEffect(() => {
        onSnapshot(doc(db,'users',`${user?.email}`),(doc) => {
            setMovies(doc.data()?.SavedShows)
        })
    },[user?.email])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1650,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
            },
          },
          {
            breakpoint: 1250,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ],
      };
  return (
      <>
      <h2 className = "text-white font-bold md:text-xl p-4"> My Shows </h2>
    <div className="relative flex items-center">
    <Slider {...settings} className="w-full h-full">
      {movies.map((item, id) => {
          return (
              <motion.div
              whileHover={{ transition: 1, scale: 0.9 }}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:w-[290px] 2xl:w-[300px] inline-block cursor-pointer relative p-2 "
              onMouseEnter={() => setExpand(item)}
              onMouseLeave={() => setExpand(null)}
              >
              {expand === item && (
                  <ExpandedMovie item={item}  />
                  )}
              <img
                className="w-[95%]  h-auto block overflow-hidden m-1"
                src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                alt={item?.title}
                id={item.id}
                />
      
              
            </motion.div>
        );
    })}
    </Slider>
  </div>
    </>
  )
}

export default SavedShows