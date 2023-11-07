export const SeasonsNow = async ( limit: number ) => {

	const response = await fetch(`${process.env.base_url}/seasons/now?limit=${limit}`, {cache: 'no-store'});
	const animeTop = await response.json()
    return animeTop

};