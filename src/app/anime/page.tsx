import { Layout, List } from "@/components";
import { getAnime, getAnimeNested } from '@/libs';

const AnimePage = async () => {

	const animePopuler = await getAnime("top/anime?limit=15")
	const animeLastUpdate = await getAnime("watch/episodes?limit=15")
	const animeRecommendations = await getAnimeNested("recommendations/anime", "entry")
	
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Layout>
				<List anime={animePopuler} title="Top Anime" url="/anime/top" episode={false}/>
				<List anime={animeRecommendations} title="Anime Rekomendasi" url="" episode={false}/>
				<List anime={animeLastUpdate} title="Last Update" url="" episode={true}/>
			</Layout>
		</main>
	);
};

export default AnimePage;
