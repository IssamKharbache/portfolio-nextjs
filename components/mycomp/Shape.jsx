"use client";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Shape = () => {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0 hidden xl:flex">
      <Canvas
        className="z-0 "
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          <Geomtries />
          <ContactShadows
            position={[0, -3.5, 0]}
            opacity={0.65}
            scale={40}
            blur={1}
            far={9}
          />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Shape;

function Geomtries() {
  const geometries = [
    {
      position: [0.5, 0.2, 0],
      r: 0.3,
      geometry: new THREE.IcosahedronGeometry(3.5), //diamond
    },

    {
      position: [1.5, -0.75, 4],
      r: 0.4,
      geometry: new THREE.CapsuleGeometry(0.6, 1.8, 2.5, 17), //pill
    },
    {
      position: [-1, 3, -6],
      r: 0.6,
      geometry: new THREE.DodecahedronGeometry(2.5), //football
    },
    {
      position: [-0.8, -0.75, 5],
      r: 0.5,
      geometry: new THREE.TorusGeometry(0.8, 0.5, 20, 35), //donut
    },
    {
      position: [2.8, 1.6, -4],
      r: 0.7,
      geometry: new THREE.OctahedronGeometry(2.5),
    },
  ];
  const materiels = [
    new THREE.MeshNormalMaterial(),
    new THREE.MeshStandardMaterial({
      color: 0x2c3e50,
      roughness: 0.1,
      metalness: 0.5,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2980b9,
      roughness: 0.5,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x0984e3,
      roughness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xe17055,
      roughness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xffeaa7,
      roughness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x6c5ce7,
      roughness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x2d3436,
      roughness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x130f40,
      roughness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x95afc0,
      roughness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0x7ed6df,
      roughness: 0.1,
    }),
    new THREE.MeshStandardMaterial({
      color: 0xff5252,
      roughness: 0.1,
    }),
  ];
  const soundEffects = [
    new Audio("/sounds/sound1.wav"),
    new Audio("/sounds/sound2.wav"),
    new Audio("/sounds/sound3.ogg"),
    new Audio("/sounds/sound4.ogg"),
    new Audio("/sounds/sound5.ogg"),
    new Audio("/sounds/sound6.ogg"),
  ];

  return geometries.map(({ position, r, geometry }) => (
    <Geometry
      key={JSON.stringify(position)}
      position={position.map((p) => p * 2)}
      geometry={geometry}
      materiels={materiels}
      r={r}
      soundEffects={soundEffects}
    />
  ));
}

function Geometry({ r, position, geometry, materiels, soundEffects }) {
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  const startingMaterial = getRandomMaterial();

  function getRandomMaterial() {
    return gsap.utils.random(materiels);
  }
  function handleClick(e) {
    const mesh = e.object;
    gsap.utils.random(soundEffects).play();
    gsap.to(mesh.rotation, {
      x: `+=${gsap.utils.random(0, 2)}`,
      y: `+=${gsap.utils.random(0, 2)}`,
      z: `+=${gsap.utils.random(0, 2)}`,
      duration: 1.3,
      ease: "elastic.out(1,0.3)",
      yoyo: true,
    });
    mesh.material = getRandomMaterial();
  }
  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
  };
  const handlePointerOut = () => {
    document.body.style.cursor = "default";
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "elastic.out(1,0.3)",
        delay: 1,
      });
    });
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <group position={position} ref={meshRef}>
      <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
        <mesh
          geometry={geometry}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          visible={visible}
          material={startingMaterial}
        />
      </Float>
    </group>
  );
}
