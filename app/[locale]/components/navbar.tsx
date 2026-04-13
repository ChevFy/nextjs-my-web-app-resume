
import { getDictionary } from "../layout";
import Switcher from "./switcher";

export default async function Navbar({ locale }: { locale: string }) {
    
    const dataText = await getDictionary(locale as "en" | "th")


    return (
        <nav className="font-bold fixed top-5 left-1/2 -translate-x-1/2 w-3/4 h-14 bg-gray-900 flex justify-between items-center px-4 rounded-lg text-white shadow-xl z-50">
            
            <div className="px-4 py-1 rounded font-bold">
                <a href={`/${locale}`}>Chevfy</a>
            </div>
           
            <div className="flex gap-6 items-center">
                <div className="hover:text-orange-400 cursor-pointer transition-colors">
                <a href={`/${locale}/services`} className="hover:text-orange-400 transition-colors">{dataText.navbarService}</a>
                    
                </div>
                <a  href={`/${locale}/project`} className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded transition-colors">
                    {dataText.navbarProject}
                </a>
                <a href={`/${locale}/contact`} className="hover:text-orange-400 transition-colors">{dataText.navbarContact}</a>
            </div>
             <Switcher currentLocale={locale }/>
            
        </nav>
    )
}