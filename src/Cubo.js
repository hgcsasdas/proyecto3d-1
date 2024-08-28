import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTransform } from 'framer-motion';

export default function Cube({ scrollYProgress }) {
  const ref = useRef();

  // Rotación del cubo para cada sección
  const rotationX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2, 2 * Math.PI, (5 * Math.PI) / 2]);
  const rotationY = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4, Math.PI, (5 * Math.PI) / 4]);

  // Posiciones del cubo
  const positionX = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, -2, -2, 0, -3, 2]);
  const positionY = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0, -2, -2, 0, 2]);

  // Zoom para cada sección
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 1.5, 1, 0.4, 1, 0.8]);

  useFrame(() => {
    ref.current.rotation.x = rotationX.get();
    ref.current.rotation.y = rotationY.get();
    ref.current.position.x = positionX.get();
    ref.current.position.y = positionY.get();
    ref.current.scale.set(scale.get(), scale.get(), scale.get());
  });

  // Manejar el clic en el cubo
  const handleClick = () => {
    window.location.href = 'https://www.google.com'; // Cambia la URL a donde quieras ir
  };

  return (
    <mesh ref={ref} onClick={handleClick} style={{ cursor: 'pointer' }}>
      <boxGeometry args={[2, 2, 2]} />
      <meshBasicMaterial attach="material-0" color="red" />
      <meshBasicMaterial attach="material-1" color="green" />
      <meshBasicMaterial attach="material-2" color="blue" />
      <meshBasicMaterial attach="material-3" color="yellow" />
      <meshBasicMaterial attach="material-4" color="purple" />
      <meshBasicMaterial attach="material-5" color="orange" />
    </mesh>
  );
}
