"use client";
interface props {
    value: string;
	listData: any;
    setData: (type: string) => void;
    setPage: (page: number) => void;
}

export const DropdownType = ({ value, listData, setData, setPage }: props ) => {
	return (
		<select
			className='bg-base-100 m-1.5 max-w-full select-xs w-full text-white mr-4 outline-none border-none lg:text-lg sm:text-md cursor-pointer hover:text-yellow-500'
			defaultValue={value}
			onChange={(e: any) => {
				setData(e.target.value);
				setPage(1);
			}}
		>
            { listData?.map( (list: any, i: number) => {
                return (
                    <option value={list.value} key={i}>
                        { list.title }
                    </option>
                )
            })}
		</select>
	);
};
