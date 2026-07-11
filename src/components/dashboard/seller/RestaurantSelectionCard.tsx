"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStore } from "react-icons/fa";
import toast from "react-hot-toast";

type Restaurant = {
    _id: string;
    restaurantName: string;
    image: string;
    status: "approved" | "pending" | "rejected";
};

type Props = {
    restaurant: Restaurant;
};

const RestaurantSelectionCard = ({ restaurant }: Props) => {
    const isApproved = restaurant.status === "approved";

    const handleBlockedClick = () => {
        if (restaurant.status === "pending") {
            toast.error(
                "This restaurant is still pending approval. Please wait for the admin. ⏳"
            );
        } else {
            toast.error(
                "This restaurant has been rejected. Please contact the admin. ❌"
            );
        }
    };

    const Card = (
        <div
            className={`group overflow-hidden rounded-3xl border bg-white shadow-md transition-all duration-300
            ${
                isApproved
                    ? "border-red-100 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                    : "border-gray-200 opacity-70 cursor-not-allowed"
            }`}
        >
            <div className="relative h-56">
                <Image
                    src={restaurant.image}
                    alt={restaurant.restaurantName}
                    fill
                    className={`object-cover transition duration-500 ${
                        isApproved && "group-hover:scale-110"
                    }`}
                />
            </div>

            <div className="space-y-4 p-5">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-red-500">
                        {restaurant.restaurantName}
                    </h2>

                    <span
                        className={`btn btn-xs pointer-events-none capitalize ${
                            restaurant.status === "approved"
                                ? "btn-success"
                                : restaurant.status === "pending"
                                ? "btn-warning"
                                : "btn-error"
                        }`}
                    >
                        {restaurant.status}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <p className="flex items-center gap-2 text-sm text-gray-500">
                        <FaStore className="text-yellow-500" />

                        {isApproved
                            ? "Click to add foods"
                            : "Approval required"}
                    </p>

                    <div
                        className={`rounded-full p-3 text-white transition ${
                            isApproved
                                ? "bg-yellow-400 group-hover:bg-red-500"
                                : "bg-gray-400"
                        }`}
                    >
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </div>
    );

    if (isApproved) {
        return (
            <Link href={`/dashboard/seller/create-food/${restaurant._id}`}>
                {Card}
            </Link>
        );
    }

    return (
        <button
            onClick={handleBlockedClick}
            className="w-full text-left"
        >
            {Card}
        </button>
    );
};

export default RestaurantSelectionCard;