import { useState, useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three'

import MercuryMap from '../../assets/textures/8k_mercury.jpg';
import VenusMap from '../../assets/textures/8k_venus_surface.jpg';
import EarthMap from '../../assets/textures/8k_earth_daymap.jpg';
import MarsMap from '../../assets/textures/8k_mars.jpg';
import JupiterMap from '../../assets/textures/8k_jupiter.jpg';
import SaturnMap from '../../assets/textures/8k_saturn.jpg';
import UranusMap from '../../assets/textures/2k_uranus.jpg';
import NeptuneMap from '../../assets/textures/2k_neptune.jpg';

export const Planet = (props) => {

    let clickedPlanet = props.clickedButton;
    const [planetMap, setPlanetMap] = useState(EarthMap);
    const colorMap = useLoader(TextureLoader, planetMap);
    const planetRef = useRef();
    
    useEffect(() => {
        changePlanet();
    }, [clickedPlanet])

    const changePlanet = () => {
        switch (clickedPlanet) {
            case 'Mercury':
                setPlanetMap(MercuryMap);
                break;
            case 'Venus':
                setPlanetMap(VenusMap);
                break;
            case 'Earth':
                setPlanetMap(EarthMap);
                break;
            case 'Mars':
                setPlanetMap(MarsMap);
                break;
            case 'Jupiter':
                setPlanetMap(JupiterMap);
                break;
            case 'Saturn':
                setPlanetMap(SaturnMap);
                break;
            case 'Uranus':
                setPlanetMap(UranusMap);
                break;
            case 'Neptune':
                setPlanetMap(NeptuneMap);
                break;
            default:
                break;   
        }
    }

    useFrame(({ clock }) => {
        const elapsedTime = clock.getElapsedTime();
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
            <mesh ref={planetRef} position={[0,0,0]}>
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