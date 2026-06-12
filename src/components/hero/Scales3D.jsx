import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';

const Scales = () => {
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Central pillar */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.04, 0.06, 1.2, 8]} />
        <meshStandardMaterial color="#c9a227" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Top bar */}
      <mesh position={[0, 0.55, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 1.4, 8]} />
        <meshStandardMaterial color="#c9a227" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Left pan */}
      <group position={[-0.65, 0.35, 0]}>
        <mesh>
          <cylinderGeometry args={[0.25, 0.25, 0.04, 16]} />
          <meshStandardMaterial color="#8b6914" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.4, 4]} />
          <meshStandardMaterial color="#c9a227" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      {/* Right pan */}
      <group position={[0.65, 0.35, 0]}>
        <mesh>
          <cylinderGeometry args={[0.25, 0.25, 0.04, 16]} />
          <meshStandardMaterial color="#8b6914" metalness={0.6} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <cylinderGeometry args={[0.01, 0.01, 0.4, 4]} />
          <meshStandardMaterial color="#c9a227" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      {/* Base */}
      <mesh position={[0, -0.65, 0]}>
        <boxGeometry args={[0.8, 0.1, 0.4]} />
        <meshStandardMaterial color="#0a1628" metalness={0.4} roughness={0.6} />
      </mesh>
    </group>
  );
};

const Scales3D = () => (
  <Canvas
    camera={{ position: [0, 0.5, 3.5], fov: 45 }}
    dpr={[1, 1.5]}
    gl={{ antialias: true, alpha: true }}
  >
    <ambientLight intensity={0.4} />
    <directionalLight position={[5, 5, 5]} intensity={1} color="#fff8e7" />
    <pointLight position={[-3, 2, 2]} intensity={0.5} color="#c9a227" />
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <Scales />
    </Float>
    <Environment preset="city" />
  </Canvas>
);

export default Scales3D;
