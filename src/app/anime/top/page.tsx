"use client";

import { useState, useEffect } from "react";
import {
	Layout,
	ListPage,
	Paginations,
	DropdownType,
	Skeleton,
} from "@/components";
import { getAnime } from "@/libs";
import { scroolTop } from "@/utils";
import { listType, listRating, listFilter, listSkeletonPage } from "@/data";

const Page = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [type, setType] = useState<string>("");
	const [rating, setRating] = useState<string>("");
	const [filter, setFilter] = useState<string>("");
	const [anime, setAnime] = useState<any>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState<number>(1);
	const [totalData, setTotalData] = useState<number>(0);

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, type, rating, filter]);

	const fetchData = async () => {
		setIsLoading(true);
		scroolTop();
		const animePopuler = await getAnime(
			`top/anime?page=${page}&limit=20&limit=${15}&page=${page}${
				type !== "" ? `&type=${type}` : ""
			}${rating !== "" ? `&rating=${rating}` : ""}${
				filter !== "" ? `&filter=${filter}` : ""
			}`
		);
		setTotalPage(animePopuler.pagination.last_visible_page);
		setAnime(animePopuler);
		setTotalData(animePopuler.pagination.items.total);
		setIsLoading(false);
	};

	return (
		<main className='flex flex-col items-center justify-between'>
			<Layout>
				<div className='w-full snap-x rounded-box lg:px-6 md:px-4 p-2'>
					<div className='card shadow-xl bg-gray-700'>
						<div className='grid grid-cols-1 gap-2 bg-base-100 w-full rounded-t-lg p-2'>
							<div className='w-full text-center'>
								<h5 className='lg:text-xl md:text-base text-md'>Top Anime</h5>
							</div>
						</div>
						<div className='grid lg:grid-cols-4 grid-cols-2 sm:grid-cols-2 gap-2 bg-base-100'>
							<div className='w-full text-center'>
								<DropdownType
									setPage={setPage}
									listData={listType}
									setData={setType}
									value={type}
								/>
							</div>
							<div className='w-full text-center'>
								<DropdownType
									setPage={setPage}
									listData={listFilter}
									setData={setFilter}
									value={filter}
								/>
							</div>
							<div className='w-full text-center'>
								<DropdownType
									setPage={setPage}
									listData={listRating}
									setData={setRating}
									value={rating}
								/>
							</div>
							<div className='w-full text-center'>
								<h5 className='font-semibold lg:text-lg md:text-base text-sm p-1.5'>
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
