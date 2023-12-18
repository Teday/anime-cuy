"use client";

import { Layout } from "@/components";
import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";

const Page = () => {

	const searchRef = useRef<HTMLInputElement>(null);
	const router = useRouter();

	const handleSearch = (e: any) => {
        if(e.key === 'Enter' || e.type === 'click' ){
            e.preventDefault();
            const keyword: string = searchRef.current?.value || "";
            if (keyword?.length > 0 && !keyword.startsWith(" ")) {
                router.push(`/character/search/${keyword}`);
            }
        }
	};

	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Layout>
				<div className='w-full snap-x rounded-box lg:px-6 md:px-4 p-2'>
					<div className='card shadow-xl bg-gray-700'>
						<div className='grid grid-cols-1 gap-2 bg-base-100 w-full rounded-t-lg p-2'>
							<div className='w-full text-center'>
								<h5 className='lg:text-xl md:text-base text-md'>
									Search Character
								</h5>
							</div>
						</div>
						<div className="h-screen items-center mt-10 lg:mx-24 md:mx-16 mx-4">
							<div className='relative join-item'>
								<input
									type='text'
									placeholder='Search Character'
									className='rounded-md h-16 w-full text-lg text-black bg-gray-300 p-3 placeholder-black outline-none'
									ref={searchRef}
									onKeyUp={handleSearch}
								/>
								<button className='absolute top-3 end-1' onClick={handleSearch}>
									<MagnifyingGlass size={42} className='text-black' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		</main>
	);
};

export default Page;
