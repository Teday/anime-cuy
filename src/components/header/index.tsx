"use client";
import { listMenu } from "@/data/data";

export const Header = () => {
	return (
		<div className='navbar bg-base-100'>
			<div className='navbar-start'>
				<div className='dropdown'>
					<label tabIndex={0} className='btn btn-ghost lg:hidden'>
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
						<li>
							<a>Item 1</a>
						</li>
						<li>
							<a>Parent</a>
							<ul className='p-2'>
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Item 3</a>
						</li>
					</ul>
				</div>
				<a className='btn btn-ghost normal-case text-xl'>AnimeCuy</a>
			</div>
			<div className='navbar-center'>
				{listMenu.map((res: any, i: number) => (
					<div className='dropdown dropdown-hover cursor-pointer' key={i}>
						<label tabIndex={0} className='mx-4 cursor-pointer'>
							{res.title}
						</label>
						<ul
							tabIndex={0}
							className='dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52'
						>
							{res.sub_menu.map((sub: any, idx: number) => (
								<li key={idx}>
									<a>{sub.title}</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className='navbar-end'>
				{/* <a className='btn'>Button</a> */}
			</div>
		</div>
	);
};
