import Image from "next/image";

function About() {
  return (
    <div className="min-h-screen bg-bg">
      
      <div className="py-8 pt-28 text-text2 text-white text-center text-3xl hover:underline underline-offset-2 font-[italic]">
        About Me
      </div>

     
      <div className="flex flex-col items-center justify-center space-y-4 px-4 py-8 lg:text-3xl sm:text-[20px] text-[15px]">
        
       
        <div className="flex flex-col items-center gap-3 py-6">
          <Image
            src="/img.png"
            alt="Profile Picture"
            width={130}
            height={130}
            className="rounded-full shadow-lg"
          />
        </div>

      
        <div className="bg-text border-cyan-100 border-y-2 rounded-2xl shadow-lg transition-transform transform hover:scale-105 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[750px] p-6 text-center">
          <h1 className="text-white text-2xl lg:text-3xl">
            I am Muhammad Hammad.
          </h1>
          <p className="text-white text-sm lg:text-base mt-4">
            I&apos;m a front-end developer, dedicated to creating intuitive and
            user-friendly web interfaces. My journey has involved continuous
            learning and applying front-end technologies through hands-on
            projects. Additionally, I have a foundational understanding of AI,
            having completed a basic course, which further enhances my approach
            to developing innovative and effective web solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
