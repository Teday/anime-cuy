"use client";

import { Star } from "@phosphor-icons/react";
import Image from "next/image";
import { NoData } from "./noData";
import Link from "next/link";

interface props {
	data: any;
	page: string;
}

export const ListPage = ({ data, page }: props) => {
	return (
		<div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 p-2'>
			{data.data?.length <= 0 ? (
				<NoData />
			) : (
				data.data?.map((res: any, i: number) => {
					return (
						<Link
							href={`/${page}/${res.mal_id}`}
							className='card w-full h-[400px] bg-base-100 shadow-xl'
							key={i}
						>
							<figure>
								<Image
									className='w-full max-h-[200px] min-h-[200px] object-cover object-top rounded-t-box'
									src={res.images.webp.image_url}
									width={500}
									height={500}
									alt='images anime'
								/>
							</figure>
							<div className='card-body p-2 max-h-[200px] min-h-[200px] overflow-x-auto'>
								<h2 className='card-title text-sm break-words'>{res.title}</h2>
								<p className='text-[10px] text-gray-300 m-0'>{res.synopsis}</p>
								<p className='text-[10px] text-gray-300 m-0'>
									{res.season === null ? "" : res.season}{" "}
									{res.year === null ? "" : res.year}
								</p>
								<p className='text-[10px] text-gray-300 m-0'>
									{page === "anime"
										? `Episode: ${
												res.episodes === null ? "?" : res.episodes
										} Eps,
										${res.duration}`
										: `Chapter: ${res.chapters === null ? "?" : res.chapters}`}
								</p>
								{page === "manga" ? (
									<>
										<p className='text-[10px] text-gray-300 m-0'>
											Volume: {res.volumes === null ? "?" : res.volumes}
										</p>
										<p className='text-[10px] text-gray-300 m-0'>
											Status: {res.status === null ? "?" : res.status}
										</p>
									</>
								) : null}
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
									{page === "anime"
										? `Studio: ${
												res.studios?.length > 0
													? res.studios?.map((studio: any) => {
															return studio.name;
													})
													: "-"
										}`
										: `Author: ${
												res.authors?.length > 0
													? res.authors?.map((author: any) => {
															return author.name;
													})
													: "-"
										}`}
								</p>
								<p className='text-[10px] text-gray-300 m-0'>
									{page === "anime"
										? `Source: ${res.source}`
										: `Serializations: ${
												res.serializations?.length > 0
													? res.serializations?.map((serial: any) => {
															return serial.name;
													})
													: "-"
										}`}
								</p>
								<p className='text-[10px] text-gray-300 m-0'>
									Theme: {res.themes?.length > 0 ? res.themes?.map( (theme: any) => { return `${theme.name} ` }) : "-"}
								</p>
								<p className='text-[10px] text-gray-300 m-0'>
									Demographic:{" "}
									{res.demographics?.length > 0
										? res.demographics?.map((demographic: any) => { return `${demographic.name} ` })
										: "-"}
								</p>
							</div>
							<div className='grid grid-cols-2 gap-2 rounded-b-box bottom-0'>
								<div className='w-full p-2'>
									<p className='text-xs flex justify-center'>
										<Star size={14} className='text-yellow-500 mr-1' />
										{res.score === null ? "?" : res.score}
									</p>
								</div>
								<div className='w-full p-2 text-center'>
									<p className='flex text-xs justify-center'>
										Rank: {res.rank === null ? "-" : res.rank}
									</p>
								</div>
							</div>
						</Link>
					);
				})
			)}
		</div>
	);
};
