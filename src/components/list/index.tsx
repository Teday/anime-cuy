"use client";
import Image from "next/image";

interface props {
	data: any;
}

export const List = ({ data }: props) => {
	return (
		<div className="grid grid-cols-2">
            <div className="w-full">
                <Image
                    src={data.images.jpg.image_url}
                    width={100}
                    height={100}
                    alt='Picture of the author'
                />
            </div>
		</div>
	);
};
