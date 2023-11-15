"use client";

import Image from "next/image";

interface props {
	anime: any;
}

export const Pictures = ({ anime }: props) => {
	
	return (
		<div className='w-full px-3 pt-4'>
			{ anime.data?.length <= 0 ? (
				<h3>Tidak Ada Data Picture</h3>
			) : (
				<div className='grid grid-cols-2'>
					{ anime.data?.map((picture: any, i: number) => {
						return (
							<Image
								className='object-fill rounded-lg px-6 sm:px-6 md:px-8 py-6'
								src={picture.jpg.image_url}
								width={300}
								height={300}
								alt='images anime'
								key={i}
							/>
						);
					})}
				</div>
			) }
		</div>
	);
};
