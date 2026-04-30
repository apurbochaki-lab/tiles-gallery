'use client'

import Link from 'next/link';
import { usePathname } from "next/navigation";

const NavLink = ({ href, className, children }) => {

    const pathName = usePathname()
    // console.log(pathName)

    return (
        <Link
            href={href}
            className={`${className} ${pathName === href && "text-blue-500"}`}
        >{children}
        </Link>
    );
};

export default NavLink;