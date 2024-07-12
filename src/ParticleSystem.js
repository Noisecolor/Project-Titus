import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Define all variables at the top for easy adjustments
const PARTICLE_COUNT = 100000; // Number of particles
const PARTICLE_SIZE = 0.0000001; // Size of each particle
const PARTICLE_COLOR = "#00ffcc"; // Color of the particles

// Particle component to handle individual particles
function Particles() {
  const particlesRef = useRef();

  // Create a buffer of particles
  const positions = new Float32Array(PARTICLE_COUNT * 3);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useEffect(() => {
    // Set the position attribute for the particles
    particlesRef.current.geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );
  }, [positions]);

  useFrame(() => {
    // Rotate particles on each frame
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

// Main ParticleSystem component
function ParticleSystem() {
  return (
    <Canvas>
      <Particles />
    </Canvas>
  );
}

export default ParticleSystem;
