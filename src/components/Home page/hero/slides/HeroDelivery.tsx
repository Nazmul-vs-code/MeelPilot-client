"use client";

import Image from "next/image";
import { FaMotorcycle, FaMapMarkerAlt } from "react-icons/fa";

const HeroDelivery = () => {
    return (
        <div className="mx-auto flex h-[65vh] w-[88%] max-w-7xl items-center justify-between gap-12">

            {/* LEFT */}

            <div className="max-w-xl">

                <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                    ⚡ Fast Delivery
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900">
                    From restaurant
                    <br />
                    to your doorstep.
                </h1>

                <p className="mt-5 text-base leading-8 text-gray-600">
                    Every order is dispatched instantly and tracked in real time.
                    Our delivery partners ensure your meals arrive fresh and hot.
                </p>

            </div>

            {/* RIGHT */}

            <div className="relative flex h-[470px] w-[500px] items-center justify-center">

                {/* Glow */}

                <div className="absolute h-[420px] w-[420px] rounded-full bg-yellow-100 blur-3xl" />

                {/* MAP CONTAINER */}

                <div className="relative h-[380px] w-[360px] overflow-hidden rounded-3xl">

                    <Image
                        src="/bangladesh-map.png.svg"
                        alt="Bangladesh"
                        fill
                        className="object-contain"
                    />

                    {/* Route */}

                    <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 360 380"
                    >
                        <path
                            d="M80 320 C120 240 170 210 205 170 C240 135 270 110 295 80"
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="5"
                            strokeDasharray="10 10"
                            className="animate-pulse"
                        />
                    </svg>

                    {/* Pickup */}

                    <div className="absolute bottom-14 left-14 flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-lg">

                        <FaMapMarkerAlt className="text-red-500" />

                        <span className="text-xs font-semibold">
                            Restaurant
                        </span>

                    </div>

                    {/* Destination */}

                    <div className="absolute right-10 top-10 flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-lg">

                        <FaMapMarkerAlt className="text-green-500" />

                        <span className="text-xs font-semibold">
                            Customer
                        </span>

                    </div>

                    {/* Bike */}

                    <div className="absolute bottom-[78px] left-[78px] animate-[deliveryRide_6s_linear_infinite]">

                        <div className="rounded-full bg-red-500 p-3 text-white shadow-xl">

                            <FaMotorcycle size={20} />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default HeroDelivery;