import React from 'react'
import { teamMembers } from '../data/teamMembers'

const TeamMembers = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto flex justify-center flex-wrap gap-6 place-items-center">
        {teamMembers.map(({ id, img, name, designation,about }) => (
          <div
            key={id}
            className="relative w-[235px] h-[420px] rounded-xl overflow-hidden shadow-lg group"
          >
            {/* Image */}
            <img
              src={img}
              alt={name}
              className="w-full h-[300px] object-cover"
            />

            {/* Default Card Content */}
            <div className="flex flex-col justify-center ml-2  pt-10">
              <h3 className="text-lg font-semibold text-[#80bf1e]">{name}</h3>
              <p className="text-gray-600 text-sm">{designation}</p>
            </div>

            {/* Hover Overlay (custom text) */}
            <div
              className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out flex items-end"
              style={{
                background:
                  'linear-gradient(1.05deg, #80bf1e 36.92%, rgba(96,195,173,0) 92.87%)',
              }}
            >
              <div className="p-6 text-white">
                <p className="text-sm font-medium">
                  {/* 👇 Put your custom hover text here */}
 {about}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamMembers
