import { Layout, ListPage } from "@/components";
import { searchAnime } from '@/api';

interface props {
    params: {
        keyword: string
    };
}

const Page = async ({ params }: props) => {

    const animeSearch = await searchAnime(params.keyword,1,10)
    
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Layout>
                <ListPage anime={animeSearch} title={`Pencarian untuk ${params.keyword}`} total={animeSearch.pagination.items.total}/>
			</Layout>
		</main>
	);
};

export default Page;
