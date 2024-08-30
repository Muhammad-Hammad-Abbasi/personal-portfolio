import Link from "next/link";
import Image from "next/image";

function Contact() {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      <h1 className="mt-20 sm:mt-32 text-center text-3xl sm:text-4xl text-white mb-8 hover:underline underline-offset-2 font-[italic]">
        Contact Me
      </h1>
      <div className="flex justify-center">
        <Image
          src={"/img.png"}
          width={100}
          height={100}
          alt="Profile Picture"
          className="rounded-full w-auto bg-bg shadow-lg transition-transform transform hover:scale-105"
        />
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

export default Contact;

