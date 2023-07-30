import Image from "next/image";
import Link from "next/link";

const Catagory = (allCategories) => {
    const categories = allCategories?.categories;

    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-10 ">Category</h1>
            <div className="grid lg:grid-cols-3 gap-4 justify-items-center bg-base-100 shadow-xl rounded-2xl">
                {categories.map((category) => (
                    <Link
                        key={category._id}
                        href={`/categories/${category.key}`}
                        className="p-5  transition duration-500 hover:scale-110 tooltip rounded-2xl cursor-pointer"
                        data-tip={`${category.key}`}
                    >
                        <Image
                            src={`${category.img}`}
                            width={80}
                            height={80}
                            alt={`${category.key}`}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Catagory;
