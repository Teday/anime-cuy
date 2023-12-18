"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export const InputSearch = () => {
	const searchRef = useRef<HTMLInputElement>(null);
    let filter = 'anime';
	const router = useRouter();

	const handleSearch = (e: any) => {
        if(e.key === 'Enter' || e.type === 'click' ){
            e.preventDefault();
            const keyword: string = searchRef.current?.value || "";
            if (keyword?.length > 0 && !keyword.startsWith(" ")) {
                router.push(`/${filter}/search/${keyword}`);
            }
        }
	};

	return (
		<div className='join'>
			<select className='join-item h-8 text-black bg-gray-300 cursor-pointer outline-none' onChange={(e: any) => {
                filter = e.target.value
            }}>
				<option value="anime">
					Anime
				</option>
				<option value="manga">Manga</option>
				<option value="character">Character</option>
			</select>
			<div className='relative join-item'>
				<input
					type='text'
					placeholder='Search'
					className='rounded-r-md h-8 text-black bg-gray-300 p-3 placeholder-black outline-none'
					ref={searchRef}
					onKeyUp={handleSearch}
				/>
				<button className='absolute top-0 end-1' onClick={handleSearch}>
					<MagnifyingGlass size={28} className='text-black' />
				</button>
			</div>
		</div>
	);
};
