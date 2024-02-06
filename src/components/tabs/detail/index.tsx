"use client";

import YouTube from "react-youtube";
import Link from "next/link";

interface props {
	detail: any;
	type: string;
	isLoading: boolean;
}

export const Detail = ({ detail, isLoading, type }: props) => {
	const splitAboutChar = (data: string) => {
		let listAbout: any = [];
		listAbout = data.split("\n");
		return listAbout;
	};

	return (
		<div className='w-full px-3 pt-4'>
			{isLoading && type === "anime" ? (
				<div className='w-full lg:px-20 sm:px-2 md:px-16 pt-4'>
					<div className='skeleton w-full h-[400px]'></div>
				</div>
			) : type === "anime" ? (
				<YouTube
					className='w-full lg:px-20 sm:px-2 md:px-16 pt-4'
					opts={{
						width: "100%",
						height: 350,
					}}
					videoId={detail.data?.trailer.youtube_id}
					onReady={(e: any) => e.target.pauseVideo()}
				/>
			) : null}
			{type === "character" && detail.data?.about ? (
				<>
					<div className='w-full mt-4 border-white border-b-2'>
						{splitAboutChar(detail.data?.about).map((res: any, i: number) => {
							return <div key={i}>{res}</div>;
						})}
					</div>
				</>
			) : (
				<>
					<div className='w-full mt-4 border-white border-b-2'>
						<h3>Synopsis :</h3>
						{isLoading ? (
							<div className='skeleton w-full h-4 my-2'></div>
						) : (
							<p className='text-md sm:text-sm'>{detail.data?.synopsis}</p>
						)}
					</div>
					<div className='w-full pt-6 border-white border-b-2'>
						<h3>Background :</h3>
						{isLoading ? (
							<div className='skeleton w-full h-4 my-2'></div>
						) : (
							<p className='text-md sm:text-sm'>{detail.data?.background}</p>
						)}
					</div>
					<div className='w-full pt-6 border-white border-b-2'>
						<h3>Related data :</h3>
						{isLoading ? (
							<div className='skeleton w-full h-4 my-2'></div>
						) : (
							detail.data?.relations?.map((relation: any, i: number) => {
								return (
									<div className='flex w-full'>
										<div className='w-1/4'>
											<p className='text-md sm:text-sm' key={i}>
												{relation.relation}
											</p>
										</div>
										<div className='mx-1'>:</div>
										<div className='w-full'>
											{relation.entry.map(
												(entry: any, idx: number, datas: any) => {
													return (
														<Link
															href={`${
																entry.type === "anime"
																	? `/anime/${entry.mal_id}`
																	: `/manga/${entry.mal_id}`
															}`}
															className='text-md sm:text-sm cursor-pointer hover:text-blue-400 hover:underline'
															key={i}
														>
															{entry.name}
															{idx + 1 === datas.length ? "" : ", "}
														</Link>
													);
												}
											)}
										</div>
									</div>
								);
							})
						)}
					</div>
					{type === "anime" ? (
						<>
							<div className='w-full pt-6 border-white border-b-2'>
								<h3>Opening Theme :</h3>
								{isLoading ? (
									<div className='skeleton w-full h-4 my-2'></div>
								) : (
									detail.data?.theme?.openings.map(
										(opening: any, i: number) => {
											return (
												<p className='text-md sm:text-sm' key={i}>
													{opening}
												</p>
											);
										}
									)
								)}
							</div>
							<div className='w-full pt-6 border-white border-b-2'>
								<h3>Ending Theme :</h3>
								{isLoading ? (
									<div className='skeleton w-full h-4 my-2'></div>
								) : (
									detail.data?.theme?.endings.map((ending: any, i: number) => {
										return (
											<p className='text-md sm:text-sm' key={i}>
												{ending}
											</p>
										);
									})
								)}
							</div>
						</>
					) : null}
				</>
			)}
		</div>
	);
};
