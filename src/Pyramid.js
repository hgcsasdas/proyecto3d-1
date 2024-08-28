import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTransform } from 'framer-motion';

export default function Pyramid({ scrollYProgress }) {
  const ref = useRef();

  // Aparición suave de la pirámide a partir de la sección 4
  const scale = useTransform(scrollYProgress, [0.6, 0.66, 0.7, 0.8, 0.9, 1], [0, 1, 4, 3, 1, 0.66]);

  // Rotación continua de la pirámide
  useFrame(() => {
    ref.current.rotation.y += 0.01; // Rotación lenta
    const s = scale.get();
    ref.current.scale.set(s, s, s);
  });

  return (
    <mesh ref={ref} position={[2, 0, 0]}>
      <coneGeometry args={[1, 2, 4]} />
      <meshBasicMaterial attach="material-0" color="gold" />


    </mesh>
  );
}
