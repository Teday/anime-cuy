"use client";

import moment from "moment";
import { listSkeletonEpisode } from "@/data";

interface props {
	anime: any;
}

export const Episode = ({ anime }: props) => {
	return (
		<div className='w-full px-3 pt-4'>
			<div className='overflow-x-auto'>
				<table className='table'>
					<thead>
						<tr className='text-center text-white border-white border-b'>
							<th>Episode</th>
							<th>Title</th>
							<th>Aired</th>
							<th>Score</th>
						</tr>
					</thead>
					<tbody>
						{anime.data === undefined ? (
                            listSkeletonEpisode.map( (res: any) => {
                                return (
                                    <tr key={res.no} className=' border-white border-b'>
                                        <td><div className="skeleton w-full h-5"></div></td>
                                        <td><div className="skeleton w-full h-5"></div></td>
                                        <td><div className="skeleton w-full h-5"></div></td>
                                        <td><div className="skeleton w-full h-5"></div></td>
                                    </tr>
                                )
                            })
						) : anime.data?.length <= 0 ? (
							<tr className=' border-white border-b'>
								<td className='text-center' colSpan={4}>
									no episodes have been released yet
								</td>
							</tr>
						) : (
							anime.data?.map((episode: any, i: number) => {
								return (
									<tr key={i} className=' border-white border-b'>
										<td className='text-center'>{episode.mal_id}</td>
										<td>{episode.title}</td>
										<td className='text-center'>
											{moment(episode.aired).format("DD MMM, YYYY")}
										</td>
										<td className='text-center'>{episode.score}</td>
									</tr>
								);
							})
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};
