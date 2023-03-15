import { Box } from '@react-three/drei'
import React from 'react'
import { BoxCanvas } from './canvas'

const Window = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
          <div className='max-w-7xl mx-auto relative z-0 bg-gray-200 p-4'>
            <BoxCanvas />
          </div>
        </div>
      )
}

export default Window
