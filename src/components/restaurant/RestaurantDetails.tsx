"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaUserTie,
    FaUtensils,
    FaArrowRight,
    FaCheckCircle,
    FaClock,
    FaEnvelope,
} from "react-icons/fa";

type Restaurant = {
    _id: string;
    restaurantName: string;
    ownerName: string;
    ownerEmail: string;
    location: string;
    image: string;
    phone: string;
    description: string;
    status: "pending" | "approved" | "rejected";
};

type Props = {
    restaurant: Restaurant;
};

const RestaurantDetails = ({ restaurant }: Props) => {
    return (
        <section className="mx-auto max-w-6xl px-5 py-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2"
            >
                {/* Left Image */}

                <div className="relative min-h-[500px]">
                    <Image
                        src={restaurant.image}
                        alt={restaurant.restaurantName}
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="absolute bottom-6 left-6 rounded-full bg-white p-4 shadow-xl"
                    >
                        <FaUtensils
                            className="text-red-500"
                            size={30}
                        />
                    </motion.div>
                </div>

                {/* Right Content */}

                <div className="flex flex-col justify-between p-8">
                    <div>
                        <div className="mb-6 flex items-center justify-between">
                            <h1 className="text-4xl font-bold text-red-500">
                                {restaurant.restaurantName}
                            </h1>

                            {restaurant.status === "approved" ? (
                                <span className="badge badge-success gap-2 badge-lg">
                                    <FaCheckCircle />
                                    Approved
                                </span>
                            ) : restaurant.status === "pending" ? (
                                <span className="badge badge-warning gap-2 badge-lg">
                                    <FaClock />
                                    Pending
                                </span>
                            ) : (
                                <span className="badge badge-error badge-lg">
                                    Rejected
                                </span>
                            )}
                        </div>

                        <div className="space-y-5">
                            <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4">
                                <FaMapMarkerAlt className="text-xl text-red-500" />

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Location
                                    </p>

                                    <p className="font-semibold">
                                        {restaurant.location}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-yellow-50 p-4">
                                <FaUserTie className="text-xl text-yellow-600" />

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Owner
                                    </p>

                                    <p className="font-semibold">
                                        {restaurant.ownerName}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-red-50 p-4">
                                <FaEnvelope className="text-xl text-red-500" />

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Email
                                    </p>

                                    <p className="break-all font-semibold">
                                        {restaurant.ownerEmail}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl bg-yellow-50 p-4">
                                <FaPhoneAlt className="text-xl text-yellow-600" />

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Contact
                                    </p>

                                    <p className="font-semibold">
                                        {restaurant.phone}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h2 className="mb-3 text-2xl font-bold text-red-500">
                                About Restaurant
                            </h2>

                            <p className="leading-8 text-gray-600">
                                {restaurant.description}
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex justify-end">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                x: 5,
                            }}
                            whileTap={{
                                scale: 0.95,
                            }}
                            className="btn border-none bg-red-500 text-white hover:bg-red-600"
                        >
                            Browse Foods

                            <FaArrowRight />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default RestaurantDetails;