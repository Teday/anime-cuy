"use client";

import Image from "next/image";
interface props {
	anime: any;
}

export const Char = ({ anime }: props) => {
	
	return (
		<div className='w-full px-3 pt-4'>
			<div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
				{anime.data?.map((char: any, i: number) => {
					return (
						<div className='w-full border-b border-white py-1' key={i}>
							<div className="flex w-full">
								<Image
									className='h-[150px] w-[100px] object-fill rounded-lg'
									src={char.character.images.jpg.image_url}
									width={300}
									height={300}
									alt='images anime'
									key={i}
								/>
								<div className="flex flex-col">
									<p className="text-sm ml-2">Name: { char.character.name }</p>
									<p className="text-sm ml-2">role: { char.role } Character</p>
									<p className="text-sm ml-2">Voice Actor: </p>
									{ char.voice_actors?.map((voice:any, idx: number) => {
										return(
											<p className="text-sm ml-2" key={idx}>{ voice.person.name } ({voice.language})</p>
										)
									})}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
