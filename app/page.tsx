import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[35px] text-white font-semibold font-extralight">
            Make anything possible with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-black text-[50px]">
              Web Development
            </span>
          </h1>
        </div>
      </div>
    </main>
  );
}
