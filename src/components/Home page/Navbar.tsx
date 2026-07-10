"use client";

import Link from "next/link";
import Logo from "./Logo";
import { authClient } from "@/lib/auth-client";
import { FcHome, FcLeft } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import toast from "react-hot-toast";

type NavItem = {
    name: string;
    href: string;
};

const navItems: NavItem[] = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Food",
        href: "/food",
    },
    {
        name: "Shop",
        href: "/shop",
    },
];

const Navbar = () => {
    const logo = <Logo />;

    const navLinks = (
        <>
            {navItems.map((item) => (
                <li className="font-semibold text-red-500" key={item.href}>
                    <Link href={item.href}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </>
    );

    const authButtons = (
        <div className="flex items-center gap-3 ">
            <button className="btn btn-secondary text-white">
                <Link href={'/auth/login'}>
                Login
                 </Link>
            </button>

            <button className="btn btn-neutral text-red-500">
                <Link href={'/auth/signup'}>
                Sign Up
                 </Link>
            </button>
        </div>
    );
    
    const { data: session } = authClient.useSession();
    console.log('session in nav bar : ', session)

    const handleLogOut = async (): Promise<void> => {
    await authClient.signOut();
    toast.success("Logged out!! 😊") 

};

    const userMenu = (
    <div className="dropdown dropdown-end">

        <div
            tabIndex={0}
            role="button"
            className="flex cursor-pointer items-center gap-3 rounded-full border border-red-200 bg-white px-3 py-2 hover:shadow-md transition"
        >

            <img
                src={
                    session?.user?.image ||
                    "https://ui-avatars.com/api/?name=User"
                }
                alt={session?.user?.name || "User"}
                className="h-10 w-10 rounded-full object-cover"
            />

            <div className="hidden md:block text-left">

                <p className="font-semibold text-red-500">
                    {session?.user?.name}
                </p>

            </div>

        </div>

        <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 w-60 rounded-box bg-base-100 p-2 shadow-lg z-50"
        >

            <li>
                <Link href="/dashboard">
                  <FcHome />  Dashboard
                </Link>
            </li>

            <li>
                <Link href="/profile">
                   <FaUser className="text-pink-600" /> My Profile
                </Link>
            </li>


            <div className="divider my-1"></div>

            <li>
                <button
                onClick={handleLogOut}
                >
                    <FcLeft />  Logout
                </button>
            </li>

        </ul>

    </div>
);

    return (
        <div className="sticky bg-yellow-100 top-0 z-50 bg-base-100 shadow-sm">
            <div className="navbar w-10/12 max-w-7xl mx-auto px-4">

                <div className="navbar-start">

                    <div className="dropdown lg:hidden">

                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost"
                        >
                            ☰
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    {logo}

                </div>

                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal gap-2 px-1">

                        {navLinks}

                    </ul>

                </div>

                <div className="navbar-end">

                    {session ? userMenu : authButtons}

                </div>

            </div>
        </div>
    );
};

export default Navbar;