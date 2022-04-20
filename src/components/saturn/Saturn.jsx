import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars, Ring } from '@react-three/drei';
import * as THREE from 'three'

import SaturnMap from '../../assets/textures/8k_saturn.jpg';
import SaturnRing from '../../assets/textures/8k_saturn_ring_alpha.png';

export const Saturn = (props) => {

    const [colorMap, ringMap] = useLoader(TextureLoader, [SaturnMap, SaturnRing]);
    const ringRef = useRef();
    const planetRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        ringRef.current.rotation.z = elapsedTime / -18;
        planetRef.current.rotation.y = elapsedTime / 30;
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
            <mesh ref={ringRef} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]}>
                {/* <sphereGeometry args={[2.015, 32, 32]} /> */}
                <ringBufferGeometry 
                    args={[2.2, 3.5, 100]}
                />
                <meshPhongMaterial
                    map={ringMap}
                    opacity={1} 
                    depthWrite={false} 
                    transparent={true} 
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh ref={planetRef} position={[0,0,0]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial
                    map={colorMap} 
                    metalness={.4} 
                    roughness={.7} 
                />
                <OrbitControls 
                    enableZoom={true} 
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