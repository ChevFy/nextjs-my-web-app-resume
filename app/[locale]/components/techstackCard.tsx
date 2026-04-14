"use client"
import { motion } from "framer-motion"
import Image  from "next/image"

type TechstackItem = {
    id: string
    name: string
    img: string
}

type TechstackCardProps = {
    title: string
    items: TechstackItem[]
}

export default function TechstackCard({ title, items }: TechstackCardProps) {
    return (
        <div className="flex flex-col mt-5 gap-5">
            <div className="flex items-center gap-3 mt-5">
                <div className="w-1 h-6 bg-blue-500 rounded-full" />
                <h3 className="text-xl font-bold tracking-tight text-slate-100 uppercase">
                    {title}
                    <span className="ml-2 text-blue-500/50">/</span>
                </h3>
            </div>
            <div className="flex flex-row w-ful h-15 bg-white/10 rounded-2xl overflow-hidden">
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex items-center flex-nowrap gap-8 w-max"
                >
                    {[...items, ...items, ...items].map((item, i) => (
                        <img key={`${item.id}-${i}`} width={50} height={50} src={item.img} alt={item.name} className="flex-shrink-0" />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}