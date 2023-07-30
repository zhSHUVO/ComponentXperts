import RootLayout from "@/components/Layouts/RootLayout";

const PcBuilder = () => {
    return (
        <div>
            <h1>This is pc builder page</h1>
        </div>
    );
};

export default PcBuilder;

PcBuilder.getLayout = function (page) {
    return <RootLayout>{page}</RootLayout>;
};
