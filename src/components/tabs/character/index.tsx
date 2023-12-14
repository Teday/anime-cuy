"use client";

import Image from "next/image";
import { listSkeletonChar } from "@/data";
interface props {
	char: any;
	type: string;
}

export const Char = ({ char, type }: props) => {

	return (
		<div className='w-full px-3 pt-4'>
			<div
				className={`grid ${
					char.data?.length <= 0
						? "grid-cols-1"
						: "lg:grid-cols-2 sm:grid-cols-1"
				} gap-2`}
			>
				{char.data === undefined ? (
					listSkeletonChar.map((res: any) => {
						return (
							<div className='flex flex-row gap-4 w-full' key={res.no}>
								<div className='w-1/2'>
									<div className='skeleton h-40'></div>
								</div>
								<div className=' h-40 w-full p-2'>
									<div className='skeleton h-4 w-full'></div>
									<div className='skeleton h-4 w-full mt-2'></div>
									<div className='skeleton h-4 w-full mt-2'></div>
									<div className='skeleton h-4 w-full mt-2'></div>
									<div className='skeleton h-4 w-full mt-2'></div>
								</div>
							</div>
						);
					})
				) : char.data?.length <= 0 ? (
					<div className='flex items-center justify-center w-full pt-4 '>
						<p className=''>There is no character data yet</p>
					</div>
				) : (
					char.data?.map((char: any, i: number) => {
						return (
							<div className='w-full border-b border-white py-1' key={i}>
								<div className='flex w-full'>
									<Image
										unoptimized
										className='h-[150px] w-[100px] object-fill rounded-lg'
										src={char.character.images.webp.image_url}
										width={300}
										height={300}
										alt='images char'
										key={i}
									/>
									<div className='flex flex-col'>
										<p className='text-sm ml-2'>Name: {char.character.name}</p>
										<p className='text-sm ml-2'>role: {char.role} Character</p>
										{ type === 'anime' ? (
											<>
												<p className='text-sm ml-2'>Voice Actor: </p>
												{char.voice_actors?.map((voice: any, idx: number) => {
													return (
														<p className='text-sm ml-2' key={idx}>
															{voice.person.name} ({voice.language})
														</p>
													);
												})}
											</>
										) : null }
									</div>
								</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};
