import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const GOLD = '#c9a227';
const GOLD_DEEP = '#8b6914';
const GOLD_BRIGHT = '#f0d878';

const useGoldMaterial = (roughness = 0.18) =>
  useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: GOLD,
        metalness: 1,
        roughness,
        envMapIntensity: 1.4,
      }),
    [roughness],
  );

const LadyJustice = () => {
  const groupRef = useRef();
  const gold = useGoldMaterial(0.16);
  const goldMatte = useGoldMaterial(0.28);
  const goldBright = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: GOLD_BRIGHT,
        metalness: 1,
        roughness: 0.1,
        envMapIntensity: 1.8,
      }),
    [],
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.18;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.35, 0]} scale={1.3}>
      {/* Pedestal */}
      <mesh position={[0, -0.72, 0]} material={goldMatte}>
        <cylinderGeometry args={[0.55, 0.62, 0.18, 32]} />
      </mesh>
      <mesh position={[0, -0.58, 0]} material={gold}>
        <cylinderGeometry args={[0.42, 0.48, 0.12, 32]} />
      </mesh>

      {/* Robe / body */}
      <mesh position={[0, -0.05, 0]} material={goldMatte}>
        <cylinderGeometry args={[0.38, 0.52, 1.05, 32]} />
      </mesh>
      <mesh position={[0, 0.42, 0]} material={goldMatte}>
        <coneGeometry args={[0.52, 0.55, 32]} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 0.82, 0]} material={gold}>
        <sphereGeometry args={[0.16, 32, 32]} />
      </mesh>
      {/* Blindfold */}
      <mesh position={[0, 0.84, 0]} rotation={[0, 0, Math.PI / 2]} material={goldBright}>
        <cylinderGeometry args={[0.025, 0.025, 0.36, 16]} />
      </mesh>

      {/* Crown / hair band */}
      <mesh position={[0, 0.94, 0]} material={goldBright}>
        <torusGeometry args={[0.14, 0.02, 12, 32]} />
      </mesh>

      {/* Left arm + sword */}
      <group position={[-0.42, 0.35, 0]} rotation={[0, 0, 0.35]}>
        <mesh material={gold}>
          <cylinderGeometry args={[0.05, 0.05, 0.42, 12]} />
        </mesh>
        <mesh position={[0, -0.42, 0]} material={goldBright}>
          <boxGeometry args={[0.06, 0.55, 0.02]} />
        </mesh>
        <mesh position={[0, -0.72, 0]} material={gold}>
          <coneGeometry args={[0.05, 0.14, 4]} />
        </mesh>
      </group>

      {/* Right arm + scales beam */}
      <group position={[0.38, 0.42, 0]} rotation={[0, 0, -0.45]}>
        <mesh material={gold}>
          <cylinderGeometry args={[0.05, 0.05, 0.38, 12]} />
        </mesh>
      </group>

      {/* Scales crossbar */}
      <mesh position={[0.52, 0.62, 0]} rotation={[0, 0, Math.PI / 2]} material={goldBright}>
        <cylinderGeometry args={[0.025, 0.025, 1.05, 16]} />
      </mesh>
      {/* Chains */}
      {[-0.45, 0.45].map((x) => (
        <mesh key={x} position={[0.52 + x, 0.48, 0]} material={gold}>
          <cylinderGeometry args={[0.008, 0.008, 0.22, 8]} />
        </mesh>
      ))}
      {/* Scale pans */}
      {[-0.45, 0.45].map((x) => (
        <group key={`pan-${x}`} position={[0.52 + x, 0.34, 0]}>
          <mesh material={gold}>
            <cylinderGeometry args={[0.18, 0.18, 0.035, 24]} />
          </mesh>
          <mesh position={[0, 0.02, 0]} material={goldBright}>
            <torusGeometry args={[0.17, 0.012, 8, 32]} />
          </mesh>
        </group>
      ))}

      {/* Center pillar for scales */}
      <mesh position={[0.52, 0.15, 0]} material={gold}>
        <cylinderGeometry args={[0.035, 0.05, 0.55, 16]} />
      </mesh>
    </group>
  );
};

const LegalGrid = () => (
  <mesh position={[0, 0, -2.2]} rotation={[0, 0, 0]}>
    <planeGeometry args={[8, 8, 40, 40]} />
    <meshBasicMaterial
      color={GOLD_DEEP}
      wireframe
      transparent
      opacity={0.07}
    />
  </mesh>
);

const GlobeRings = () => (
  <group position={[0.2, 0.1, -1.8]} scale={2.2}>
    {[0, Math.PI / 3, (Math.PI * 2) / 3].map((rot, i) => (
      <mesh key={i} rotation={[rot, 0, 0]}>
        <torusGeometry args={[1, 0.003, 8, 96]} />
        <meshBasicMaterial color={GOLD} transparent opacity={0.06} />
      </mesh>
    ))}
  </group>
);

const Scene = () => (
  <>
    <color attach="background" args={['#000000']} />
    <fog attach="fog" args={['#050a14', 4, 9]} />
    <ambientLight intensity={0.25} color="#fff8e7" />
    <directionalLight position={[4, 6, 4]} intensity={1.8} color="#fff4d6" />
    <directionalLight position={[-5, 3, -2]} intensity={0.6} color="#4a6fa5" />
    <pointLight position={[2, 2, 3]} intensity={1.2} color={GOLD_BRIGHT} />
    <pointLight position={[-3, 1, 2]} intensity={0.5} color={GOLD} />
    <spotLight
      position={[0, 5, 1]}
      angle={0.35}
      penumbra={0.8}
      intensity={1.5}
      color="#ffe9a8"
      castShadow
    />
    <LegalGrid />
    <GlobeRings />
    <LadyJustice />
    <ContactShadows
      position={[0, -0.95, 0]}
      opacity={0.35}
      scale={3}
      blur={2.5}
      far={1.2}
      color="#000000"
    />
  </>
);

const Scales3D = () => (
  <Canvas
    className="hero-scene__canvas"
    camera={{ position: [0, 0.35, 3.8], fov: 38 }}
    dpr={[1, 1.5]}
    gl={{
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    }}
    onCreated={({ gl }) => {
      gl.setClearColor(0x000000, 0);
      gl.toneMapping = THREE.ACESFilmicToneMapping;
      gl.toneMappingExposure = 1.15;
    }}
  >
    <Scene />
  </Canvas>
);

export default Scales3D;
