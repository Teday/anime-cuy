"use client";

import { useState, useEffect } from "react";
import {
	Layout,
	ListPage,
	Paginations,
	DropdownType,
	Skeleton,
} from "@/components";
import { getData } from "@/libs";
import { scroolTop } from "@/utils";
import { listTypeManga, listRating, listStatusManga, listSkeletonPage } from "@/data";

interface props {
	params: {
		keyword: string;
	};
}

const Page = ({ params }: props) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [type, setType] = useState<string>("");
	const [rating, setRating] = useState<string>("");
	const [status, setStatus] = useState<string>("");
	const [genre, setGenre] = useState<string>("");
	const [manga, setManga] = useState<any>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState<number>(1);
	const [totalData, setTotalData] = useState<number>(0);

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page, type, rating, status]);

	const fetchData = async () => {
		setIsLoading(true);
		scroolTop();
		const mangaSearch = await getData(
			`manga?q=${params.keyword}&limit=${15}&page=${page}${
				type !== "" ? `&type=${type}` : ""
			}${rating !== "" ? `&rating=${rating}` : ""}${
				status !== "" ? `&status=${status}` : ""
			}`
		);
		setTotalPage(mangaSearch.pagination.last_visible_page);
		setManga(mangaSearch);
		setTotalData(mangaSearch.pagination.items.total);
		setIsLoading(false);
	};

	return (
		<main className='flex flex-col items-center justify-between'>
			<Layout>
				<div className='w-full snap-x rounded-box lg:px-6 md:px-4 p-2'>
					<div className='card shadow-xl bg-gray-700'>
						<div className='grid grid-cols-1 gap-2 bg-base-100 w-full rounded-t-lg p-2'>
							<div className='w-full text-center'>
								<h5 className='lg:pl-6 md:pl-6 font-semibold lg:text-xl md:text-base text-sm'>
									Search {decodeURI(params.keyword)}
								</h5>
							</div>
						</div>
						<div className='flex bg-base-100 overflow-x-auto'>
							<div className="w-full text-center">
								<DropdownType
									setPage={setPage}
									setData={setType}
									value={type}
									listData={listTypeManga}
								/>
							</div>
							<div className="w-full text-center">
								<DropdownType
									setPage={setPage}
									setData={setStatus}
									value={status}
									listData={listStatusManga}
								/>
							</div>
							<div className='w-full text-center'>
								<h5 className='font-semibold lg:text-xl md:text-base text-sm mt-1'>
									Total: {totalData}
								</h5>
							</div>
						</div>
						{isLoading ? (
							<div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-4 p-2'>
								<Skeleton dataSkeleton={listSkeletonPage} />
							</div>
						) : (
							<ListPage data={manga} page="anime" />
						)}
					</div>
				</div>
				<div className='flex justify-center p-2'>
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
