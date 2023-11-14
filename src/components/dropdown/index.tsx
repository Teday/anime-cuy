"use client";

import { listType } from "@/data";

interface props {
    type: string;
    setType: (type: string) => void;
    setPage: (page: number) => void;
}

export const DropdownType = ({ type, setType, setPage }: props ) => {
	return (
		<select
			className='bg-base-100 max-w-full select-sm text-white mr-4 outline-none border-none lg:text-lg sm:text-md cursor-pointer hover:text-yellow-500'
			defaultValue=''
			onChange={(e: any) => {
				setType(e.target.value);
				setPage(1);
			}}
		>
            { listType.map( (list: any, i: number) => {
                return (
                    <option value={list.value} key={i}>
                        { list.title }
                    </option>
                )
            })}
		</select>
	);
};
