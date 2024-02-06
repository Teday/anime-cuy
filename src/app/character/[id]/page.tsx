"use client";

import { useState, useEffect } from "react";
import { Layout, Pictures, Detail } from "@/components";
import { getData } from "@/libs";
import Image from "next/image";
import { listSkeletonInformation, listSkeletonStats } from "@/data";
import Link from "next/link";

interface props {
	params: {
		id: string;
	};
}

const Page = ({ params }: props) => {

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isInformasi, setIsInformasi] = useState<boolean>(true);
	const [activeTabs, setActiveTabs] = useState<string>("detail");
	const [characters, setCharacters] = useState<any>({ data: [] });

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const fetchData = async () => {
		const charactersDetail = await getData(`characters/${params.id}/full`);
		setCharacters(charactersDetail);
		setIsLoading(false);
	};

	return (
		<main className='flex flex-col items-center justify-between'>
			<Layout>
				<div className='w-full snap-x rounded-box sm:px-6 md:px-4 py-2 px-2'>
					<div className='card shadow-xl bg-gray-700'>
						<div className='bg-base-100 w-full rounded-t-lg p-2'>
							<div className='w-full text-center'>
								<h5 className='font-semibold lg:text-xl md:text-base text-sm'>
									{characters.data?.name}
								</h5>
							</div>
						</div>
						{characters.data === undefined ? (
							<div className='h-screen'>
								<div className='flex items-center justify-center'>
									<p className=' text-[200px]'>🙏</p>
								</div>
								<div className='flex items-center justify-center'>
									<p className='text-white text-4xl'>Data Tidak ditemukan</p>
								</div>
							</div>
						) : (
							<div className='flex sm:flex-nowrap flex-wrap w-full'>
								<div className='p-2 sm:w-1/3 w-full'>
									<div className='p-1 lg:border lg:border-white md:border md:border-white'>
										{isLoading ? (
											<div className='skeleton w-full h-[500px] '></div>
										) : (
											<Image
												unoptimized
												className='w-full object-cover rounded-md'
												src={characters.data?.images.webp.image_url}
												width={250}
												height={250}
												alt='images anime'
											/>
										)}
									</div>
									<div className='p-1 lg:border lg:border-white lg:border-t-0 md:border md:border-white md:border-t-0'>
										{isLoading ? (
											<div>
												<div className='skeleton w-full h-5 my-2'></div>
												{listSkeletonInformation.map((res: any) => {
													return (
														<div
															className='skeleton w-full h-4 my-1'
															key={res.no}
														></div>
													);
												})}
											</div>
										) : (
											<div
												className='collapse collapse-arrow'
												onClick={() => setIsInformasi(!isInformasi)}
											>
												<input type='checkbox' checked={isInformasi} />
												<div className='collapse-title text-xl font-medium'>
													Information
												</div>
												<div className='collapse-content'>
													<p className='text-xs mb-1'>
														Anime:{" "}
														{characters.data?.anime?.map(
															(anime: any, i: number, idx: any) => {
																return (
																	<Link
																		href={`/anime/${anime.anime.mal_id}`}
																		className='hover:text-blue-500'
																		key={i}
																	>
																		<span key={i}>{` ${anime.anime.title} ${
																			idx.length === i + 1 ? "" : ","
																		}`}</span>
																	</Link>
																);
															}
														)}
													</p>
													<p className='text-xs mb-1'>
														Manga:{" "}
														{characters.data?.manga?.map(
															(manga: any, i: number, idx: any) => {
																return (
																	<Link
																		href={`/manga/${manga.manga.mal_id}`}
																		className='hover:text-blue-500'
																		key={i}
																	>
																		<span key={i}>{` ${manga.manga.title} ${
																			idx.length === i + 1 ? "" : ","
																		}`}</span>
																	</Link>
																);
															}
														)}
													</p>
												</div>
											</div>
										)}
									</div>
									{/* <div className='p-1 lg:border lg:border-white lg:border-t-0 md:border md:border-white md:border-t-0'>
										{isLoading ? (
											<div>
												<div className='skeleton w-full h-5 my-2'></div>
												{listSkeletonStats.map((res: any) => {
													return (
														<div
															className='skeleton w-full h-4 my-1'
															key={res.no}
														></div>
													);
												})}
											</div>
										) : (
											<div
												className='collapse collapse-arrow'
												onClick={() => setIsStatistic(!isStatistic)}
											>
												<input type='checkbox' checked={isStatistic} />
												<div className='collapse-title text-xl font-medium'>
													Statistics
												</div>
												<div className='collapse-content'>
													<p className='text-xs mb-1'>
														Score: {formatNumber(anime.data?.score)} (score by{" "}
														{formatNumber(anime.data?.scored_by)} users)
													</p>
													<p className='text-xs mb-1'>
														Ranked: {formatNumber(anime.data?.rank)}
													</p>
													<p className='text-xs mb-1'>
														Popularity: {formatNumber(anime.data?.popularity)}
													</p>
													<p className='text-xs mb-1'>
														Members: {formatNumber(anime.data?.members)}
													</p>
													<p className='text-xs mb-1'>
														Favorites: {formatNumber(anime.data?.favorites)}
													</p>
												</div>
											</div>
										)}
									</div> */}
								</div>
								<div className='p-2 w-full'>
									<div className='w-full items-center justify-center'>
										<div className='tabs tabs-bordered overflow-x-auto w-full'>
											<input
												type='radio'
												name='my_tabs_1'
												className='tab text-white'
												onChange={() => setActiveTabs("detail")}
												aria-label='Details'
												checked={activeTabs === "detail" ? true : false}
											/>
											{/* <input
												type='radio'
												name='my_tabs_1'
												className='tab text-white'
												onChange={() => {
													fetchDataPictures();
													setActiveTabs("picture");
												}}
												aria-label='Pictures'
											/> */}
										</div>
										<div
											className={`w-full ${
												activeTabs === "detail" ? "visible" : "hidden"
											}`}
										>
											<Detail detail={characters} isLoading={isLoading} type="character"/>
										</div>
										{/* <div
											className={`w-full ${
												activeTabs === "picture" ? "visible" : "hidden"
											}`}
										>
											<Pictures picture={animePictures} />
										</div> */}
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</Layout>
		</main>
	);
};

export default Page;
