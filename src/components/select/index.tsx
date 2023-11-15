"use client";

import Select from "react-select";

interface props {
	data: any;
	value: string;
	className: string;
	placeholder: string;
}

export const SelectComponent = ({
	data,
	value,
	placeholder,
	className,
}: props) => {

	return (
		<Select
			value={value}
			placeholder={placeholder}
			className={className}
			options={data}
		/>
	);
};
