"use client";

import { useState, useEffect } from "react";
import { Layout, ListPage, Paginations } from "@/components";
import { searchAnime } from "@/libs";

interface props {
	params: {
		keyword: string;
	};
}

const Page = ({ params }: props) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [anime, setAnime] = useState<any>([]);
	const [page, setPage] = useState<number>(1);
	const [totalPage, setTotalPage] = useState<number>(1);
	const [totalData, setTotalData] = useState<number>(0);

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	const fetchData = async () => {
		setIsLoading(true);
		const animeSearch = await searchAnime(params.keyword, page, 20);
		setTotalPage(animeSearch.pagination.last_visible_page);
		setAnime(animeSearch);
		setTotalData(animeSearch.pagination.items.total);
		setIsLoading(false);
	};

	return (
		<main className='flex flex-col items-center justify-between'>
			<Layout>
				<ListPage
					anime={anime}
					title={`Pencarian untuk ${params.keyword}`}
					total={totalData}
					isLoading={isLoading}
				/>
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
