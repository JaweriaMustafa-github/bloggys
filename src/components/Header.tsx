'use client'
import { useState , useEffect } from "react"
import Link from "next/link"
import React from 'react'
import { Button } from "./ui/button"

export default function Header() {
  const [currentDateTime , setCurrentDateTime] = useState(``)
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options : Intl.DateTimeFormatOptions = {
        weekday:'short',
        year:'numeric',
        month:'long',
        day:'numeric',
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
        hour12:false
      }
      setCurrentDateTime(now.toLocaleDateString('en-US' , options) + ' ' + now.toLocaleTimeString('en-US' , {hour12:false}))
    };
    updateDateTime();
    const interValid = setInterval(updateDateTime , 1000);
    return () => clearInterval(interValid)
  }, [])


  return (
    <header className="font-medium bg-sky-200 min-w-screen shadow-lg">
      <div className="container  flex flex-wrap items-center mx-auto p-2 flex-col md:flex-row">
        <div className="flex-1 text-black ">
          <span>
            {currentDateTime}
          </span>
        </div>

        <nav className="md:ml-auto flex flex-wrap items-center justify-center text-black">
          <Link href="/" className="mr-5 hover:text-blue-800 hover:underline transition-colors duration-300 transform ">Home</Link>
          <Link href="/" className="mr-5 hover:text-blue-800 hover:underline transition-colors duration-300 transform ">Blog</Link>
          <Link href="/about" className="mr-5 hover:text-blue-800 hover:underline transition-colors duration-300 transform ">About</Link>
          <Link href="/contact" className="mr-5 hover:text-blue-800 hover:underline transition-colors duration-300 transform ">Contact</Link>
        </nav>

        <Link target="_blank" href="https://www.linkedin.com/in/jaweria-mustafa-a727b22b5">
        <Button className="bg-blue-700 text-white hover:bg-blue-800 hover:underline">
          Linkedin
        </Button>
        </Link>
      </div>
    </header>
  )
}
