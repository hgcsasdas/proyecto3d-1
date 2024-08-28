import React from 'react';
import Scene from './Scene';
import Section from './Section';

export default function App() {
  return (
    <div style={{ height: '600vh' }}>
      <Scene />
      <Section color="lightcoral">Sección 1</Section>
      <Section color="lightblue">Sección 2</Section>
      <Section color="lightgreen">Sección 3</Section>
      <Section color="lightyellow">Sección 4</Section>
      <Section color="lightpink">Sección 5</Section>
      <Section color="lightgray">Sección 6</Section>
    </div>
  );
}
