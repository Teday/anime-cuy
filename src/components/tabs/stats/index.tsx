"use client";

import { formatNumber } from "@/utils";

interface props {
	anime: any;
}

export const Stats = ({ anime }: props) => {

	return (
		<div className='w-full px-3 pt-4'>
			<div className='w-full mt-4'>
				<h3 className='border-white border-b-2'>Summary Stats</h3>
				<p className='text-md sm:text-sm'>
					Watching:{" "}
					{anime.data?.watching === null
						? "?"
						: formatNumber(anime.data?.watching)}
				</p>
				<p className='text-md sm:text-sm'>
					Completed:{" "}
					{anime.data?.completed === null
						? "?"
						: formatNumber(anime.data?.completed)}
				</p>
				<p className='text-md sm:text-sm'>
					On-Hold:{" "}
					{anime.data?.on_hold === null
						? "?"
						: formatNumber(anime.data?.on_hold)}
				</p>
				<p className='text-md sm:text-sm'>
					Dropped:{" "}
					{anime.data?.dropped === null
						? "?"
						: formatNumber(anime.data?.dropped)}
				</p>
				<p className='text-md sm:text-sm'>
					Plan to Watch:{" "}
					{anime.data?.plan_to_watch === null
						? "?"
						: formatNumber(anime.data?.plan_to_watch)}
				</p>
				<p className='text-md sm:text-sm'>
					Total:{" "}
					{anime.data?.total === null ? "?" : formatNumber(anime.data?.total)}
				</p>
			</div>
			<div className='w-full mt-4'>
				<h3 className='border-white border-b-2'>Score Stats</h3>
				<div className="flex flex-col">
					{anime.data?.scores.reverse().map((data: any, i: number) => {
						return (
                            <div className="p-2 flex" key={i}>
                                <p className="pr-4">{ data.score }</p>
                                <progress
                                    className='progress progress-primary w-1/4 h-4 mt-1'
                                    value={ data.percentage }
                                    max='100'
                                ></progress>
                                <p className="pl-3">{ data.percentage }% ({ data.votes === null ? "?" : formatNumber(data.votes) } votes)</p>
                            </div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
