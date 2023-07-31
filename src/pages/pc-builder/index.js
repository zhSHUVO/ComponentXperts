import RootLayout from "@/components/Layouts/RootLayout";
import Link from "next/link";

const PcBuilder = ({ allCategories }) => {
    return (
        <div>
            {allCategories.map((category) => (
                <div key={category?._id}>
                    <div className=" bg-base-100 shadow-xl rounded-2xl mb-5 p-5">
                        <div className="flex justify-between items-center">
                            <h1>{category?.value}</h1>
                            <Link
                                href={`/pc-builder/choose/${category?.value}`}
                                className="btn btn-primary"
                            >
                                Choose
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PcBuilder;

PcBuilder.getLayout = function (page) {
    return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
    const categoriesRes = await fetch("http://localhost:5000/api/categories");
    const categoriesData = await categoriesRes.json();

    return {
        props: {
            allCategories: categoriesData,
        },
    };
};
