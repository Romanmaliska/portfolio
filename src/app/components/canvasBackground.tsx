'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Trail, Float, Line, Sphere, Stars } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function CanvasBackground() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 -z-50">
      <Canvas>


        ``
        <Stars
          radius={50}
          depth={50}
          count={500}
          factor={4}
          saturation={100}
          fade
          speed={1}
        />
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
