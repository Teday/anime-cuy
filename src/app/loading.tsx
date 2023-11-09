import { Layout } from "@/components";

const Page = () => {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Layout>
				<div className='flex w-screen h-screen items-center justify-center'>
					<div className='custom-loader'></div>
				</div>
			</Layout>
		</main>
	);
};

export default Page;
