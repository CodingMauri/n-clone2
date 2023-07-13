import React from 'react'
import {motion} from "framer-motion"
export default function Loading() {

    const spinnerVariants = {
        start :{
            rotate: 0
        },

        end : {
            rotate:360
        }
    }

    const spinnerTransition = {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      };
  return (
    <div className="flex items-center justify-center h-screen">
    <motion.div
      className="w-10 h-10 border-4 border-t-4 border-red-700 rounded-full"
      variants = {spinnerVariants}
      animate = "end"
      transition={spinnerTransition}
    ></motion.div>
  </div>  )
}
