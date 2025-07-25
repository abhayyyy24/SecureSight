'use client';

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';


interface MandlacXModelProps {
  scale?: [number, number, number];
  rotation?:[number,number,number];
}

export default function MandlacXModel(props: MandlacXModelProps) {
  const { scene } = useGLTF('/mandlacx.glb'); 
  const groupRef = useRef<THREE.Group>(null);
  const sceneClone = React.useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    
    const box = new THREE.Box3().setFromObject(sceneClone);
    const center = new THREE.Vector3();
    box.getCenter(center);
    sceneClone.position.sub(center); 
  }, [sceneClone]);

  return (
    <group ref={groupRef} scale={props.scale || [60, 60, 60]} position={[0, 0, 0]} rotation={props.rotation}>
      <primitive object={sceneClone} />
    </group>
  );
}
