"use client";
import Image from "next/image";

interface props {
	anime: any;
}

export const Card = ({ anime }: props) => {
	return <div className='card shadow-xl rounded-box bg-white h-72'></div>;
};
