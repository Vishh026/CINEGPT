import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptRecommendations from './GptRecommendations'
import { Main_Container } from "../utils/Constants"

const GptSearch = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        className="absolute inset-0 z-80 w-full h-full object-cover opacity-40"
        src={Main_Container}
        alt="background"
      />

      {/* Foreground Content */}
      <div className="absolute top-[20%] w-full flex flex-col items-center z-100">
        <GptSearchbar />
        <GptRecommendations />
      </div>
    </div>
  )
}

export default GptSearch
