export const scroolTop = () => {
    scrollTo({
        behavior: "smooth",
        top: 0,
    });
};

export const randomAnime = ( anime: any, gap: number ) => {
	let first: number = Math.floor(Math.random() * anime.length - gap) + 1;
	let last: number = first + gap;
	return { data: anime.slice(first, last)}
};