import Banner from "@/components/Banner";
import Catagory from "@/components/Catagory/Catagory";
import RootLayout from "@/components/Layouts/RootLayout";
import Product from "@/components/Product/Product";

const HomePage = ({ allProducts, allCategories }) => {
    return (
        <div>
            <Banner />
            <Product products={allProducts} />
            <Catagory categories={allCategories} />
        </div>
    );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
    const productRes = await fetch("http://localhost:5000/api/products");
    const productData = await productRes.json();

    const categoriesRes = await fetch("http://localhost:5000/api/categories");
    const categoriesData = await categoriesRes.json();

    return {
        props: {
            allProducts: productData,
            allCategories: categoriesData,
        },
    };
};
