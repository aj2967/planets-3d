import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from '../earth/Earth';
import { Planet } from '../planet/Planet';

const EarthCanvas = ({ clickedButton }) => {
    // console.log(clickedButton);
  return (
    <Canvas>
        <Suspense fallback={null}>
            <Planet clickedButton={clickedButton} />
        </Suspense>
    </Canvas>
  )
}

export default EarthCanvas