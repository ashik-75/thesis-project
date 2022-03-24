import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

function Cow({ data }) {
    return (
        <div>
            <Link href={`cow/${data?.id}`}>
                <motion.img
                    animate={{
                        opacity: 0.9,
                    }}
                    whileHover={{
                        scale: 1.05,
                        opacity: 1,
                    }}
                    className="w-full cursor-pointer h-[300px] rounded-lg object-cover object-center"
                    src={`/${data.url}`}
                    alt=""
                />
            </Link>
            <div className="p-5">
                <div className="mb-3">
                    <span>#ID - </span> <span>{data.id}</span>
                </div>
            </div>
        </div>
    );
}

export default Cow;
