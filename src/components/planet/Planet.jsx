import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three'

import planetMap from '../../assets/textures/8k_earth_daymap.jpg';
import { useRef } from 'react';

export const Planet = (props) => {

    const colorMap = useLoader(TextureLoader, planetMap);

    const earthRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        earthRef.current.rotation.y = elapsedTime / 30;
    })
    

    return (
        <>
            <ambientLight intensity={.4} />
            {/* <pointLight color='#F6F3EA' position={[2, 0, 2]} intensity={1.2} /> */}
            <directionalLight position={[1, 0, 2]} />
            <Stars
                radius={200} 
                depth={60} 
                count={20000} 
                factor={7} 
                saturation={0} 
                fade={true} 
            />
            <mesh ref={earthRef} position={[0,0,0]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial
                    map={colorMap} 
                    metalness={.4} 
                    roughness={.7} 
                />
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={true} 
                    enableRotate={true} 
                    zoomSpeed={.6} 
                    panSpeed={.5} 
                    rotateSpeed={.4} 
                />
            </mesh>
        </>
    )
}