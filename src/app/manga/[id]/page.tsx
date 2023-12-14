"use client";

import { useState, useEffect } from "react";
import { Layout, Detail, Char, Episode, Stats, Pictures } from "@/components";
import { getData } from "@/libs";
import { formatNumber } from "@/utils";
import Image from "next/image";
import { listSkeletonInformation, listSkeletonStats } from "@/data";

interface props {
	params: {
		id: string;
	};
}

const Page = ({ params }: props) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isInformasi, setIsInformasi] = useState<boolean>(true);
	const [isStatistic, setIsStatistic] = useState<boolean>(true);
	const [activeTabs, setActiveTabs] = useState<string>("detail");
	const [manga, setmanga] = useState<any>({ data: [] });
	const [mangaChar, setmangaChar] = useState<any>([]);
	const [mangaEpisodes, setmangaEpisodes] = useState<any>([]);
	const [pageEpisode, setPageEpisode] = useState<number>(1);
	const [mangaStatistics, setmangaStatistics] = useState<any>([]);
	const [mangaPictures, setmangaPictures] = useState<any>([]);

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const fetchData = async () => {
		const mangaDetail = await getData(`manga/${params.id}/full`);
		setmanga(mangaDetail);
		setIsLoading(false);
	};

	const fetchDataChar = async () => {
		if (!mangaChar.data) {
			//biar keliatan loading 😂
			setTimeout(async () => {
				const mangaChars = await getData(`manga/${params.id}/characters`);
				setmangaChar(mangaChars);
			}, 1000);
		}
	};

	const fetchDataEpisode = async () => {
		if (!mangaEpisodes.data) {
			//biar keliatan loading 😂
			setTimeout(async () => {
				const mangaEpisode = await getData(
					`manga/${params.id}/episodes?page=${pageEpisode}`
				);
				setmangaEpisodes(mangaEpisode);
			}, 1000);
		}
	};

	const fetchDataStats = async () => {
		if (!mangaStatistics.data) {
			//biar keliatan loading 😂
			setTimeout(async () => {
				const mangaStatistic = await getData(`manga/${params.id}/statistics`);
				setmangaStatistics(mangaStatistic);
			}, 1000);
		}
	};

	const fetchDataPictures = async () => {
		//biar keliatan loading 😂
		setTimeout( async () => {
			const mangaPicture = await getData(`manga/${params.id}/pictures`);
			setmangaPictures(mangaPicture);
		}, 1000)
	};

	return (
		<main className='flex flex-col items-center justify-between'>
			<Layout>
				<div className='w-full snap-x rounded-box sm:px-6 md:px-4 py-2 px-2'>
					<div className='card shadow-xl bg-gray-700'>
						<div className='bg-base-100 w-full rounded-t-lg p-2'>
							<div className='w-full text-center'>
								<h5 className='font-semibold lg:text-xl md:text-base text-sm'>
									{manga.data?.title}
								</h5>
							</div>
						</div>
						{manga.data === undefined ? (
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
												src={manga.data?.images.webp.image_url}
												width={250}
												height={250}
												alt='images manga'
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
														Type: {manga.data?.type}
													</p>
													<p className='text-xs mb-1'>
														Volumes: {manga.data?.volumes === null ? '?' : manga.data?.volumes }
													</p>
													<p className='text-xs mb-1'>
														Chapters: {manga.data?.chapters === null ? '?' : manga.data?.chapters }
													</p>
													<p className='text-xs mb-1'>
														Status: {manga.data?.status}
													</p>
													<p className='text-xs mb-1'>
														Published: {manga.data?.published?.string}
													</p>
													<p className='text-xs mb-1'>
														Genres:{" "}
														{manga.data?.genres?.map(
															(genre: any, i: number, idx: any) => {
																return (
																	<span key={i}>{` ${genre.name} ${
																		idx.length === i + 1 ? "" : ","
																	}`}</span>
																);
															}
														)}
													</p>
													<p className='text-xs mb-1'>
														Demographic:{" "}
														{manga.data?.demographics?.map(
															(demographic: any, i: number, idx: any) => {
																return (
																	<span key={i}>{` ${demographic.name} ${
																		idx.length === i + 1 ? "" : ","
																	}`}</span>
																);
															}
														)}
													</p>
													<p className='text-xs mb-1'>
														Serialization: {manga.data?.serializations?.map(
															(serialization: any, i: number, idx: any) => {
																return (
																	<span key={i}>{` ${serialization.name} ${
																		idx.length === i + 1 ? "" : ","
																	}`}</span>
																);
															}
														)}
													</p>
													<p className='text-xs mb-1'>
														Authors: {manga.data?.authors?.map(
															(author: any, i: number, idx: any) => {
																return (
																	<span key={i}>{` ${author.name} ${
																		idx.length === i + 1 ? "" : ","
																	}`}</span>
																);
															}
														)}
													</p>
												</div>
											</div>
										)}
									</div>
									<div className='p-1 lg:border lg:border-white lg:border-t-0 md:border md:border-white md:border-t-0'>
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
														Score: {formatNumber(manga.data?.score)} (score by{" "}
														{formatNumber(manga.data?.scored_by)} users)
													</p>
													<p className='text-xs mb-1'>
														Ranked: {formatNumber(manga.data?.rank)}
													</p>
													<p className='text-xs mb-1'>
														Popularity: {formatNumber(manga.data?.popularity)}
													</p>
													<p className='text-xs mb-1'>
														Members: {formatNumber(manga.data?.members)}
													</p>
													<p className='text-xs mb-1'>
														Favorites: {formatNumber(manga.data?.favorites)}
													</p>
												</div>
											</div>
										)}
									</div>
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
											<input
												type='radio'
												name='my_tabs_1'
												className='tab text-white'
												onChange={() => {
													setActiveTabs("char");
													fetchDataChar();
												}}
												aria-label='Character'
											/>
											<input
												type='radio'
												name='my_tabs_1'
												className='tab text-white'
												onChange={() => {
													fetchDataStats();
													setActiveTabs("stats");
												}}
												aria-label='Stats'
											/>
											<input
												type='radio'
												name='my_tabs_1'
												className='tab text-white'
												onChange={() => {
													fetchDataPictures();
													setActiveTabs("picture");
												}}
												aria-label='Pictures'
											/>
										</div>
										<div
											className={`w-full ${
												activeTabs === "detail" ? "visible" : "hidden"
											}`}
										>
											<Detail detail={manga} isLoading={isLoading} type="manga" />
										</div>
										<div
											className={`w-full ${
												activeTabs === "char" ? "visible" : "hidden"
											}`}
										>
											<Char char={mangaChar} type="manga"/>
										</div>
										<div
											className={`w-full ${
												activeTabs === "stats" ? "visible" : "hidden"
											}`}
										>
											<Stats stats={mangaStatistics} type="manga"/>
										</div>
										<div
											className={`w-full ${
												activeTabs === "picture" ? "visible" : "hidden"
											}`}
										>
											<Pictures picture={mangaPictures} />
										</div>
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
