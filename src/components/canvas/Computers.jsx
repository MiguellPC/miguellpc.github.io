import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Preload,
  useGLTF,
  AdaptiveDpr,
} from '@react-three/drei';

import CanvasLoader from './CanvasLoader';

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh frustumCulled>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight
        intensity={1}
        position={isMobile ? [0, 0.8, 0] : [-0.3, 1.5, 0]}
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -1.5, -0.8] : [0, -2, -1.5]}
        rotation={[0, 0, -0.06]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener(
        'change',
        handleMediaQueryChange
      );
    };
  });

  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <AdaptiveDpr pixelated />
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
