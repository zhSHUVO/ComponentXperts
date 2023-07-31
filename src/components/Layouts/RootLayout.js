import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Toaster } from "react-hot-toast";

const RootLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <div className="min-h-screen my-10 lg:mx-[20%]">{children}</div>
            <Footer />
            <Toaster />
        </div>
    );
};

export default RootLayout;
