"use client";
import { listMenu } from "@/data";
import Link from "next/link";
import { InputSearch } from "./inputSearch";

export const Header = () => {
	return (
		<div className='navbar bg-base-100 sticky top-0 z-50'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost md:hidden lg:hidden'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-5 w-5'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h8m-8 6h16'
							/>
						</svg>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
					>
						<div className='overflow-auto max-h-96'>
							{listMenu.map((list: any, i: number) => {
								return (
									<li key={i}>
										<a>{list.title}</a>
										{list.sub_menu.map((sub: any, idx: number) => {
											return (
												<ul className='p-2' key={idx}>
													<li>
														<Link href={sub.url}>{sub.title}</Link>
													</li>
												</ul>
											);
										})}
									</li>
								);
							})}
						</div>
					</ul>
				</div>
				<Link href={"/"} className='normal-case text-xl hover:text-yellow-500'>
					AnimeCuy
				</Link>
			</div>
			<div className='navbar-center hidden md:flex lg:flex hover:text-yellow-500'>
				{listMenu.map((res: any, i: number) => (
					<div className='dropdown dropdown-hover cursor-pointer' key={i}>
						<label tabIndex={0} className='mx-4 cursor-pointer'>
							{res.title}
						</label>
						<ul
							tabIndex={0}
							className='dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52'
						>
							{res.sub_menu.map((sub: any, idx: number) => {
								return (
									<li key={idx}>
										<Link href={sub.url}>{sub.title}</Link>
									</li>
								);
							})}
						</ul>
					</div>
				))}
			</div>
			<div className='navbar-end'>
				<InputSearch />
			</div>
		</div>
	);
};
