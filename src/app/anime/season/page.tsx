"use client";

import { Layout } from "@/components";
import { useRouter } from 'next/navigation'

const Page = () => {

    const router = useRouter()

    const backPage = (e: any) => {
        e.preventDefault();
        router.back()
    }

	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Layout>
				<div className='pt-20'>
					<div className='flex w-screen h-full items-center justify-center'>
						<p className='text-black text-[200px]'>🙏</p>
					</div>
					<div className='flex w-screen h-full items-center justify-center'>
						<p className='text-black text-4xl'>
							Halaman Ini Masih Dalam Tahap Pengembangan
						</p>
					</div>
					<div className='flex w-screen h-full items-center justify-center pt-4'>
						<button className='text-black font-semibold cursor-pointer hover:text-yellow-600 underline text-xl' onClick={backPage}>Kembali</button>
					</div>
				</div>
			</Layout>
		</main>
	);
};

export default Page;
