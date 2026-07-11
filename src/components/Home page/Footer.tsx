import Link from "next/link";
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaLocationDot,
    FaPhone,
    FaEnvelope,
    FaHeart,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="mt-24 border-t border-red-100 bg-gradient-to-br from-red-50 via-white to-yellow-50">

            <div className="mx-auto w-11/12 max-w-7xl py-16">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}

                    <div className="space-y-5">

                        <Link
                            href="/"
                            className="text-3xl font-extrabold text-red-500"
                        >
                            Meal Pilot
                        </Link>

                        <p className="leading-7 text-gray-600">
                            Discover delicious meals from trusted restaurants
                            across Bangladesh. Fast delivery, secure ordering,
                            and unforgettable food experiences.
                        </p>

                        <div className="flex gap-4">

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow transition hover:-translate-y-1 hover:bg-red-500 hover:text-white"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow transition hover:-translate-y-1 hover:bg-red-500 hover:text-white"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow transition hover:-translate-y-1 hover:bg-red-500 hover:text-white"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow transition hover:-translate-y-1 hover:bg-red-500 hover:text-white"
                            >
                                <FaGithub />
                            </a>

                        </div>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="mb-5 text-xl font-bold text-gray-900">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">

                            <li>
                                <Link
                                    href="/"
                                    className="transition hover:pl-2 hover:text-red-500"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/restaurants"
                                    className="transition hover:pl-2 hover:text-red-500"
                                >
                                    Restaurants
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/foods"
                                    className="transition hover:pl-2 hover:text-red-500"
                                >
                                    Foods
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/dashboard"
                                    className="transition hover:pl-2 hover:text-red-500"
                                >
                                    Dashboard
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Explore */}

                    <div>

                        <h3 className="mb-5 text-xl font-bold text-gray-900">
                            Explore
                        </h3>

                        <ul className="space-y-3">

                            <li className="transition hover:pl-2 hover:text-red-500 cursor-pointer">
                                Popular Restaurants
                            </li>

                            <li className="transition hover:pl-2 hover:text-red-500 cursor-pointer">
                                Latest Foods
                            </li>

                            <li className="transition hover:pl-2 hover:text-red-500 cursor-pointer">
                                Healthy Categories
                            </li>

                            <li className="transition hover:pl-2 hover:text-red-500 cursor-pointer">
                                Fast Delivery
                            </li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="mb-5 text-xl font-bold text-gray-900">
                            Contact
                        </h3>

                        <div className="space-y-5">

                            <div className="flex items-start gap-3">

                                <FaLocationDot className="mt-1 text-red-500" />

                                <p className="text-gray-600">
                                    Bangladesh
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <FaEnvelope className="text-red-500" />

                                <span className="text-gray-600">
                                    support@mealpilot.com
                                </span>

                            </div>

                            <div className="flex items-center gap-3">

                                <FaPhone className="text-red-500" />

                                <span className="text-gray-600">
                                    +880 1234-567890
                                </span>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-red-100 pt-8 text-sm text-gray-500 md:flex-row">

                    <p className="flex items-center gap-2">

                        © {new Date().getFullYear()} Meal Pilot.

                        Made with

                        <FaHeart className="text-red-500" />

                        in Bangladesh.

                    </p>

                    <div className="flex gap-6">

                        <Link
                            href="#"
                            className="hover:text-red-500"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="hover:text-red-500"
                        >
                            Terms
                        </Link>

                        <Link
                            href="#"
                            className="hover:text-red-500"
                        >
                            Support
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;