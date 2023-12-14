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
	const [anime, setAnime] = useState<any>({ data: [] });
	const [animeChar, setAnimeChar] = useState<any>([]);
	const [animeEpisodes, setAnimeEpisodes] = useState<any>([]);
	const [pageEpisode, setPageEpisode] = useState<number>(1);
	const [animeStatistics, setAnimeStatistics] = useState<any>([]);
	const [animePictures, setAnimePictures] = useState<any>([]);

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const fetchData = async () => {
		const animeDetail = await getData(`anime/${params.id}/full`);
		setAnime(animeDetail);
		setIsLoading(false);
	};

	const fetchDataChar = async () => {
		if (!animeChar.data) {
			//biar keliatan loading 😂
			setTimeout(async () => {
				const animeChars = await getData(`anime/${params.id}/characters`);
				setAnimeChar(animeChars);
			}, 1000);
		}
	};

	const fetchDataEpisode = async () => {
		if (!animeEpisodes.data) {
			//biar keliatan loading 😂
			setTimeout(async () => {
				const animeEpisode = await getData(
					`anime/${params.id}/episodes?page=${pageEpisode}`
				);
				setAnimeEpisodes(animeEpisode);
			}, 1000);
		}
	};

	const fetchDataStats = async () => {
		if (!animeStatistics.data) {
			//biar keliatan loading 😂
			setTimeout(async () => {
				const animeStatistic = await getData(`anime/${params.id}/statistics`);
				setAnimeStatistics(animeStatistic);
			}, 1000);
		}
	};

	const fetchDataPictures = async () => {
		//biar keliatan loading 😂
		setTimeout( async () => {
			const animePicture = await getData(`anime/${params.id}/pictures`);
			setAnimePictures(animePicture);
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
									{anime.data?.title}
								</h5>
							</div>
						</div>
						{anime.data === undefined ? (
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
												src={anime.data?.images.webp.image_url}
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
														Type: {anime.data?.type}
													</p>
													<p className='text-xs mb-1'>
														Episodes: {anime.data?.episodes}
													</p>
													<p className='text-xs mb-1'>
														Status: {anime.data?.status}
													</p>
													<p className='text-xs mb-1'>
														Aired: {anime.data?.aired?.string}
													</p>
													<p className='text-xs mb-1'>
														Season: {anime.data?.season} {anime.data?.year}
													</p>
													<p className='text-xs mb-1'>
														Broadcast: {anime.data?.broadcast?.string}
													</p>
													<p className='text-xs mb-1'>
														Producers:{" "}
														{anime.data?.producers?.map(
															(producer: any, i: number, idx: any) => {
																return (
																	<span key={i}>{` ${producer.name} ${
																		idx.length === i + 1 ? "" : ","
																	}`}</span>
																);
															}
														)}
													</p>
													<p className='text-xs mb-1'>
														Studios:{" "}
														{anime.data?.studios?.map(
															(studio: any, i: number, idx: any) => {
																return (
																	<span key={i}>{` ${studio.name} ${
																		idx.length === i + 1 ? "" : ","
																	}`}</span>
																);
															}
														)}
													</p>
													<p className='text-xs mb-1'>
														Source: {anime.data?.source}
													</p>
													<p className='text-xs mb-1'>
														Genres:{" "}
														{anime.data?.genres?.map(
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
														Theme:{" "}
														{anime.data?.themes?.map(
															(theme: any, i: number, idx: any) => {
																return (
																	<span key={i}>{` ${theme.name} ${
																		idx.length === i + 1 ? "" : ","
																	}`}</span>
																);
															}
														)}
													</p>
													<p className='text-xs mb-1'>
														Demographic:{" "}
														{anime.data?.demographics?.map(
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
														Duration: {anime.data?.duration}
													</p>
													<p className='text-xs mb-1'>
														Rating: {anime.data?.rating}
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
													setActiveTabs("episode");
													fetchDataEpisode();
												}}
												aria-label='Episodes'
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
											<Detail detail={anime} isLoading={isLoading} type="anime"/>
										</div>
										<div
											className={`w-full ${
												activeTabs === "char" ? "visible" : "hidden"
											}`}
										>
											<Char char={animeChar} type="anime"/>
										</div>
										<div
											className={`w-full ${
												activeTabs === "episode" ? "visible" : "hidden"
											}`}
										>
											<Episode anime={animeEpisodes} />
										</div>
										<div
											className={`w-full ${
												activeTabs === "stats" ? "visible" : "hidden"
											}`}
										>
											<Stats stats={animeStatistics} type="anime"/>
										</div>
										<div
											className={`w-full ${
												activeTabs === "picture" ? "visible" : "hidden"
											}`}
										>
											<Pictures picture={animePictures} />
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
