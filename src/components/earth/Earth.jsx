import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three'

import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg';
import EarthNightMap from '../../assets/textures/8k_earth_nightmap.jpg';
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg';
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg';
import { useRef } from 'react';

export const Earth = (props) => {

    const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);

    const earthRef = useRef();
    const cloudRef = useRef();

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
        cloudRef.current.rotation.y = elapsedTime / 18;
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
            <mesh ref={cloudRef} position={[0,0,0]}>
                <sphereGeometry args={[2.015, 32, 32]} />
                <meshPhongMaterial 
                    map={cloudsMap} 
                    opacity={.2} 
                    depthWrite={false} 
                    transparent={true} 
                    side={THREE.DoubleSide} 
                />
            </mesh>
            <mesh ref={earthRef} position={[0,0,0]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshPhongMaterial specularMap={specularMap} />
                <meshStandardMaterial
                    map={colorMap} 
                    normalMap={normalMap} 
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