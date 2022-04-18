import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'

import { Earth } from '../earth/Earth';
import { Planet } from '../planet/Planet';

const MyCanvas = ({ clickedButton }) => {
    // console.log(clickedButton);
  return (
      <Routes>
        <Route exact path='/' element={<>
          <Canvas>
              <Suspense fallback={null}>
                  <Planet clickedButton={clickedButton} />
              </Suspense>
          </Canvas>
        </>} />
        
        <Route path='/earth' element={<>
          <Canvas>
              <Suspense fallback={null}>
                  <Earth clickedButton={clickedButton} />
              </Suspense>
          </Canvas>
        </>} />
      </Routes>
  )
}

export default MyCanvas