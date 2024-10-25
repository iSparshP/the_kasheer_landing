'use client'

import { useEffect, useRef } from 'react'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { Cloudinary } from 'cloudinary-core'

const cloudinary = new Cloudinary({ cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME });

export function LandingPageComponent() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75 // Slow down the video playback
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-h-full min-w-full object-cover"
      >
        <source src={cloudinary.url('https://res.cloudinary.com/dvp7ffvub/video/upload/v1729858844/12322365_2560_1440_25fps_ducnvt.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-white">
        <h1 className="mb-4 text-6xl font-bold tracking-wider animate-fade-in-up bg-shadow">
          The Kasheer
        </h1>
        <div className="mb-8 flex space-x-8 text-3xl animate-fade-in-up animation-delay-300">
          <span className="font-['Noto_Sans_Devanagari'] bg-shadow">कश्मीर</span>
          <span className="font-['Noto_Nastaliq_Urdu'] bg-shadow">کٔشِیر</span>
          <span className="font-['Noto_Nastaliq_Urdu'] bg-shadow">کشمیر</span>
        </div>
        <p className="max-w-2xl text-center text-xl animate-fade-in-up animation-delay-600">
          Bridging hearts with the spirit of Kasheer — where nature, culture, & warmth unite us all
        </p>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-6 animate-fade-in-up animation-delay-1200">
        <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-110">
          <Facebook size={32} />
          <span className="sr-only">Facebook</span>
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-110">
          <Instagram size={32} />
          <span className="sr-only">Instagram</span>
        </a>
        <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300 transform hover:scale-110">
          <Twitter size={32} />
          <span className="sr-only">Twitter</span>
        </a>
      </div>
    </div>
  )
}