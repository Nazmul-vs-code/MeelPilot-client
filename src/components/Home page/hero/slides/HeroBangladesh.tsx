"use client";

import Image from "next/image";
import {
    FaArrowRight,
    FaHamburger,
    FaMapMarkedAlt,
    FaMotorcycle,
    FaStore,
    FaUsers,
} from "react-icons/fa";

const stats = [
    {
        icon: <FaStore />,
        value: "250+",
        label: "Restaurants",
        color: "bg-red-500",
    },
    {
        icon: <FaMotorcycle />,
        value: "500+",
        label: "Delivery Riders",
        color: "bg-yellow-500",
    },
    {
        icon: <FaUsers />,
        value: "10K+",
        label: "Customers",
        color: "bg-green-500",
    },
    {
        icon: <FaHamburger />,
        value: "1500+",
        label: "Meals Daily",
        color: "bg-orange-500",
    },
];

const HeroBangladesh = () => {
    return (
        <div className="mx-auto flex h-[65vh] w-[88%] max-w-7xl items-center justify-between gap-12">

            {/* Left */}

            <div className="max-w-xl">

                <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                    🇧🇩 Built for Bangladesh
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900">
                    One platform.
                    <br />
                    Thousands of delicious moments.
                </h1>

                <p className="mt-5 text-base leading-8 text-gray-600">
                    Meal Pilot connects restaurants, customers, and delivery
                    partners through one fast, reliable, and beautifully
                    designed platform.
                </p>

                <button className="mt-8 flex items-center gap-3 rounded-2xl bg-red-500 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-red-600">

                    Explore Foods

                    <FaArrowRight />

                </button>

            </div>

            {/* Right */}

            <div className="relative flex h-[470px] w-[500px] items-center justify-center">

                {/* Glow */}

                <div className="absolute h-[420px] w-[420px] rounded-full bg-red-100 blur-3xl" />

                {/* Map */}

                <div className="relative h-[380px] w-[360px] overflow-hidden rounded-3xl">

                    <Image
                        src="/bangladesh-map.png.svg"
                        alt="Bangladesh"
                        fill
                        className="animate-pulse object-contain"
                    />

                    {/* Center */}

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                        <div className="flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-red-500 text-white shadow-2xl">

                            <FaMapMarkedAlt size={36} />

                        </div>

                    </div>

                    {/* Animated Connection Dots */}

                    <span className="absolute left-[22%] top-[18%] h-4 w-4 animate-ping rounded-full bg-red-500" />
                    <span className="absolute right-[18%] top-[26%] h-4 w-4 animate-ping rounded-full bg-yellow-500 [animation-delay:0.8s]" />
                    <span className="absolute bottom-[24%] left-[20%] h-4 w-4 animate-ping rounded-full bg-green-500 [animation-delay:1.5s]" />
                    <span className="absolute bottom-[18%] right-[18%] h-4 w-4 animate-ping rounded-full bg-orange-500 [animation-delay:2.3s]" />

                </div>

            </div>

        </div>
    );
};

export default HeroBangladesh;