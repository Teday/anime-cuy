import { Layout, Card } from "@/components";

const Home = async () => {

	const response = await fetch(`${process.env.base_url}/seasons/now?limit=5`, {cache: 'no-store'});
	const animeSeasonsNow = await response.json()

	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Layout>
				<div className='w-full'>
					<div className='card shadow-xl p-2'>
						<div className='bg-base-100 grid grid-cols-2 rounded-t-lg'>
							<div className='w-full'>
								<h5 className='pt-2 pl-6 font-semibold text-xl'>Fall 2023</h5>
							</div>
							<div className='w-full'>
								<h5 className='pt-2 pr-6 font-semibold text-xl text-right hover:text-yellow-500 cursor-pointer'>
									Lihat Semua
								</h5>
							</div>
						</div>
						<div className='w-full bg-gray-500 rounded-b-lg'>
							<Card animeSeasonsNow={animeSeasonsNow}/>
						</div>
					</div>
					{/* <div className='w-full p-2'>
						<div className='bg-gray-500 rounded-lg'>
							<div className='w-full bg-base-100 p-2 rounded-lg text-center'>
								Anime Paling Populer
							</div>
							{ animeTop.data.map( (res:any,i: number) => {
								console.log("as",res)
								return(
									<div className='w-full' key={i}>
										<List data={res}/>
									</div>
								)
							}) }
						</div>
					</div> */}
				</div>
			</Layout>
		</main>
	);
};

export default Home;
