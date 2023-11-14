"use client";

import { useState, useEffect } from "react";
import { Layout, ListPage, Paginations, DropdownType } from "@/components";
import { getAnime } from "@/libs";
import { scroolTop } from "@/utils";

const Page = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [type, setType] = useState<string>("");
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
		let animeSeasons: any
		if(type === ""){
			animeSeasons = await getAnime(
				`seasons/now?page=${page}&limit=20`
			);
		}else{
			animeSeasons = await getAnime(
				`seasons/now?page=${page}&limit=20&filter=${type}`
			);
		}
		setTotalPage(animeSeasons.pagination.last_visible_page);
		setAnime(animeSeasons);
		setTotalData(animeSeasons.pagination.items.total);
		setIsLoading(false);
	};

	return (
		<main className='flex flex-col items-center justify-between'>
			<Layout>
				<div className='w-full snap-x rounded-box lg:px-6 md:px-4 p-2'>
					<div className='card shadow-xl bg-gray-700'>
						<div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2 bg-base-100 w-full rounded-t-lg p-2'>
							<div className='w-full lg:text-left md:text-left text-center'>
								{ anime.data ? (
									<h5 className='lg:pl-6 md:pl-6 font-semibold lg:text-xl md:text-base text-sm'>
										{ anime.data[0].season } { anime.data[0].year }
									</h5>
								) : "-" }
							</div>
							<div className='w-full text-center'>
								<DropdownType setPage={setPage} setType={setType} type={type}/>
							</div>
							<div className='w-full lg:text-right md:text-right text-center'>
								<h5 className='pr-6 font-semibold lg:text-xl md:text-base text-sm'>
									Total: {totalData}
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
