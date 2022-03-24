import Link from 'next/link';
import React from 'react';

function Navbar() {
    return (
        <div className="px-10 py-5 text-2xl font-bold border-b">
            <Link href="/">Home</Link>
        </div>
    );
}

export default Navbar;
