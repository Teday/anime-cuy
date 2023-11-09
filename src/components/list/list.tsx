"use client";
import Image from "next/image";
import Link from 'next/link'

interface props {
	anime: any;
	title: string;
	url: string;
}

export const List = ({ anime, title, url }: props) => {
	return (
		<div className='w-full snap-x rounded-box l:px-6 m:px-4 py-2 s:px-2'>
			<div className='card shadow-xl'>
				<div className='bg-base-100 grid grid-cols-2 rounded-t-lg p-2'>
					<div className='w-full'>
						<h5 className='pl-6 font-semibold text-xl'>{ title }</h5>
					</div>
					<div className='w-full'>
						<div className="text-right pr-6">
							<Link href={url} className='underline transition-all font-semibold text-xl hover:text-yellow-500 cursor-pointer'>
								Lihat Semua
							</Link>
						</div>
					</div>
				</div>
				<div className='w-full bg-gray-500 rounded-b-lg'>
					<div className='flex p-2 overflow-x-auto'>
						{anime.data.map((res: any, i: number) => {
							return (
								<div
									className='w-40 h-56 mx-2.5 flex-shrink-0 relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-102 hover:text-yellow-500 duration-300 rounded-box'
									key={i}
								>
									<Image
										className='w-full h-full top-0 left-0 object-cover rounded-box'
										src={res.images.jpg.image_url}
										width={500}
										height={500}
										alt='images anime'
									/>
									<div className='absolute bottom-0 rounded-b-box h-auto text-center p-2 bg-black w-full bg-opacity-50'>
										<h3 className='font-serif text-sm'>{res.title}</h3>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
