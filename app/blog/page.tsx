import Image from "next/image";
import Link from "next/link";

 function Blog() {
  return (
    <div>
      <div className="bg-bg py-10 text-text2"></div>
      <h1 className="flex items-center justify-center pt-8 font-[italic] tracking-widest text-text2 p-8 text-white hover:underline underline-offset-2 text-4xl flex-col-reverse sm:flex-row ">
  <span>Welcome to Blogs.</span>
  <Image
    src="/blogheading.png"
    width={70}
    height={70}
    alt="Blog Heading"
    className="rounded-full w-auto mt-4 sm:mt-0 sm:ml-4 mb-4"
  />
</h1>

      <div className="pt-20">
        <div className="mx-[50px] shadow-lg hover:shadow-xl transition-shadow duration-300 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[50px]">
          

          <div className="shadow-lg pb-[20px] bg-white px-4 py-4 mb-4 border rounded-lg">
            <Image
              src="/react-img.png"
              loading="lazy"
              width={400}
              height={250}
              decoding="async"
              alt="Understanding React"
              className="w-full h-auto rounded-md"
            />
            <h1 className="text-xl font-bold font-serif mb-4 mt-3">
              Why I don't miss React: A story about using the platform
            </h1>
            <p>
              Just over two years ago I left a role at a London-based startup
              where I led the development of a large...
            </p>
            <div className="mt-14">
              <div className="text-center py-2 px-4 rounded-lg bg-black text-white hover:bg-[#270d0d]/10 hover:text-gray-800 transition-colors">
                <Link href="https://www.jackfranklin.co.uk/blog/working-with-react-and-the-web-platform/">
                  <button className="">Review post</button>
                </Link>
              </div>
            </div>
          </div>


          <div className="shadow-lg pb-[20px] bg-white px-4 py-4 mb-4 rounded-lg">
            <Image
              src="/next-js-img.png"
              loading="lazy"
              width={400}
              height={250}
              decoding="async"
              alt="Getting Started with Next.js"
              className="w-full h-auto rounded-md"
            />
            <h1 className="text-xl font-bold font-serif py-4">
              Crafting a Dynamic Blog with Next.js 13 App Directory
            </h1>
            <p>
              Next.js is a powerful framework for building server-side rendering
              (SSR) and static web applications with React...
            </p>
            <div className="pt-32">
              <div className="text-center py-2 px-4 rounded-lg bg-black text-white hover:bg-[#270d0d]/10 hover:text-gray-800 transition-colors">
                <Link href="https://dev.to/_kejk/crafting-a-dynamic-blog-with-nextjs-13-app-directory-2021">
                  <button className="">Review post</button>
                </Link>
              </div>
            </div>
          </div>


          <div className="shadow-lg pb-[20px] bg-white px-4 py-4 mb-4 rounded-lg">
            <Image
              src="/js-img.png"
              loading="lazy"
              width={400}
              height={250}
              decoding="async"
              alt="A Guide to JavaScript ES6"
              className="w-full h-auto rounded-md"
            />
            <h1 className="text-xl font-bold font-serif py-4">
              JavaScript ES6: A New Frontier for JavaScript
            </h1>
            <p>
              The JavaScript programming language has been around for more than
              25 years...
            </p>
            <div className="pt-[135px]">
              <div className="text-center py-2 px-4 rounded-lg bg-black text-white hover:bg-[#270d0d]/10 hover:text-gray-800 transition-colors">
                <Link href="https://www.udacity.com/blog/2021/06/javascript-es6.html">
                  <button className="">Review post</button>
                </Link>
              </div>
            </div>
          </div>


          <div className="shadow-lg pb-5 bg-white px-4 py-4 mb-4 rounded-lg">
  <Image
    src="/ts-img.png"
    loading="lazy"
    width={400}
    height={250}
    decoding="async"
    alt="Introduction to TypeScript"
    className="w-full h-auto rounded-md"
  />
  <h1 className="text-xl font-bold font-serif mt-3 py-2 sm:py-3">
    Learn TypeScript – The Ultimate Beginners Guide
  </h1>
  <p className="pt-4 sm:pt-8">
    TypeScript has become increasingly popular over the last few years, and
    many jobs now require developers to know TypeScript...
  </p>
  <div className="mt-8 sm:mt-[150px]">
    <div className="text-center py-2 px-4 rounded-lg bg-black text-white hover:bg-[#270d0d]/10 hover:text-gray-800 transition-colors">
      <Link href="https://www.freecodecamp.org/news/learn-typescript-beginners-guide/">
        <button>Review post</button>
      </Link>
    </div>
  </div>
</div>



          <div className="shadow-lg pb-[20px] bg-white px-4 py-4 mb-4 rounded-lg">
            <Image
              src="/css-img.png"
              loading="lazy"
              width={400}
              height={250}
              decoding="async"
              alt="CSS Grid Layout"
              className="w-full h-auto rounded-md"
            />
            <h1 className="text-xl font-bold font-serif mt-3 py-3">
              CSS Grid: A Guide to Getting Started
            </h1>
            <p>
              This CSS grid guide was last updated on 10 January 2023 to include
              more information on the differences between CSS grid and CSS
              flexbox...
            </p>
            <div className="pt-[65px]">
              <div className="text-center py-2 px-4 rounded-lg bg-black text-white hover:bg-[#270d0d]/10 hover:text-gray-800 transition-colors">
                <Link href="https://blog.logrocket.com/css-grid-guide/">
                  <button className="">Review post</button>
                </Link>
              </div>
            </div>
          </div>

      
          <div className="shadow-lg pb-[20px] bg-white px-4 py-4 mb-4 rounded-lg">
            <Image
              src="/web-img.png"
              loading="lazy"
              width={400}
              height={250}
              decoding="async"
              alt="Responsive Web Design"
              className="w-full h-auto rounded-md"
            />
            <h1 className="text-xl font-bold font-serif mt-3 py-3">
              The Guide to Responsive Web Design in 2024
            </h1>
            <p>
              Your go-to resource for understanding responsive web design and
              how to do it well...
            </p>
            <div className="mt-36">
              <div className="text-center py-2 px-4 rounded-lg bg-black text-white hover:bg-[#270d0d]/10 hover:text-gray-800 transition-colors">
                <Link href="https://webflow.com/blog/responsive-web-design">
                  <button className="">Review post</button>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Blog;