"use client";

import { formatNumber } from "@/utils";
import { listSkeletonStats } from "@/data";

interface props {
	anime: any;
}

export const Stats = ({ anime }: props) => {
	return (
		<div className='w-full px-3 pt-4'>
			<div className='w-full mt-4'>
				<h3 className='border-white border-b-2'>Summary Stats</h3>
				{anime.data === undefined ? (
					listSkeletonStats.map((res: any) => {
						return(
							<div key={res.no}>
								<div className='skeleton w-full h-5 my-1'></div>
							</div>
						)
					})
				) : anime.data?.length <= 0 ? (
					<div className='flex items-center justify-center w-full pt-4 '>
						<p className=''>There is no statistical data yet</p>
					</div>
				) : (
					<>
						<p className='text-md sm:text-sm'>
							Watching: {formatNumber(anime.data?.watching)}
						</p>
						<p className='text-md sm:text-sm'>
							Completed: {formatNumber(anime.data?.completed)}
						</p>
						<p className='text-md sm:text-sm'>
							On-Hold: {formatNumber(anime.data?.on_hold)}
						</p>
						<p className='text-md sm:text-sm'>
							Dropped: {formatNumber(anime.data?.dropped)}
						</p>
						<p className='text-md sm:text-sm'>
							Plan to Watch: {formatNumber(anime.data?.plan_to_watch)}
						</p>
						<p className='text-md sm:text-sm'>
							Total: {formatNumber(anime.data?.total)}
						</p>
					</>
				)}
			</div>
			<div className='w-full mt-4'>
				<h3 className='border-white border-b-2'>Score Stats</h3>
				<div className='flex flex-col'>
					{anime.data === undefined ? (
						listSkeletonStats.map((res: any) => {
							return(
								<div key={res.no}>
									<div className='skeleton w-full h-5 my-1'></div>
								</div>
							)
						})
					) : anime.data?.length <= 0 ? (
						<div className='flex items-center justify-center w-full pt-4 '>
							<p className=''>There is no score statistical data yet</p>
						</div>
					) : (
						anime.data?.scores.reverse().map((data: any, i: number) => {
							return (
								<div className='p-2 flex' key={i}>
									<p className='pr-4'>{data.score}</p>
									<progress
										className='progress progress-primary w-1/4 h-4 mt-1'
										value={data.percentage}
										max='100'
									></progress>
									<p className='pl-3'>
										{data.percentage}% ({formatNumber(data.votes)} votes)
									</p>
								</div>
							);
						})
					)}
				</div>
			</div>
		</div>
	);
};
