import RootLayout from "@/components/Layouts/RootLayout";
import { useRouter } from "next/router";

const Category = () => {
    const router = useRouter();
    const { category } = router.query;

    return (
        <div>
            <h1>{category}</h1>
        </div>
    );
};

export default Category;

Category.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
