import { Layout, List } from "@/components";
import { getAnime, getAnimeNested } from '@/libs';
import { randomAnime } from "@/utils";

const Page = async () => {

	const animeSeasonsNow = await getAnime("seasons/now?limit=15")
	const animeLastUpdate = await getAnime("watch/episodes?limit=15")
	const animePopuler = await getAnime("top/anime?limit=15")
	const animeRecommendations = await getAnimeNested("recommendations/anime", "entry")
	const animeRecom = randomAnime(animeRecommendations.data, 15)
	
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Layout>
				<List anime={animeSeasonsNow} title={`${animeSeasonsNow.data[0].season} ${animeSeasonsNow.data[0].year}`} url="/anime/season" episode={false}/>
				<List anime={animePopuler} title="Top Anime" url="/anime/top" episode={false}/>
				<List anime={animeLastUpdate} title="Last Update" url="" episode={true}/>
				<List anime={animeRecom} title="Anime Rekomendasi" url="" episode={false}/>
			</Layout>
		</main>
	);
};

export default Page;
