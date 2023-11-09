"use client";

import { Layout } from "@/components";

const Page = () => {

	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Layout>
				<div className='pt-24'>
					<div className='flex w-screen h-full items-center justify-center'>
                        <div className="custom-loader">

                        </div>
					</div>
				</div>
			</Layout>
		</main>
	);
};

export default Page;
