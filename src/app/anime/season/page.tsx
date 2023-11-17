"use client";

import { useState, useEffect } from "react";
import {
	Layout,
	ListPage,
	Paginations,
	DropdownType,
	Skeleton,
	SelectSearch,
} from "@/components";
import { getAnime } from "@/libs";
import { scroolTop } from "@/utils";
import { listType, listSkeletonPage } from "@/data";

const Page = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [type, setType] = useState<string>("");
	const [season, setSeason] = useState<string>("");
	const [urlSeason, setUrlSeason] = useState<string>("/now");
	const [listSeason, setListSeason] = useState<any>([]);
	const [anime, setAnime] = useState<any>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState<number>(1);
	const [totalData, setTotalData] = useState<number>(0);

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, type, urlSeason]);

	const fetchData = async () => {
		setIsLoading(true);
		scroolTop();
		const animeSeasons = await getAnime(
			`seasons${urlSeason}?page=${page}&limit=20${
				type !== "" ? `&filter=${type}` : ""
			}`
		);
		if (listSeason.length === 0) {
			let list: any = [];
			const listSeasons = await getAnime(`seasons`);
			listSeasons.data?.map((season: any) => {
				season.seasons?.reverse().map((res: any) => {
					list.push({
						label: `${res} ${season.year}`,
						value: `/${season.year}/${res}`,
					});
				});
			});
			setListSeason(list);
			setSeason(`${animeSeasons.data[0].season} ${animeSeasons.data[0].year}`);
		}

		setTotalPage(animeSeasons.pagination.last_visible_page);
		setAnime(animeSeasons);
		setTotalData(animeSeasons.pagination.items.total);
		setIsLoading(false);
	};

	const fetchDataSeason = async () => {};

	return (
		<main className='flex flex-col items-center justify-between'>
			<Layout>
				<div className='w-full snap-x rounded-box lg:px-6 md:px-4 p-2'>
					<div className='card shadow-xl bg-gray-700'>
						<div className='grid grid-cols-1 gap-2 bg-base-100 w-full rounded-t-lg p-2 text-center'>
							{/* <div className='w-full'>
							<h5 className='font-semibold lg:text-xl md:text-base text-sm'>
									{season}
								</h5>
							</div> */}
							<SelectSearch
								data={listSeason}
								className='lg:w-1/4 md:w-1/3 sm:w-full items-center justify-center mx-auto'
								placeholder={season}
								setData={setUrlSeason}
								setPage={setPage}
							/>
						</div>
						<div className='grid grid-cols-2 gap-2 bg-base-100'>
							<div className="w-full text-center">
								<DropdownType
									setPage={setPage}
									setData={setType}
									value={type}
									listData={listType}
								/>
							</div>
							<div className='w-full text-center'>
								<h5 className='font-semibold lg:text-xl md:text-base text-sm mt-2'>
									Total: {totalData} Anime
								</h5>
							</div>
						</div>
						{isLoading ? (
							<div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 p-2'>
								<Skeleton dataSkeleton={listSkeletonPage} />
							</div>
						) : (
							<ListPage anime={anime} />
						)}
					</div>
				</div>
				<div className='flex justify-center p-2 overflow-x-auto'>
					{isLoading ? null : (
						<Paginations
							currentPage={page}
							totalPage={totalPage}
							nextPage={page + 1}
							prevPage={page - 1}
							setPage={setPage}
						/>
					)}
				</div>
			</Layout>
		</main>
	);
};

export default Page;
