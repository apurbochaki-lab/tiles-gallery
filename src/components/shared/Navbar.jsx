import Image from "next/image";
import NavLink from "./NavLink";
import logo from '@/assets/logo.png'
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {

    const links =
        <>
            <li><NavLink href={"/"} className="font-bold text-lg">Home</NavLink></li>
            <li><NavLink href={"/all-tiles"} className="font-bold text-lg">All Tiles</NavLink></li>
            <li><NavLink href={"/my-profile"} className="font-bold text-lg">My Profile</NavLink></li>
        </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="border rounded-full shadow-sm hidden md:block">
                    <Image
                        className="rounded-full"
                        src={logo}
                        width={50}
                        height={50}
                        alt="Brand Logo">
                    </Image>
                </div>
                <a className="btn btn-ghost text-2xl text-shadow-accent">TILE <span className="text-[#BD9A67]">VISTA</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-3">
                <Link href={"/login"}>
                    <Button variant="outline" className="bg-green-200 font-bold text-[16px] shadow-md">Login</Button>
                </Link>

                <Link href={"/register"}>
                    <Button variant="outline" className="bg-blue-200 font-bold text-[16px] shadow-md">Register</Button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;