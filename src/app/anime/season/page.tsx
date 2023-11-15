"use client";

import { useState, useEffect } from "react";
import {
	Layout,
	ListPage,
	Paginations,
	DropdownType,
	SelectComponent,
} from "@/components";
import { getAnime } from "@/libs";
import { scroolTop } from "@/utils";
import { listType } from '@/data';

const Page = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [type, setType] = useState<string>("");
	const [season, setSeason] = useState<string>("");
	const [year, setYear] = useState<string>("");
	const [listSeason, setListSeason] = useState<any>([]);
	const [listYear, setListYear] = useState<any>([]);
	const [anime, setAnime] = useState<any>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState<number>(1);
	const [totalData, setTotalData] = useState<number>(0);

	useEffect(() => {
		fetchData(type);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, type]);

	const fetchData = async (type: string) => {
		setIsLoading(true);
		scroolTop();
		let animeSeasons: any;
		if (type === "") {
			let list: any = [];
			animeSeasons = await getAnime(`seasons/now?page=${page}&limit=20`);
			const listSeasons = await getAnime(`seasons`);
			listSeasons.data?.map((season: any) => {
				season.seasons?.reverse().map((res: any) => {
					list.push({
						label: `${res} ${season.year}`,
						value: `${season.year}/${res}`,
					});
				});
			});
			setListSeason(list);
		} else {
			animeSeasons = await getAnime(
				`seasons/now?page=${page}&limit=20&filter=${type}`
			);
		}
		setSeason(`${animeSeasons.data[0].season} ${animeSeasons.data[0].year}`);
		setTotalPage(animeSeasons.pagination.last_visible_page);
		setAnime(animeSeasons);
		setTotalData(animeSeasons.pagination.items.total);
		setIsLoading(false);
	};
	console.log(listSeason);
	return (
		<main className='flex flex-col items-center justify-between'>
			<Layout>
				<div className='w-full snap-x rounded-box lg:px-6 md:px-4 p-2'>
					<div className='card shadow-xl bg-gray-700'>
						<div className='grid grid-cols-1 gap-2 bg-base-100 w-full rounded-t-lg p-2'>
							<div className='w-full text-center'>
								<h5 className='font-semibold lg:text-xl md:text-base text-sm'>
									{season}
								</h5>
							</div>
						</div>
						<div className='w-full grid grid-cols-2 bg-base-100 overflow-x-auto'>
							<DropdownType setPage={setPage} setData={setType} value={type} listData={listType} />
							<div className='w-full text-center'>
								<h5 className='font-semibold lg:text-xl md:text-base text-sm'>
									Total: {totalData} Anime
								</h5>
							</div>
						</div>
						<ListPage anime={anime} isLoading={isLoading} />
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
