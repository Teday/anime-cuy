import { Layout, Card } from "@/components";
import { seasonsNow, mostPopuler } from '@/api';

const Season = async () => {

	const animeSeasonsNow = await seasonsNow(6)
	const animePopuler = await mostPopuler(6)

	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Layout>
				<div className='w-full rounded-box l:px-28 m:px-14 py-2 s:px-10'>
					<div className='card shadow-xl'>
						<div className='bg-base-100 rounded-t-lg'>
							<div className='w-full'>
								<h5 className='pt-2 pl-6 font-semibold text-xl'>{ `${animeSeasonsNow.data[0].season} ${animeSeasonsNow.data[0].year}` }</h5>
							</div>
						</div>
						<div className='w-full bg-gray-500 rounded-b-lg'>
							<Card anime={animeSeasonsNow}/>
						</div>
					</div>
				</div>
			</Layout>
		</main>
	);
};

export default Season;
