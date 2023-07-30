import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const RootLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen my-10 lg:mx-[20%]">{children}</div>
            <Footer />
        </div>
    );
};

export default RootLayout;
