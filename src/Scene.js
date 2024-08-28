import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import Cube from './Cubo';
import Pyramid from './Pyramid';

export default function Scene() {
  const scrollYProgress = useScroll().scrollYProgress;

  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <ambientLight />
      <Cube scrollYProgress={scrollYProgress} />
      <Pyramid scrollYProgress={scrollYProgress} /> {/* La pirámide aparece progresivamente a partir de la sección 4 */}
    </Canvas>
  );
}