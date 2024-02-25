// Make sure to import the components and utility function correctly
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";

export default function Home({ products }) {
    return (
        <main>
            <HeroBanner />
            <Wrapper>
                {/* heading and paragraph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Your smiles
                    </div>
                    <div className="text-md md:text-xl">
                        Hello guest!
                    </div>
                </div>
                {/* heading and paragraph end */}

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
                {/* products grid end */}
            </Wrapper>
        </main>
    );
}

export async function getStaticProps() {
    // Make sure fetchDataFromApi is correctly imported and returns the expected structure
    const products = await fetchDataFromApi("/api/products?populate=*");

    return {
        props: { products },
    };
}
