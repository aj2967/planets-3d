import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from '../earth/Earth';
import { Planet } from '../planet/Planet';

const EarthCanvas = () => {
  return (
    <Canvas>
        <Suspense fallback={null}>
            <Planet />
        </Suspense>
    </Canvas>
  )
}

export default EarthCanvas