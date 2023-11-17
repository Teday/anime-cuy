export const scroolTop = () => {
    scrollTo({
        behavior: "smooth",
        top: 0,
    });
};

export const randomAnime = ( anime: any, gap: number ) => {
	let first: number = Math.floor(Math.random() * anime?.length - gap) + 1;
	let last: number = first + gap;
	return { data: anime?.slice(first, last)}
};

export const formatNumber = (data: string) => {
    
    if(data !== null && data !== undefined){
        let number_string = data.toString().replace(/[^,\d]/g, '');
        let split = number_string.split(',');
        let sisa = split[0]?.length % 3;
        let number = split[0]?.substr(0, sisa);
        let ribuan = split[0]?.substr(sisa).match(/\d{3}/gi);
    
        if(ribuan){
            let separator = sisa ? '.' : '';
            number += separator + ribuan.join('.');
        }
    
        number = split[1] != undefined ? number + ',' + split[1] : number;
        return number;
    }else{
        return "?"
    }
}