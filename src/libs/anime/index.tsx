export const getAnime = async ( url: string ) => {

	const response = await fetch(`${process.env.base_url}/${url}`);
	const anime = await response.json()
    return anime

};

export const getAnime2 = async ( url: string ) => {

	const response = await fetch(`${process.env.base_url}/${url}`);
	const anime = await response.json()
    return anime

};

export const getAnimeNested = async ( url: string, objectKey: string ) => {

	const response = await fetch(`${process.env.base_url}/${url}`);
	const anime = await response.json()
	const animeData = anime.data?.flatMap((item: any) => item[objectKey])
	return { data: animeData }
};
