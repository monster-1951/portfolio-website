'use client'
import React from 'react'
import { CirclesWithBar } from "react-loader-spinner";

const loading = () => {
  const color = "#ff3131"
  return (
    <div className='glass w-screen h-[90vh] flex justify-center items-center'>
      <CirclesWithBar
            height="100"
            width="100"
            color={color}
            outerCircleColor={color}
            innerCircleColor={color}
            barColor={color}
            ariaLabel="circles-with-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
    </div>
  )
}

export default loading