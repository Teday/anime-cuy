"use client";

import YouTube from "react-youtube";

interface props {
	anime: any;
}

export const Detail = ({ anime }: props) => {
	
	return (
		<div className='w-full px-3 pt-4'>
			<YouTube
				className='w-full lg:px-20 sm:px-2 md:px-16 pt-4'
				opts={{
					width: "100%",
					height: 350,
				}}
				videoId={anime.data?.trailer.youtube_id}
				onReady={(e: any) => e.target.pauseVideo()}
			/>
			<div className="w-full mt-4 border-white border-b-2">
				<h3>Synopsis :</h3>
				<p className="text-md sm:text-sm">{anime.data?.synopsis}</p>
			</div>
			<div className="w-full pt-6 border-white border-b-2">
				<h3>Background :</h3>
				<p className="text-md sm:text-sm">{anime.data?.background}</p>
			</div>
			<div className="w-full pt-6 border-white border-b-2">
				<h3>Related Anime :</h3>
				{ anime.data?.relations?.map( (relation: any, i: number) => {
					return (
						<p className="text-md sm:text-sm" key={i}>{ relation.relation } : { relation.entry[0].name }</p>
					)
				})}
			</div>
			<div className="w-full pt-6 border-white border-b-2">
				<h3>Opening Theme :</h3>
				{ anime.data?.theme?.openings.map( (opening:any, i: number) => {
					return (
						<p className="text-md sm:text-sm" key={i}>{opening}</p>
					)
				})}
			</div>
			<div className="w-full pt-6 border-white border-b-2">
				<h3>Ending Theme :</h3>
				{ anime.data?.theme?.endings.map( (ending:any, i: number) => {
					return (
						<p className="text-md sm:text-sm" key={i}>{ending}</p>
					)
				})}
			</div>
		</div>
	);
};
