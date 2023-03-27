import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const ThreeBox = () => {
  function Box(props) {
    const mesh = useRef();

    return (
      <mesh {...props} ref={mesh}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'#1f1f1f'} />
      </mesh>
    );
  }

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 1, 1]} />
    </Canvas>
  );
};

export default ThreeBox;
