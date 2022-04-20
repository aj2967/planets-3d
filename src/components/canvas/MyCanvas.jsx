import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'

import { Planet } from '../planet/Planet';
import { Earth } from '../earth/Earth';
import { Saturn } from '../saturn/Saturn';

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

        <Route path='/planets-3d' element={<>
          <Canvas>
              <Suspense fallback={null}>
                  <Planet clickedButton={clickedButton} />
              </Suspense>
          </Canvas>
        </>} />
        
        <Route path='/planets-3d/earth' element={<>
          <Canvas>
              <Suspense fallback={null}>
                  <Earth clickedButton={clickedButton} />
              </Suspense>
          </Canvas>
        </>} />
        
        {/* <Route path='/planets-3d/saturn' element={<>
          <Canvas>
              <Suspense fallback={null}>
                  <Saturn clickedButton={clickedButton} />
              </Suspense>
          </Canvas>
        </>} /> */}
      </Routes>
  )
}

export default MyCanvas