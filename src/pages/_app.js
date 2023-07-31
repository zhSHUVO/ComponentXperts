import "@/styles/globals.css";
import { BuilderProvider } from "@/utils/BuilderContext";

export default function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <BuilderProvider>
            {getLayout(<Component {...pageProps} />)}
        </BuilderProvider>
    );
}
