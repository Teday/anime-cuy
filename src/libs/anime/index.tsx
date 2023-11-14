import { randomAnime } from "@/utils";

export const getAnime = async ( url: string ) => {

	const response = await fetch(`${process.env.base_url}/${url}`);
	const anime = await response.json()
    return anime

};

export const getAnimeNested = async ( url: string, objectKey: string ) => {

	const response = await fetch(`${process.env.base_url}/${url}`);
	const anime = await response.json()
	const animeData = anime.data?.flatMap((item: any) => item[objectKey])
	const datas = randomAnime(animeData, 15)
	return datas
};
