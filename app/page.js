import Image from 'next/image';
import robot from '../public/robot.gif';

export default function Home() {
  return (
    <div className="bg-[#A0F1BD] w-screen h-screen flex items-center justify-center">
      
      <Image 
        width={200}
        src={robot} 
        alt="Robot animation" 
        unoptimized 
      />
    </div>
  );
}
