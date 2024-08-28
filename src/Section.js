import React from 'react';

export default function Section({ color, children }) {
  return (
    <div style={{ height: '100vh', backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>{children}</h1>
    </div>
  );
}
