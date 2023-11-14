export const getAnime = async ( url: string ) => {

	const response = await fetch(`${process.env.base_url}/${url}`);
	const anime = await response.json()
    return anime

};

export const getAnimeNested = async ( url: string, objectKey: string ) => {

	const response = await fetch(`${process.env.base_url}/${url}`);
	const anime: any = await response.json()
	let datas: any = []
    anime.data.map((item: any) => {
		item.entry.map( (res:any) => {
			datas.push(res)
		})
	})
	return { data: datas }
};
