import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import cows from '../../data/cow';

const single = () => {
    const router = useRouter();
    const result = cows.find((dt) => dt.id === router.query.id);

    // eslint-disable-next-line react/jsx-filename-extension
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
            className="grid grid-cols-1 md:grid-cols-2 gap-5 p-10"
        >
            <Head>
                <title>{result?.id}</title>
                <meta property="og:title" content="My Firm Page" key="title" />
            </Head>

            <div>
                <motion.img
                    initial={{
                        x: 200,
                    }}
                    animate={{
                        x: 0,
                    }}
                    exit={{
                        x: -200,
                    }}
                    className="w-[400px] rounded-lg"
                    src={`/${result?.url}`}
                    alt=""
                />
            </div>
            <div className="text-slate-600 space-y-5 tracking-wider">
                <div>
                    <span className="w-20 inline-block">Activity :</span>
                    <span className="bg-pink-700 p-1 rounded ml-5 text-white">
                        {result?.activity}
                    </span>
                </div>
                <div>
                    <span className="tracking-wide w-20 inline-block">Sick:</span>
                    <span
                        className={`${
                            result?.sick === 'Yes' ? 'bg-rose-800' : 'bg-emerald-700'
                        } p-1 rounded ml-5 text-white`}
                    >
                        {result?.sick}
                    </span>
                </div>
                <div>
                    <span className="w-20 inline-block">Milk :</span>
                    <span className="bg-sky-700 p-1 rounded ml-5 text-white">{result?.milk} L</span>
                </div>
            </div>
        </motion.div>
    );
};

export default single;
