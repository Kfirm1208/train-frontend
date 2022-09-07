// rafce
import React from 'react'
import { Link } from 'react-router-dom'
const page1 = ({n, s}) => {
  return (

    <div className=" h-screen flex bg-yellow-500 text-white 
    flex-col justify-center 
    items-center">

      <h1>{n}</h1>
      <input type='text'
        onChange={e => s(e.target.value)}
        className="text-black px-4 rounded-full
      py-2 focus:outline-none" />

      <Link to={'/page2'}>
        <button className="bg-white text-black px-4 rounded-xl hover:bg-gray-800 hover:text-white">
          page 2
        </button>
      </Link>

      <Link to={'/page3'}>
        <button className="bg-white text-black px-4 rounded-xl hover:bg-gray-800 hover:text-white">
          page 3
        </button>
      </Link>
      
    </div>
  );
}

export default page1