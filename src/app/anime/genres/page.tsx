"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Layout, Skeleton } from "@/components";
import { getData } from "@/libs";
import { listSkeletonGenre } from "@/data";
import { CaretRight } from "@phosphor-icons/react";

const Page = async () => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [animeGenres, setAnimeGenres] = useState<any>([]);

    useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

    const fetchData = async () => {
        const getAnimeGenre = await getData("genres/anime");

		setAnimeGenres(getAnimeGenre);
        setIsLoading(false)
	};

	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Layout>
				<div className='w-full snap-x rounded-box lg:px-6 md:px-4 p-2'>
					<div className='card shadow-xl bg-gray-700'>
						<div className='grid grid-cols-1 gap-2 bg-base-100 w-full rounded-t-lg p-2'>
							<div className='w-full text-center'>
								<h5 className='lg:text-xl md:text-base text-md'>
									Genres Anime
								</h5>
							</div>
						</div>
						<div className="items-center mt-5 mx-4">
							<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 text-xl">
                                { isLoading ? (
                                    <Skeleton dataSkeleton={listSkeletonGenre} />
                                ) : animeGenres.data?.map((genre: any, i: number) => {
                                    return (
                                        <Link href={'/'} className="p-2 border-t border-white hover:text-orange-400 hover:bg-gray-800" key={i}>
                                            <p className="flex"><span><CaretRight size={26} /></span>{ genre.name } ({ genre.count })</p>
                                        </Link>
                                    )
                                }) }
                            </div>
						</div>
					</div>
				</div>
			</Layout>
		</main>
	);
};

export default Page;
