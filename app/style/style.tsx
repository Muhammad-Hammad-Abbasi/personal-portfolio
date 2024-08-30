
import Image from "next/image";
import Link from "next/link";



export default function Style() {
  
  return (
      <div className=" w-full text-neutral-300">
        <div className="flex justify-center pt-10 ">
          <button className="bg-text border-cyan-100  border-y-2 divide-x-0 space-x-2 rounded-l-full py-[0.5rem] text-sm flex items-center justify-center text-neutral-300 rounded-r-full px-4">
            <p className="text-yellow-300">
              
       
            </p>
            <p>It&#39;s me <b>Hammad Abbasi</b></p>
          </button>
        </div>
        <div className="flex justify-center ">
          <Image
            src={"/img.png"}
            width={70}
            height={4}
            alt=""
            className="rounded-full w-auto bg-bg pt-7 shadow-lg transition-transform transform hover:scale-105"
          />
        </div>
        <div className="text-text2 flex flex-col items-center justify-center pt-6">
          <p className="text-2xl md:text-5xl font-bold text-center leading-snug">
          Crafting Websites That Drive Results
            <br />
            My goal is to design 
          </p>
        </div>
        <div className="text-text2 flex flex-col items-center justify-center pt-6">
          <p className="text-md md:text-xl  text-center leading-snug">
           <p>And technically robust websites</p> that resonate with audiences 
            <br />
            and drive conversions.
          </p>
        </div>
        <div className="flex items-center justify-center pt-7">
  <button className="bg-text border-cyan-100 border-y-2 text-white py-2 sm:py-3 px-4 sm:px-7 rounded-md text-sm sm:text-base transition-transform transform hover:scale-105">
    <Link href="mailto:hammadabbasi102030@gmail.com">
      hammadabbasi102030@gmail.com
    </Link>
  </button>
</div>
</div>
  );
}
   
