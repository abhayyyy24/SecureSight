'use client';

import dynamic from 'next/dynamic';
import { Canvas } from '@react-three/fiber';
import React from 'react';

const MandlacXModel = dynamic(() => import('../components/MandlacXModel'), {
  ssr: false,
});

export default function MandlacXShowcase() {
  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden">
      
      <section className="relative h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
        {/* Heading */}
        <div className="w-full flex flex-col items-center absolute top-10 left-0 z-10">
          <div className="text-xs text-yellow-400 tracking-widest font-medium mb-2">THE FUTURE OF ON-SITE AI SURVEILLANCE</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            MandlacX Edge <span className="italic font-light">Processor</span>
          </h1>
        </div>
        


        <div className="relative w-[900px] h-[650px] flex items-center justify-center mx-auto z-20">
          
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-[440px] h-[540px]">
              <Canvas camera={{ position: [0,7,14 ], fov: 60 }} style={{ pointerEvents: 'none' }}>
                <ambientLight intensity={15} />
                <directionalLight position={[5, 5, 5]} intensity={4} />
                <MandlacXModel scale={[100, 100, 100]} rotation={[0, -0.80, -0.01]} />
              </Canvas>
            </div>
          </div>
          {/* Top Left Box */}
          <div className="absolute left-[-120px] top-[140px] w-[300px] bg-black/80 text-white p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col gap-3 z-30">
            <h2 className="font-bold text-white text-lg mb-2 flex items-center">MandlacX Edge Processor</h2>
            <ul className="list-disc list-inside text-sm marker:text-yellow-400">
              <li>A multi-domain, first-generation AI-powered device designed for real-time threat detection.</li>
            </ul>
          </div>
          {/* Top Right Box */}
          <div className="absolute right-[-120px] top-[140px] w-[260px] bg-black/80 text-white p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col gap-3 z-30">
            <h2 className="font-bold text-white text-lg mb-2 flex items-center">Key Specifications</h2>
            <ul className="list-disc list-inside text-sm marker:text-yellow-400">
              <li>USB 3.0 Support</li>
              <li>16 GB RAM</li>
              <li>A7 Cortex Processor</li>
              <li>Three multi-axis surveillance lenses</li>
            </ul>
          </div>
          {/* Bottom Left Box */}
          <div className="absolute left-[-120px] top-[420px] w-[290px] bg-black/80 text-white p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col gap-3 z-30">
            <h2 className="font-bold text-white text-lg mb-2 flex items-center">Real-Time Threat Detection</h2>
            <div className="text-sm">Detects</div>
            <ul className="list-disc list-inside text-sm mt-1 marker:text-yellow-400">
              <li>Intrusions</li>
              <li>Firearms & Sharp Objects</li>
              <li>Human Falls</li>
              <li>Unusual or Aggressive Motion</li>
            </ul>
          </div>
          {/* Bottom Right Box */}
          <div className="absolute right-[-120px] top-[420px] w-[300px] bg-black/80 text-white p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col gap-3 z-30">
            <h2 className="font-bold text-white text-lg mb-2 flex items-center">On-Device Intelligence</h2>
            <ul className="list-disc list-inside text-sm marker:text-yellow-400">
              <li>Engineered to deliver intelligent surveillance without relying on the cloud, it gives you control, speed, and reliability right where you need it.</li>
            </ul>
          </div>
          
        </div>
      </section>

      {/* Section 2*/}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black py-24">
        <div className="grid grid-cols-3 grid-rows-3 gap-x-8 gap-y-0 w-full max-w-6xl mx-auto items-center">
          
          <div className="col-span-1 row-span-1 flex items-start">
            <div className="text-3xl md:text-4xl font-light text-white leading-tight">
              <span className="italic">MandlacX Over</span><br />
              <span className="font-bold">Cloud-Only<br />Video Analytics</span>
            </div>
          </div>
          
          <div className="bg-black/80 text-white p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col gap-3">
            <div className="text-yellow-400 text-xl">&#128737;</div>
            <h3 className="font-bold text-lg">Bullet-Proof Weapon Detection</h3>
            <p className="text-sm">MandlacX is trained to detect firearms, knives, and other sharp threats with precision—no internet required.</p>
          </div>
          
          <div className="bg-black/80 text-white p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col gap-3">
            <div className="text-yellow-400 text-xl">&#128246;</div>
            <h3 className="font-bold text-lg">Bandwidth You Can Actually Afford</h3>
            <p className="text-sm">No continuous streaming. No heavy uploads. Just efficient edge computing that saves your network and your budget.</p>
          </div>
          
          <div className="bg-black/80 text-white p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col gap-3">
            <div className="text-yellow-400 text-xl">&#9889;</div>
            <h3 className="font-bold text-lg">Future-Proof AI Stack</h3>
            <p className="text-sm">With modular AI models and local firmware updates, MandlacX is built to evolve with your needs—no dependency on cloud upgrades.</p>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="w-[400px] h-[300px] mx-auto">
              <Canvas camera={{ position: [0, 4, 16], fov: 50 }} style={{ pointerEvents: 'none' }}>
                <ambientLight intensity={15} />
                <directionalLight position={[5, 5, 5]} intensity={2} />
                <MandlacXModel scale={[140, 140, 140]} rotation={[0, 0.6, 0]} />
              </Canvas>
            </div>
          </div>
          
          <div className="bg-black/80 text-white p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col gap-3">
            <div className="text-yellow-400 text-xl">&#128274;</div>
            <h3 className="font-bold text-lg">Privacy by Design</h3>
            <p className="text-sm">Your footage stays on-site. No cloud syncs, no external servers—just full control over your data.</p>
          </div>
          
          <div></div>
          
          <div className="bg-black/80 text-white p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col gap-3">
            <div className="text-yellow-400 text-xl">&#9201;</div>
            <h3 className="font-bold text-lg">Latency That Saves Seconds—and Lives</h3>
            <p className="text-sm">Instant on-device processing means faster alerts and quicker interventions during critical moments.</p>
          </div>
          
          <div className="col-span-1 row-span-1 flex flex-col items-end justify-end">
            <div className="text-2xl md:text-3xl font-light text-white italic mb-2">Built for <span className="font-bold">Speed.</span></div>
            <div className="text-2xl md:text-3xl font-light text-white italic">Designed for <span className="font-bold">Action.</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}
