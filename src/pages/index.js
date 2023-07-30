import Banner from "@/components/Banner";
import Catagory from "@/components/Catagory/Catagory";
import RootLayout from "@/components/Layouts/RootLayout";
import Product from "@/components/Product/Product";

const HomePage = ({ allProducts }) => {
    return (
        <div>
            <Banner />
            <Product products={allProducts} />
            <Catagory />
        </div>
    );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();

    return {
        props: {
            allProducts: data,
        },
    };
};
