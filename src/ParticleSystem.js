import React, { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Define all variables at the top for easy adjustments
const PARTICLE_COUNT = 10000; // Number of particles
const PARTICLE_SIZE = 0.05; // Size of each particle
const PARTICLE_COLOR = "#00ffcc"; // Color of the particles

function Particles() {
  const particlesRef = useRef();

  // Memoize the positions array to avoid unnecessary recalculations - 245
  const positions = useMemo(() => {
    const positionsArray = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positionsArray[i * 3] = (Math.random() - 0.5) * 10;
      positionsArray[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positionsArray[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positionsArray;
  }, []);

  useEffect(() => {
    particlesRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
  }, [positions]);

  useFrame(() => {
    particlesRef.current.rotation.x += 0.001;
    particlesRef.current.rotation.y += 0.001;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry" />
      <pointsMaterial attach="material" color={PARTICLE_COLOR} size={PARTICLE_SIZE} />
    </points>
  );
}

function ParticleSystem() {
  return (
    <Canvas>
      <Particles />
    </Canvas>
  );
}

export default ParticleSystem;
