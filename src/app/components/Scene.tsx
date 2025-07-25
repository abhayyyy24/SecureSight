'use client';
import React, { Suspense } from 'react';
import MandlacXModel from './MandlacXModel';

export default function Scene() {
  return (
    <>
      <ambientLight intensity={25} />
      <directionalLight position={[200, 20, 10]} />
      <Suspense fallback={null}>
        <MandlacXModel />
      </Suspense>
    </>
  );
}
