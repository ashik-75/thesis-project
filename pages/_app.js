/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import { AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { ...pageProps }, router }) {
    console.log({ router, route: router.route });
    return (
        <>
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </>
    );
}

export default MyApp;
