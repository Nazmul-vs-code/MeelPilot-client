"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const foods = [
    {
        src: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
        className: "top-6 left-8 rotate-[-12deg]",
    },
    {
        src: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
        className: "top-10 right-10 rotate-[8deg]",
    },
    {
        src: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
        className: "bottom-12 left-14 rotate-[10deg]",
    },
    {
        src: "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg",
        className: "bottom-8 right-12 rotate-[-8deg]",
    },
];

const HeroWelcome = () => {
    return (<div className="m-10">
        <div className="mx-auto flex h-[65vh] w-[88%] max-w-7xl items-center justify-between gap-10">

            {/* LEFT */}

            <div className="max-w-xl">

                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-500">
                    🍴 Bangladesh's Smart Food Platform
                </span>

                <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl">
                    Delicious food,
                    <br />
                    delivered with
                    <span className="text-red-500"> Meal Pilot.</span>
                </h1>

                <p className="mt-5 text-base leading-8 text-gray-600">
                    Discover thousands of freshly prepared meals from trusted restaurants.
                    Fast ordering, secure payments, and delightful experiences—all in one place.
                </p>

                <div className="mt-8 flex gap-4">

                    <Link
                        href="/foods"
                        className="flex items-center gap-2 rounded-full bg-red-500 px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-red-600"
                    >
                        Explore Foods
                        <FaArrowRight />
                    </Link>

                    <button className="flex items-center gap-3 rounded-full border border-red-200 bg-white px-7 py-3 font-semibold text-red-500 transition hover:border-red-500">

                        <FaPlay />

                        Watch Demo

                    </button>

                </div>

            </div>

            {/* RIGHT */}

            <div className="relative flex h-[470px] w-[500px] items-center justify-center">

                {/* Glow */}

                <div className="absolute h-[420px] w-[420px] rounded-full bg-red-100 blur-3xl" />

                {/* Bangladesh */}

                <Image
                    src="/bangladesh-map.png.svg"
                    alt="Bangladesh"
                    width={360}
                    height={360}
                    className="relative z-10 animate-pulse opacity-95"
                />

                {/* Floating Foods */}

                {foods.map((food, index) => (

                    <div
                        key={index}
                        className={`absolute ${food.className} animate-[float_6s_ease-in-out_infinite]`}
                    >

                        <div className="overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl">

                            <Image
                                src={food.src}
                                alt=""
                                width={95}
                                height={95}
                                className="h-24 w-24 object-cover"
                            />

                        </div>

                    </div>

                ))}

                {/* Center Logo */}

                <div className="absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-red-500 text-3xl shadow-xl">
                    🍔
                </div>

            </div>

        </div>

        </div>
    );
};

export default HeroWelcome;