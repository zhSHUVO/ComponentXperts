import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const RootLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen lg:mx-[20%]">{children}</div>
            <Footer />
        </div>
    );
};

export default RootLayout;
