import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex-col gap-10 z-[10] max-w-[750px] leading-7	">
          <h1 className=" text-white font-extralight text-2xl md:text-4xl mb-5">
            Make anything possible with
          </h1>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-black text-[40px] md:text-[50px]">
            Web Development
          </span>
          <p className="text-gray-200 hidden md:block mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quas,
            dignissimos inventore modi quisquam ab distinctio autem nisi
            molestiae magni unde. Totam accusantium eius placeat, laboriosam
            quisquam ipsa quidem neque!
          </p>
          <div className="btnContainer">
            <Link href="/my-skills" className="btn1">
              Learn More
            </Link>

            <Link href="/my-projects" className="btn2">
              My Projects
            </Link>

            <Link href="/contact" className="btn3">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
