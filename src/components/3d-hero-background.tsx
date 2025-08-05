'use client';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import type * as THREE from 'three';

function Scene() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
        meshRef.current.rotation.x += delta * 0.1;
        meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 1, 1]} />
      <Icosahedron ref={meshRef} args={[1, 1]}>
        <meshStandardMaterial wireframe color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      </Icosahedron>
    </>
  );
}

export function ThreeDBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
