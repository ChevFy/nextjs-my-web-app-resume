import Image from "next/image";
import Navbar from "./components/navbar";
import Experience from "./components/experience";
import { getDictionary } from "./layout";

export default async function Home({ params }: { params: { locale: string } }) {

  const { locale } = await params ;
  const dataText  = await getDictionary(locale as "th" | "en") 

  return (
    <>
      <Navbar locale={locale} />

      {/* Me Section */}
      <section className="bg-blue-950/50 min-h-screen flex flex-col md:flex-row items-center px-6 sm:px-8 lg:px-20 pt-24 md:pt-0">
        
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start py-10 md:py-20 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {dataText.firstName} <br /> <span className="text-blue-400">{dataText.lastName}</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg">
            {dataText.describtion}
          </p>
          <div className="flex flex-row gap-6 mt-4 justify-center md:justify-start">
            <a href="https://github.com/ChevFy" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:opacity-80 transition-all">
              <Image width={40} height={40} loading="eager" src="https://api.iconify.design/line-md:github-loop.svg?color=%23ffffff"  alt="GitHub"  />
            </a>

            <a href="https://www.instagram.com/chevfy._" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:opacity-80 transition-all">
              <Image width={40}  height={40}  loading="eager" src="https://api.iconify.design/line-md:instagram.svg?color=%23ffffff"  alt="Instagram"  />
            </a>

            <a href="https://www.facebook.com/koonchevychpai123" target="_blank" rel="noopener noreferrer" className="hover:scale-110 hover:opacity-80 transition-all">
              <Image width={40} height={40} loading="eager" src="https://api.iconify.design/line-md:facebook.svg?color=%23ffffff"  alt="Facebook"  />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center p-8 md:p-10 mt-6 md:mt-0">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr rotate-6 hover:rotate-0 from-blue-500 to-violet-500 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-500">
             <Image priority src="/images/1000003517.jpg.png" alt="Hero image" width={384} height={384} className="w-full h-full object-cover rounded-2xl scale-105 hover:scale-100 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-blue-950/30 min-h-screen flex flex-col items-center gap-5 py-16 md:py-24">
          <Experience dataText={dataText}/> 
      </section>
      
    </>
  );
}