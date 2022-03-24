import { motion } from 'framer-motion';
import Head from 'next/head';
import React from 'react';
import Cow from '../components/Cow';
import cows from '../data/cow';

const index = () => {
    return (
        <motion.div
            animate={{
                opacity: 1,
            }}
            initial={{
                opacity: 0,
            }}
            exit={{
                opacity: 0,
            }}
            className="p-10 grid grid-cols-1 md:grid-cols-3 gap-5 "
        >
            <Head>
                <title>My Firm Page </title>
                <meta property="og:title" content="My Firm Page" key="title" />
            </Head>
            {cows.map((dt) => (
                <Cow data={dt} key={dt.id} />
            ))}
        </motion.div>
    );
};

export default index;
