"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUtensils } from "react-icons/fa";
import Link from "next/link";

type Restaurant = {
    _id: string;
    restaurantName: string;
    location: string;
    image: string;
};

type Props = {
    restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: Props) => {
    return (
        <motion.div
            whileHover={{
                y: -8,
                scale: 1.03,
            }}
            transition={{
                duration: 0.3,
            }}
            className="group relative overflow-hidden rounded-3xl border border-red-100 bg-white shadow-md transition-all hover:shadow-2xl hover:shadow-red-200/40"
        >
            {/* Glow */}
            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-red-300/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={restaurant?.image}
                    alt={restaurant.restaurantName}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Floating Icon */}
                <div className="absolute right-4 top-4 rounded-full bg-white/90 p-3 text-red-500 shadow-lg backdrop-blur">
                    <FaUtensils size={18} />
                </div>

                {/* Shine */}
                <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]" />
            </div>

            {/* Content */}
            <div className="space-y-3 p-5">
                <h2 className="text-xl font-bold text-red-500 transition group-hover:text-red-600">
                    {restaurant.restaurantName}
                </h2>

                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaMapMarkerAlt className="text-yellow-500" />
                    <span>{restaurant.location}</span>
                
                
                <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full btn btn-warning px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-red-600 hover:shadow-red-300"
        ><Link href={`/restaurants/${restaurant?._id}`}>
            Details
        </Link>
        </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default RestaurantCard;