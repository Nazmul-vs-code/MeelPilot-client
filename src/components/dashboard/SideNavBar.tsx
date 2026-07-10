"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import {
    FaHome,
    FaClipboardList,
    FaStore,
    FaHamburger,
    FaBars,
    FaTimes,
    FaUsers,
    FaUtensils,
    FaHeart,
    FaSignOutAlt,
} from "react-icons/fa";

import type { IconType } from "react-icons";

type SidebarItem = {
    title: string;
    href: string;
    icon: IconType;
    exact?: boolean;
};

type UserRole = "seller" | "buyer" | "admin";

const sidebarItems: Record<UserRole, SidebarItem[]> = {
    seller: [
        {
            title: "Dashboard",
            href: "/dashboard/seller",
            icon: FaHome,
            exact: true,
        },
        {
            title: "Orders",
            href: "/dashboard/seller/orders",
            icon: FaClipboardList,
        },
        {
            title: "Create Restaurant",
            href: "/dashboard/seller/create-restaurant",
            icon: FaStore,
        },
        {
            title: "Create Food",
            href: "/dashboard/seller/create-food",
            icon: FaHamburger,
        },
    ],

    buyer: [
        {
            title: "Dashboard",
            href: "/dashboard/buyer",
            icon: FaHome,
            exact: true,
        },
        {
            title: "My Orders",
            href: "/dashboard/buyer/orders",
            icon: FaClipboardList,
        },
        {
            title: "Wishlist",
            href: "/dashboard/buyer/wishlist",
            icon: FaHeart,
        },
        {
            title: "Restaurants",
            href: "/restaurants",
            icon: FaStore,
        },
    ],

    admin: [
        {
            title: "Dashboard",
            href: "/dashboard/admin",
            icon: FaHome,
            exact: true,
        },
        {
            title: "Manage Users",
            href: "/dashboard/admin/users",
            icon: FaUsers,
        },
        {
            title: "Restaurants",
            href: "/dashboard/admin/restaurants",
            icon: FaStore,
        },
        {
            title: "Foods",
            href: "/dashboard/admin/foods",
            icon: FaUtensils,
        },
    ],
};

const SideNavBar = () => {
    const [open, setOpen] = useState(false);

    const pathname = usePathname();

    const router = useRouter();

    const { data: session } = authClient.useSession();

    const user = session?.user;

    const role = (user?.role ?? "buyer") as UserRole;

    const navItems = sidebarItems[role];

    const handleLogout = async () => {
        await authClient.signOut();

        router.push("/");

        router.refresh();
    };

    const SidebarContent = (
        <div className="flex h-full flex-col">

            {/* User Info */}

            <div className="bg-yellow-50 p-6">

                <div className="flex items-center gap-3">

                    <Image
                        src={user?.image || "/avatar.png"}
                        alt={user?.name || "User"}
                        width={50}
                        height={50}
                        className="rounded-full object-cover"
                    />

                    <div>

                        <h2 className="font-bold text-lg">
                            {user?.name}
                        </h2>

                        <p className="text-sm text-red-500 font-semibold capitalize">
                            {role}
                        </p>

                    </div>

                </div>

            </div>

            {/* Navigation */}

            <nav className="flex-1 space-y-2 p-5">

                {navItems.map((item) => {

                    const ActiveIcon = item.icon;

                    const isActive = item.exact
                        ? pathname === item.href
                        : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                                isActive
                                    ? "bg-red-500 text-white shadow"
                                    : "hover:bg-yellow-100"
                            }`}
                        >
                            <ActiveIcon size={18} />

                            <span className="font-medium">
                                {item.title}
                            </span>

                        </Link>
                    );
                })}

            </nav>

            {/* Logout */}

            <div className="p-5">

                <button
                    onClick={handleLogout}
                    className="btn btn-outline btn-error w-full"
                >
                    <FaSignOutAlt />

                    Logout

                </button>

            </div>

        </div>
    );

    return (
        <>
            {/* Mobile */}

            <div className="lg:hidden p-4">

                <button
                    onClick={() => setOpen(true)}
                    className="btn btn-outline"
                >
                    <FaBars />

                    Menu

                </button>

            </div>

            {/* Desktop */}

            <aside className="hidden lg:block sticky top-0 h-screen w-72 bg-white shadow-sm">

                {SidebarContent}

            </aside>

            {/* Mobile Drawer */}

            {open && (

                <div className="fixed inset-0 z-50 lg:hidden">

                    <div
                        onClick={() => setOpen(false)}
                        className="absolute inset-0 bg-black/40"
                    />

                    <aside className="relative h-full w-72 bg-white shadow-xl">

                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-4 top-4 text-xl"
                        >
                            <FaTimes />
                        </button>

                        {SidebarContent}

                    </aside>

                </div>

            )}

        </>
    );
};

export default SideNavBar;