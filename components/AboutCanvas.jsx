import React, { Suspense, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  Preload,
  useGLTF,
  ContactShadows,
  Text,
} from '@react-three/drei';

const AboutRectangle = ({ margin = 0.5 }) => {
  const rectangle = useGLTF('/monolith2.gltf');
  const ref = useRef();

  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / 20,
      0.05,
    );
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      (state.mouse.y * Math.PI) / 20,
      0.05,
    );
  });

  return (
    <mesh ref={ref}>
      {/* <hemisphereLight
        color="#15db95"
        groundColor="#b9b9b9"
        position={[-7, 25, 13]}
        intensity={0.85}
      /> */}
      {/* <pointLight position={[-50, 0, 50]} intensity={0.8} color="#15db95" /> */}
      {/* <spotLight
        color="#15db95"
        position={[20, 40, 20]}
        angle={0.82}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      /> */}
      <primitive
        object={rectangle.scene}
        scale={0.6}
        key={1}
        rotation={[0, 210, 0]}
      />
      <Text
        font={'/Poppins_Bold.json'}
        characters="abcdefghijklmnopqrstuvwxyz0123456789!"
        fontSize={0.45}
        rotation={[0, -0.5, 0]}
        position={[0, 1.1, 0.5]}
      >
        About Me
      </Text>
      {/* <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -35, 0]}
        opacity={0.25}
        width={100}
        height={100}
        blur={2}
        far={50}
      /> */}
    </mesh>
  );
};

const AboutRectangleCanvas = () => {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <AboutRectangle />
        <OrbitControls enableZoom={false} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default AboutRectangleCanvas;
