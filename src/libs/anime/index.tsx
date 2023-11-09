export const seasonsNow = async ( limit: number ) => {

	const response = await fetch(`${process.env.base_url}/seasons/now?limit=${limit}`);
	const anime = await response.json()
    return anime

};

export const mostPopuler = async ( limit: number, page: number ) => {

	if(page === 0){
		const response = await fetch(`${process.env.base_url}/top/anime?limit=${limit}`);
		const anime = await response.json()
		return anime
	}else{
		const response = await fetch(`${process.env.base_url}/top/anime?page=${page}&limit=${limit}`);
		const anime = await response.json()
		return anime
	}

};

export const searchAnime = async ( search: string, page: number, limit: number ) => {

	const response = await fetch(`${process.env.base_url}/anime?q=${search}&limit=${limit}&page${page}`);
	const anime = await response.json()
    return anime

};
