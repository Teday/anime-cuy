"use client";
import Image from "next/image";

interface props {
	animeSeasonsNow: any;
}

export const Card = ({ animeSeasonsNow }: props) => {
	return (
		<div className='grid grid-cols-5 gap-2'>
			{animeSeasonsNow.data.map((res: any, i: number) => {
				return (
					<div className='w-full p-2 relative cursor-pointer' key={i}>
						<Image
							src={res.images.jpg.image_url}
							width={100}
							height={100}
							alt='images anime'
						/>
						<div className='absolute bottom-0 rounded-b-box p-2 bg-black w-full bg-opacity-5'>
							<h3 className='font-serif'>{ res.title }</h3>
						</div>
					</div>
				);
			})}
		</div>
	);
};
