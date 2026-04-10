'use client'

import { useRouter } from "next/navigation"
import { LayoutGroup, motion } from "framer-motion";


export default function Switcher({ currentLocale } : { currentLocale : string })
{
    const router = useRouter()
    
   const languages = [
    { id: "th", label: "TH", activeColor: "bg-blue-500" },
    { id: "en", label: "EN", activeColor: "bg-blue-500" },
  ];

  return (
    <LayoutGroup id="switcher-group">
    <div className="flex p-1 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-white/10 w-fit">
      {languages.map((lang) => (
        <button key={lang.id}
          onClick={() => router.push(`/${lang.id}`, { scroll: false }) }
          className="relative px-4 py-2 text-sm font-bold transition-colors duration-300 focus:outline-none"
        >
          <span className={`relative z-10 ${currentLocale === lang.id ? "text-white" : "text-gray-400 hover:text-gray-200"}`}>
            {lang.label}
          </span>

          {currentLocale === lang.id && (
            <motion.div
              layoutId="switcherTab"
              className={`absolute inset-0 rounded-xl shadow-lg ${lang.activeColor}`}
              transition={{ type: "spring", bounce: 0.2, duration: 0.1 }}
            />
          )}
        </button>
      ))}
    </div>
    </LayoutGroup>
            )
}

