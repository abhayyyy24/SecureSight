import Image from "next/image";

export default function IncidentPlayer() {
  return (
    <div className="bg-black rounded-lg  flex flex-col gap-2 w-full">
      <div className="relative w-full h-[450px] aspect-video bg-neutral-800 rounded-md overflow-hidden">
        <Image
          src="/images/image1.png"
          alt="Main Camera"
          fill
          className="object-cover"
        />

        <div className="absolute top-2 left-2 text-white text-xs bg-black/60 px-2 py-1 rounded">
          23/7/2025 - 03:12:37
        </div>

        <div className="absolute bottom-2 left-2 bg-black text-white px-2 py-1 text-xs rounded">
          Camera - 01
        </div>

        {/*thumbnails */}
        <div className="absolute bottom-2 right-2 flex gap-2">
          {/* Camera 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[120px] h-5 px-2 py-1 flex items-center justify-between bg-black text-white text-[10px] rounded-t-md">
              <span>Camera - 02</span>
              <span className="text-xs">⋮</span>
            </div>

            <div className="relative w-[120px] aspect-video overflow-hidden  rounded-b-md bg-black/50">
              <Image
                src="/images/image2.png"
                alt="Camera 2"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Camera 3 */}
          <div className="flex flex-col items-center">
            
            <div className="w-[120px] h-5 px-2 py-1 flex items-center justify-between bg-black text-white text-[10px] rounded-t-md">
              <span>Camera - 03</span>
              <span className="text-xs">⋮</span>
            </div>

            {/* Thumbnail */}
            <div className="relative w-[120px] aspect-video overflow-hidden  rounded-b-md bg-black/50">
              <Image
                src="/images/image3.png"
                alt="Camera 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
