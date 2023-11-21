"use client";

import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import React, { useState, useEffect } from "react";

interface props {
	totalPage: number;
	currentPage: number;
	nextPage: number;
	prevPage: number;
	setPage: (page: number) => void;
}

export const Paginations = ({
	totalPage,
	currentPage,
	nextPage,
	prevPage,
	setPage,
}: props) => {
	const [countPage, setCountPage] = useState<any>([]);
	
	useEffect(() => {
		let count: any = [];
		for (var i = 1; i < totalPage + 1; i++) {
			count.push(i);
		}
		setCountPage(count);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='flex'>
			{prevPage <= 0 || totalPage < 4 ? null : (
				<button
					className=' py-2 px-3 bg-base-100 rounded-lg mr-1 text-yellow-500 transition hover:bg-gray-600 hover:text-yellow-200'
					onClick={() => setPage(currentPage - 1)}
				>
					<ArrowLeft size={18} />
				</button>
			)}
			<div className='join'>
				{currentPage - 1 > 2 ? (
					<>
						<button
							className={`join-item py-2 px-3 bg-base-100 text-yellow-500 transition hover:bg-gray-600 hover:text-yellow-200`}
							onClick={() => setPage(1)}
						>
							1
						</button>
						<button
							className={`join-item py-2 px-3 bg-base-content text-black cursor-text`}
						>
							...
						</button>
					</>
				) : null}
				{currentPage - 2 === 1 ? (
					<button
						className={`join-item py-2 px-3 bg-base-100 text-yellow-500 transition hover:bg-gray-600 hover:text-yellow-200`}
						onClick={() => setPage(1)}
					>
						1
					</button>
				) : null}
				{currentPage - 1 !== 0 ? (
					<button
						className={`join-item py-2 px-3 bg-base-100 text-yellow-500 transition hover:bg-gray-600 hover:text-yellow-200`}
						onClick={() => setPage(currentPage - 1)}
					>
						{currentPage - 1}
					</button>
				) : null}
				<button className={`join-item py-2 px-3 bg-gray-700 text-yellow-500 cursor-not-allowed`}>
					{currentPage}
				</button>
				{currentPage + 1 <= totalPage ? (
					<button
						className={`join-item py-2 px-3 bg-base-100 text-yellow-500 transition hover:bg-gray-600 hover:text-yellow-200`}
						onClick={() => setPage(currentPage + 1)}
					>
						{currentPage + 1}
					</button>
				) : null}
				{currentPage + 2 === totalPage ? (
					<>
						<button
							className={`join-item py-2 px-3 bg-base-100 text-yellow-500 transition hover:bg-gray-600 hover:text-yellow-200`}
							onClick={() => setPage(totalPage)}
						>
							{totalPage}
						</button>
					</>
				) : null}
				{currentPage + 2 < totalPage ? (
					<>
						<button
							className={`join-item py-2 px-3 bg-base-content text-black cursor-text`}
						>
							...
						</button>
						<button
							className={`join-item py-2 px-3 bg-base-100 text-yellow-500 transition hover:bg-gray-600 hover:text-yellow-200`}
							onClick={() => setPage(totalPage)}
						>
							{totalPage}
						</button>
					</>
				) : null}
			</div>
			{nextPage >= totalPage || totalPage < 4 ? null : (
				<button
					className=' py-2 px-3 bg-base-100 rounded-lg ml-1 text-yellow-500 transition hover:bg-gray-600 hover:text-yellow-200'
					onClick={() => setPage(currentPage + 1)}
				>
					<ArrowRight size={18} />
				</button>
			)}
			<select className='select select-bordered ml-1' onChange={(e: any) => setPage(parseInt(e.target.value))}>
				{countPage.map((count: number) => {
					return (
						<option
							className='p-2'
                            value={count}
							selected={count === currentPage ? true : false}
							key={count}
						>
							{count}
						</option>
					);
				})}
			</select>
		</div>
	);
};
