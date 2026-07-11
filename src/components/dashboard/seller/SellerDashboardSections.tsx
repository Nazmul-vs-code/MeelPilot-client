"use client";

import { useState } from "react";
import SellerRestaurantCard from "./SellerRestaurantCard";
import {
    FaStore,
    FaHamburger,
    FaShoppingBag,
    FaChartLine,
    FaChevronDown,
    FaChevronUp,
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
    restaurants: Restaurant[];
};

const SellerDashboardSections = ({
    restaurants,
}: Props) => {
    const [openSection, setOpenSection] =
        useState("restaurants");

    const toggleSection = (section: string) => {
        setOpenSection((prev) =>
            prev === section ? "" : section
        );
    };

    return (
        <div className="rounded-3xl border border-red-100 bg-white p-6 shadow-lg">

            <h2 className="mb-6 text-3xl font-bold text-red-500">
                Seller Management
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

                <button
                    onClick={() =>
                        toggleSection("restaurants")
                    }
                    className="btn btn-warning justify-between hover:btn-error"
                >
                    <span className="flex items-center gap-2">
                        <FaStore />
                        Restaurants
                    </span>

                    {openSection === "restaurants" ? (
                        <FaChevronUp />
                    ) : (
                        <FaChevronDown />
                    )}
                </button>

                <button className="btn btn-outline border-yellow-400 text-yellow-600">
                    <FaHamburger />
                    Foods
                </button>

                <button className="btn btn-outline border-yellow-400 text-yellow-600">
                    <FaShoppingBag />
                    Orders
                </button>

                <button className="btn btn-outline border-yellow-400 text-yellow-600">
                    <FaChartLine />
                    Analytics
                </button>

            </div>

            {openSection === "restaurants" && (
                <div className="mt-8">

                    <div className="mb-5 flex items-center justify-between">

                        <h3 className="text-2xl font-bold text-red-500">
                            🍽️ My Restaurants
                        </h3>

                        <span className="rounded-full bg-red-50 px-4 py-2 font-semibold text-red-500">
                            {restaurants.length} Restaurant(s)
                        </span>

                    </div>

                    <div className="max-h-[900px] space-y-5 overflow-y-auto pr-2">

                        {restaurants.length > 0 ? (
                            restaurants.map(
                                (restaurant) => (
                                    <SellerRestaurantCard
                                        key={restaurant._id}
                                        restaurant={restaurant}
                                    />
                                )
                            )
                        ) : (
                            <div className="rounded-2xl border border-dashed border-red-200 py-16 text-center">

                                <FaStore className="mx-auto mb-4 text-6xl text-red-300" />

                                <h3 className="text-2xl font-bold text-red-500">
                                    No Restaurant Found
                                </h3>

                                <p className="mt-2 text-gray-500">
                                    Create your first restaurant
                                    to get started.
                                </p>

                            </div>
                        )}

                    </div>

                </div>
            )}

        </div>
    );
};

export default SellerDashboardSections;