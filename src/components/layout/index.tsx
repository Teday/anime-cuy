import { PropsWithChildren, useState } from "react";
import { Header, Footer } from '@/components';

export const Layout = (props: PropsWithChildren) => {

	return (
		<div className='w-full h-full'>
            <Header />
			<div className="bg-gray-300">
				{props.children}
			</div>
			<Footer />
		</div>
	);
};
