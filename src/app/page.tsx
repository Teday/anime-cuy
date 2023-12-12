"use client";

import { useEffect, useState } from "react";
import { Layout, List } from "@/components";
import { getData, getAnimeNested } from "@/libs";
import { randomAnime } from "@/utils";

const Page = () => {
	const [animePopuler, setAnimePopuler] = useState<any>([]);
	const [animeUpcoming, setAnimeUpcoming] = useState<any>([]);
	const [animeLastUpdate, setAnimeLastUpdate] = useState<any>([]);
	const [animeRecommendation, setAnimeRecommendation] = useState<any>([]);
	const [animeSeason, setAnimeSeason] = useState<any>([]);

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const fetchData = async () => {
		const getAnimeSeason = await getData("seasons/now?limit=15");
		const getAnimeUpcoming = await getData("seasons/upcoming?limit=15");
		const getAnimePopuler = await getData("top/anime?limit=15");

		//biar gk kena limit dari api jikan
		setTimeout(async () => {
			const getAnimeLastUpdate = await getData("watch/episodes?limit=15");
			const getAnimeRecommendations = await getAnimeNested(
				"recommendations/anime",
				"entry"
			);
			const getAnimeRecom = randomAnime(getAnimeRecommendations, 15);
			setAnimeLastUpdate(getAnimeLastUpdate);
			setAnimeRecommendation(getAnimeRecom);
		}, 1500);

		setAnimeSeason(getAnimeSeason);
		setAnimeUpcoming(getAnimeUpcoming);
		setAnimePopuler(getAnimePopuler);
	};

	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Layout>
				<List
					anime={animeSeason}
					title={
						animeSeason.data === undefined
							? "-"
							: `${animeSeason.data[0].season} ${animeSeason.data[0].year}`
					}
					url='/anime/season'
					episode={false}
				/>
				<List
					anime={animePopuler}
					title='Top Anime'
					url='/anime/top'
					episode={false}
				/>
				<List
					anime={animeRecommendation}
					title='Anime Recommendations'
					url=''
					episode={false}
				/>
				<List
					anime={animeUpcoming}
					title='Anime Upcoming'
					url=''
					episode={false}
				/>
				<List
					anime={animeLastUpdate}
					title='Last Update'
					url=''
					episode={true}
				/>
			</Layout>
		</main>
	);
};

export default Page;
