/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/Layouts/RootLayout";

const ProductDetail = ({ product }) => {
    return (
        <div className="">
            <div className=" bg-base-100 shadow-xl rounded-2xl p-10">
                <div className="grid lg:grid-cols-2 items-center gap-4">
                    <div className="flex justify-center">
                        <img
                            src={product?.img}
                            alt="card image"
                            className="p-2 w-[50%]"
                        />
                    </div>
                    <div className="p-2">
                        <h2 className="text-xl font-bold">{product?.name}</h2>
                        <div className="overflow-x-auto">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Price</td>
                                        <td>{product?.price}</td>
                                    </tr>

                                    <tr>
                                        <td>Category</td>
                                        <td>{product?.category}</td>
                                    </tr>

                                    <tr>
                                        <td>Status</td>
                                        <td>{product?.stock}</td>
                                    </tr>

                                    <tr>
                                        <td>Individual Rating</td>
                                        <td>{product?.iRating} out of 5</td>
                                    </tr>

                                    <tr>
                                        <td>Average Rating</td>
                                        <td>{product?.aRating} out of 5</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h2 className="text-xl font-bold">
                        <span className="font-bold">Description</span>
                    </h2>
                    <p className=" pt-3">{product?.description}</p>
                </div>
                <div className="mt-5">
                    <h2 className="text-xl font-bold">Key Features</h2>
                    <table className="table">
                        <tbody>
                            {product &&
                                Object.entries(product?.keyFeatures).map(
                                    ([feature, value], index) => (
                                        <tr key={index}>
                                            <td>{feature}</td>
                                            <td>{value}</td>
                                        </tr>
                                    )
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="bg-base-100 shadow-xl rounded-2xl mt-5 p-10">
                <h2 className="text-xl font-bold">
                    <span className="font-bold">User Reviews</span>
                </h2>
                {product?.reviews.map((review, index) => (
                    <div key={index} className="pb-2 pt-3">
                        <p>
                            <span className="font-bold">{review.name}</span>
                        </p>
                        <p>{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetail;

ProductDetail.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const products = await res.json();

    const paths = products?.map((product) => ({
        params: { product: product?._id.toString() },
    }));

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const { params } = context;

    const res = await fetch(
        `http://localhost:5000/api/products/${params.product}`
    );
    const data = await res.json();

    return {
        props: {
            product: data,
        },
    };
};
