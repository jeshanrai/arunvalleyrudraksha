"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Float,
  Center,
  Bounds,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/rudraksha.glb");
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    // compute bounding box and re-center at origin
    const box = new THREE.Box3().setFromObject(ref.current);
    const center = box.getCenter(new THREE.Vector3());
    ref.current.position.sub(center);
  }, [scene]);

  return <primitive ref={ref} object={scene} />;
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#C9A84C"
        wireframe
        opacity={0.3}
        transparent
      />
    </mesh>
  );
}

export default function RudrakshaModel() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#F5EDD8" />
        <directionalLight
          position={[-3, 2, -5]}
          intensity={0.5}
          color="#C9A84C"
        />
        <pointLight position={[0, -3, 3]} intensity={0.3} color="#C9A84C" />
        <Suspense fallback={<LoadingFallback />}>
          <Bounds fit clip observe margin={1.4}>
            <Center>
              <Float
                speed={1.5}
                rotationIntensity={0.4}
                floatIntensity={0.6}
              >
                <Model />
              </Float>
            </Center>
          </Bounds>
          <Environment preset="studio" environmentIntensity={0.3} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
          makeDefault
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/rudraksha.glb");
