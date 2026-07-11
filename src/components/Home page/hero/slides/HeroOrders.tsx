"use client";

import Image from "next/image";
import {
    FaCheckCircle,
    FaHamburger,
    FaMotorcycle,
    FaShoppingBag,
} from "react-icons/fa";

const orders = [
    {
        top: "10%",
        left: "8%",
        food: "Burger",
        icon: <FaHamburger />,
        color: "bg-red-500",
        delay: "0s",
    },
    {
        top: "28%",
        right: "6%",
        food: "Pizza",
        icon: <FaShoppingBag />,
        color: "bg-yellow-500",
        delay: "1.2s",
    },
    {
        bottom: "20%",
        left: "12%",
        food: "Biryani",
        icon: <FaHamburger />,
        color: "bg-orange-500",
        delay: "2.4s",
    },
    {
        bottom: "10%",
        right: "10%",
        food: "Fried Rice",
        icon: <FaShoppingBag />,
        color: "bg-green-500",
        delay: "3.2s",
    },
];

const HeroOrders = () => {
    return (
        <div className="mx-auto flex h-[65vh] w-[88%] max-w-7xl items-center justify-between gap-12">

            {/* Left */}

            <div className="max-w-xl">

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                    📦 Live Orders
                </span>

                <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900">
                    Hundreds of meals
                    <br />
                    delivered every day.
                </h1>

                <p className="mt-5 text-base leading-8 text-gray-600">
                    Restaurants receive orders instantly while delivery partners
                    start moving immediately, ensuring customers receive fresh
                    meals without unnecessary waiting.
                </p>

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
                        className="object-contain"
                    />

                    {/* Floating Orders */}

                    {orders.map((order, index) => (
                        <div
                            key={index}
                            style={{
                                top: order.top,
                                left: order.left,
                                right: order.right,
                                bottom: order.bottom,
                                animationDelay: order.delay,
                            }}
                            className="absolute animate-bounce"
                        >
                            <div className="flex items-center gap-3 rounded-2xl border border-white/40 bg-white/95 px-4 py-3 shadow-xl backdrop-blur">

                                <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${order.color}`}
                                >
                                    {order.icon}
                                </div>

                                <div>

                                    <p className="text-xs text-gray-500">
                                        New Order
                                    </p>

                                    <h3 className="text-sm font-bold">
                                        {order.food}
                                    </h3>

                                </div>

                            </div>

                        </div>
                    ))}

                    {/* Center Status */}

                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                        <div className="flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-red-500 text-white shadow-2xl">

                            <FaMotorcycle size={30} />

                        </div>

                    </div>

                    {/* Completed */}

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">

                        <div className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">

                            <FaCheckCircle />

                            Deliveries Running

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default HeroOrders;