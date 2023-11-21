export const getData = async ( url: string ) => {

	const response = await fetch(`${process.env.base_url}/${url}`);
	const data = await response.json()
    return data

};

export const getAnimeNested = async ( url: string, objectKey: string ) => {

	const response = await fetch(`${process.env.base_url}/${url}`);
	const anime = await response.json()
	const animeData = anime.data?.flatMap((item: any) => item[objectKey])
	return animeData
};
