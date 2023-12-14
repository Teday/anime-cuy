"use client";

import Image from "next/image";
import { listSkeletonPicture } from "@/data";

interface props {
	picture: any;
}

export const Pictures = ({ picture }: props) => {
	return (
		<div className='w-full px-3 pt-4'>
			{picture.data === undefined ? (
				<div className='grid grid-cols-2'>
					{listSkeletonPicture.map((res: any) => {
						return (
							<div
								className='skeleton p-20 mx-auto mt-4 mb-2'
								key={res.no}
							></div>
						);
					})}
				</div>
			) : picture.data?.length <= 0 ? (
				<h3>No pictures yet</h3>
			) : (
				<div className='grid grid-cols-2'>
					{picture.data?.map((picture: any, i: number) => {
						return (
							<Image
								unoptimized
								className='object-fill rounded-lg px-6 sm:px-6 md:px-8 py-6'
								src={picture.webp.image_url}
								width={300}
								height={300}
								alt='images picture'
								key={i}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};
