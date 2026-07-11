"use client";

import { serverFetch } from "@/lib/actions/server-fetch";
import Image from "next/image";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaUserTie,
    FaEnvelope,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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

const SellerRestaurantCard = ({ restaurant }: Props) => {
    const router = useRouter();

    console.log(restaurant.status, ' status ')

    


    //  Delete resturant
    const deleteRestaurant = async (id: string) => {
        try {
            const result = await serverFetch(
                `/api/admin/restaurants/${id}`,
                "DELETE"
            );

            if (result.deletedCount > 0) {
                toast.success("Restaurant deleted successfully! 🗑️");
                router.refresh();
            } else {
                toast.error("Failed to delete restaurant.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong.");
        }
    };

    return (
        <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex flex-col gap-5 lg:flex-row">

                {/* Restaurant Image */}
                <Image
                    src={restaurant.image}
                    alt={restaurant.restaurantName}
                    width={170}
                    height={170}
                    className="h-44 w-full rounded-xl object-cover lg:h-44 lg:w-44"
                />

                {/* Restaurant Info */}
                <div className="flex flex-1 flex-col justify-between">

                    <div className="flex flex-col gap-6 lg:flex-row">

                        {/* Left Side */}
                        <div className="flex-1">

                            <h2 className="text-2xl font-bold text-red-500">
                                {restaurant.restaurantName}
                            </h2>

                            <div className="mt-5 space-y-3 text-sm">

                                <p className="flex items-center gap-2">
                                    <FaUserTie className="text-red-500" />
                                    <span>{restaurant.ownerName}</span>
                                </p>

                                <p className="flex items-center gap-2 break-all">
                                    <FaEnvelope className="text-red-500" />
                                    <span>{restaurant.ownerEmail}</span>
                                </p>

                                <p className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-yellow-500" />
                                    <span>{restaurant.phone}</span>
                                </p>

                                <p className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-yellow-500" />
                                    <span>{restaurant.location}</span>
                                </p>

                            </div>

                        </div>

                        {/* Description */}
                        <div className="w-full lg:w-80">

                            <h3 className="mb-2 font-semibold text-red-500">
                                Description
                            </h3>

                            <div className="h-36 overflow-y-auto rounded-xl border border-red-100 bg-red-50 p-4 text-sm leading-7 text-gray-600">
                                {restaurant.description}
                            </div>

                        </div>

                    </div>

                    {/* Bottom Actions */}
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex justify-between gap-2.5">

                            <button 
                                className={`btn pointer-events-none capitalize ${restaurant.status === "approved"
                                        ? "btn-success"
                                        : restaurant.status === "pending"
                                            ? "btn-warning"
                                            : "btn-error"
                                    }`}
                            >
                                {restaurant.status}
                            </button>
                            <button 
                            onClick={() => deleteRestaurant(restaurant._id)}
                            className="btn btn-outline hover:btn-error border-error">Delete</button>
                        </div>

                        <button className="btn btn-warning transition-all duration-300 hover:btn-error">
                            Manage
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SellerRestaurantCard;