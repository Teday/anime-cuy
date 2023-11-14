"use client";

import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import { NoData } from "./noData";

interface props {
	isLoading: boolean;
	anime: any;
}

export const ListPage = ({ isLoading, anime }: props) => {
	return (
		<div className='grid l:grid-cols-5 m:grid-cols-3 s:grid-cols-2 gap-4 p-2'>
			{isLoading ? (
				<div className='flex w-screen h-screen items-center justify-center'>
					<div className='custom-loader'></div>
				</div>
			) : anime.data?.length <= 0 ? (
				<NoData />
			) : (
				anime.data?.map((res: any, i: number) => {
					return (
						<div
							className='card w-full h-[400px] bg-base-100 shadow-xl'
							key={i}
						>
							<figure>
								<Image
									className='w-full max-h-[200px] min-h-[200px] object-cover object-top rounded-t-box'
									src={res.images.jpg.image_url}
									width={500}
									height={500}
									alt='images anime'
								/>
							</figure>
							<div className='card-body p-2 max-h-[200px] min-h-[200px] overflow-x-auto'>
								<h2 className='card-title text-sm break-words'>{res.title}</h2>
								<p className='text-[10px] text-gray-300 m-0'>
									{res.synopsis}
								</p>
								<p className='text-[10px] text-gray-300 m-0'>
									{res.season === null ? "" : res.season}{" "}
									{res.year === null ? "" : res.year}
								</p>
								<p className='text-[10px] text-gray-300 m-0'>
									Episode: {res.episodes === null ? "?" : res.episodes} Eps,{" "}
									{res.duration}
								</p>
								<p className='text-[10px] text-gray-300 m-0'>
									Genre:{" "}
									{res.genres.map((genre: any, i: number) => {
										return <span key={i}>{genre.name} </span>;
									})}
								</p>
								<p className='text-[10px] text-gray-300 m-0'>
									Type: {res.type}
								</p>
								<p className='text-[10px] text-gray-300 m-0'>
									Studio: {res.studios.length > 0 ? res.studios[0].name : "-"}
								</p>
								<p className='text-[10px] text-gray-300 m-0'>
									Source: {res.source}
								</p>
								<p className='text-[10px] text-gray-300 m-0'>
									Theme: {res.themes.length > 0 ? res.themes[0].name : "-"}
								</p>
								<p className='text-[10px] text-gray-300 m-0'>
									Demographic:{" "}
									{res.demographics.length > 0 ? res.demographics[0].name : "-"}
								</p>
							</div>
							<div className='grid grid-cols-2 gap-2 rounded-b-box bottom-0'>
								<div className='w-full p-2'>
									<p className='text-xs flex justify-center'>
										<Star size={14} className='text-yellow-500 mr-1' />
										{res.score}
									</p>
								</div>
								<div className='w-full p-2 text-center'>
									<p className='flex text-xs justify-center'>
										Rank: {res.rank === null ? "-" : res.rank}
									</p>
								</div>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
};
