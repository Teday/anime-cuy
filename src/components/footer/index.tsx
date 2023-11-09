export const Footer = () => {
	return (
		<div className='bottom-0 z-50 bg-base-100 p-2'>
			<div className='text-center bg-base-100'>
				<p className='text-xs font-semibold'>
					© {new Date().getFullYear()} Tedi Suryadi
				</p>
			</div>
		</div>
	);
};
