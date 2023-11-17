"use client";

import Select from "react-select";

interface props {
	data: any;
	className: string;
	placeholder: string;
	setData: (data: string) => void;
    setPage: (page: number) => void;
}

export const SelectSearch = ({
	data,
	setData,
	setPage,
	placeholder,
	className,
}: props) => {
	const customStyles = {
		control: (base: any) => ({
			...base,
			boxShadow: "none",
			border: "none",
			outliner: 0,
			backgroundColor: "oklch(var(--b1))",
			cursor: "pointer",
			color: "white",
		}),
		input: (base: any, state: any) => ({
			...base,
			boxShadow: "none",
			border: state.isFocused && "none",
			outliner: 0,
			color: "white",
		}),
		singleValue: (base: any, state:any) => ({
			...base,
			boxShadow: "none",
			border: state.isFocused && "none",
			outliner: 0,
			backgroundColor: "oklch(var(--b1))",
			color: "white",
		}),
		placeholder: (base: any, state: any) => ({
			...base,
			boxShadow: "none",
			border: state.isFocused && "none",
			outliner: 0,
			backgroundColor: "oklch(var(--b1))",
			color: "white",
		}),
		menu: (base: any, state: any) => ({
			...base,
			color: "white",
			backgroundColor: "oklch(var(--b1))",
			boxShadow: "none",
			outliner: 0,
			border: state.isFocused && "none",
		}),
		option: (base: any, state: any) => {
			return {
				...base,
				border: state.isFocused && "none",
				color: state.isSelected ? "orange" : "white",
				boxShadow: "none",
				outliner: 0,
				backgroundColor: "oklch(var(--b1))",
				cursor: "pointer",
				"&:hover": {
					color: "orange",
					backgroundColor: "oklch(var(--n))",
				},
			};
		},
	};

	return (
		<Select
			styles={customStyles}
			// value={value}
			placeholder={placeholder}
			className={className}
			options={data}
			onChange={ (e:any) => {
				setData(e.value)
				setPage(1)
			}}
		/>
	);
};
