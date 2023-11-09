'use client'

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";
import { useRouter } from 'next/navigation'

export const InputSearch = () => {
    
    const searchRef = useRef<HTMLInputElement>(null)
    const router = useRouter()

    const handleSearch = (e:any) => {
        e.preventDefault();
        const keyword:string = searchRef.current?.value || ""
        if(keyword.length > 0 && !keyword.startsWith(" ")){
            router.push(`/anime/search/${keyword}`)
        }
    }

    
    return(
        <div className="relative">
            <input 
                type="text"
                placeholder="Cari Anime"
                className="input input-bordered w-full max-w-xs h-8 text-black bg-gray-300 p-3 placeholder-black"
                ref={searchRef}
                onKeyUp={ (e: any) => {
                    if(e.code === 'Enter' && e.target.value.length > 0 && !e.target.value.startsWith(" ")){
                        router.push(`/anime/search/${e.target.value}`)
                    }
                }}
            />
            <button className="absolute top-0 end-1" onClick={handleSearch}>
                <MagnifyingGlass size={28} className="text-black"/>
            </button>
        </div>
    )
}