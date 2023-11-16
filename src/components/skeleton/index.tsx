interface props {
    dataSkeleton: any;
}

export const Skeleton = ({ dataSkeleton }: props) => {
	return (
        <>
            { dataSkeleton.map((res:any) => {
                return(
                    <div className={res.className} key={res.no}></div>
                )
            })}
        </>
	);
};
