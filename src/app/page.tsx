import { Layout, List } from "@/components";
import { seasonsNow, mostPopuler } from '@/api';

const Page = async () => {

	const animeSeasonsNow = await seasonsNow(7)
	const animePopuler = await mostPopuler(7)

	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Layout>
				<List anime={animeSeasonsNow} title={`${animeSeasonsNow.data[0].season} ${animeSeasonsNow.data[0].year}`} url="/anime/season"/>
				<List anime={animePopuler} title="Paling Poler" url="/anime/populer"/>
			</Layout>
		</main>
	);
};

export default Page;
