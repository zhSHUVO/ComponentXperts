/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";

const ComponentChoose = ({ product }) => {
    const router = useRouter();
    const category = router.query.choose;

    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-10">
                Choose from {category}
            </h1>
            <div className="">
                {product?.map((product) => (
                    <div
                        key={product?._id}
                        className="grid grid-cols-[25%_60%_15%] items-center bg-base-100 shadow-xl rounded-2xl m-4 p-2"
                    >
                        <div className="flex justify-center">
                            <img
                                src={product?.img}
                                alt="card image"
                                className="p-2 w-[40%]"
                            />
                        </div>
                        <div className="p-2">
                            <h2 className="text-xl font-bold">
                                {product?.name}
                            </h2>
                            <div className="flex items-center">
                                <p className="text-sm  pr-5">
                                    <span className="font-bold">Price : </span>
                                    {product?.price}
                                </p>
                                <p className="text-sm  pr-5">
                                    <span className="font-bold">
                                        Category :{" "}
                                    </span>
                                    {product?.category}
                                </p>
                                <p className="text-sm  pr-5">
                                    <span className="font-bold">Status : </span>
                                    {product?.stock}
                                </p>
                                <p className="flex items-center">
                                    <span className="font-bold">Rating : </span>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 1024 1024"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path>
                                    </svg>
                                    {product?.aRating}
                                </p>
                            </div>
                        </div>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">
                                Add to Build
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComponentChoose;

ComponentChoose.getLayout = function (page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const products = await res.json();

    const paths = products?.map((product) => ({
        params: { choose: product?.category.toString() },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const { params } = context;

    console.log(params);

    const category = encodeURIComponent(params.choose);

    const res = await fetch(`http://localhost:5000/api/categories/${category}`);
    const data = await res.json();

    return {
        props: {
            product: data,
        },
    };
};
