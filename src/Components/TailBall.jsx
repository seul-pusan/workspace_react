import React from 'react'
const BALLCOLOR = [
    "bg-red-300",
    "bg-yellow-300",
    "bg-orange-300",
    "bg-green-300" , 
    "bg-sky-300"
  ]

export default function TailBall({n})  {
  return (

    <div className={`w-20 h-20 rounded-full
                    text-xl font-bold
                    text-gray-700 ${BALLCOLOR[Math.floor(n/10)]}
                    m-2 
                    flex justify-center items-center`}>
      {n}
    </div>
  )
}

