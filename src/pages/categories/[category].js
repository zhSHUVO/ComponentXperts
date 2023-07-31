import RootLayout from "@/components/Layouts/RootLayout";
import Product from "@/components/Product/Product";
import { useRouter } from "next/router";

const Category = ({ product }) => {
    const router = useRouter();
    const { category } = router.query;

    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-10">
                {category} Category
            </h1>
            <div className="grid lg:grid-cols-2 gap-4 ">
                {product?.map((product) => (
                    <Product product={product} key={product._id} />
                ))}
            </div>
        </div>
    );
};

export default Category;

Category.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const products = await res.json();

    const paths = products?.map((product) => ({
        params: { category: product?.category.toString() },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const { params } = context;

    const category = encodeURIComponent(params.category);

    const res = await fetch(`http://localhost:5000/api/categories/${category}`);
    const data = await res.json();

    return {
        props: {
            product: data,
        },
    };
};
