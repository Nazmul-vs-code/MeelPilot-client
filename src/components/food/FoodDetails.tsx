"use client";

import Image from "next/image";
import {
    FaClock,
    FaDollarSign,
    FaBoxes,
    FaLayerGroup,
    FaStore,
    FaShoppingCart,
} from "react-icons/fa";

type Props = {
    food: any;
};

const FoodDetails = ({ food }: Props) => {
    return (
        <section className="space-y-10">

            {/* Hero */}

            <div className="rounded-3xl bg-gradient-to-r from-red-500 via-red-600 to-yellow-500 p-10 text-white shadow-xl">

                <h1 className="text-5xl font-bold">
                    {food.foodName}
                </h1>

                <p className="mt-3 text-lg text-red-50">
                    Freshly prepared by {food.restaurantName}
                </p>

            </div>

            {/* Details */}

            <div className="grid gap-10 lg:grid-cols-2">

                {/* Image */}

                <div>

                    <Image
                        src={food.image}
                        alt={food.foodName}
                        width={700}
                        height={600}
                        className="h-[500px] w-full rounded-3xl object-cover shadow-xl"
                    />

                </div>

                {/* Info */}

                <div className="space-y-6">

                    <div>

                        <h2 className="text-4xl font-bold text-red-500">
                            {food.foodName}
                        </h2>

                        <p className="mt-2 flex items-center gap-2 text-gray-500">

                            <FaStore className="text-yellow-500" />

                            {food.restaurantName}

                        </p>

                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <div className="rounded-2xl bg-red-50 p-5">

                            <FaDollarSign className="mb-2 text-2xl text-red-500" />

                            <p className="text-sm text-gray-500">
                                Price
                            </p>

                            <h3 className="text-3xl font-bold text-red-500">
                                ${food.price}
                            </h3>

                        </div>

                        <div className="rounded-2xl bg-yellow-50 p-5">

                            <FaLayerGroup className="mb-2 text-2xl text-yellow-500" />

                            <p className="text-sm text-gray-500">
                                Category
                            </p>

                            <h3 className="font-bold">
                                {food.category}
                            </h3>

                        </div>

                        <div className="rounded-2xl bg-red-50 p-5">

                            <FaClock className="mb-2 text-2xl text-red-500" />

                            <p className="text-sm text-gray-500">
                                Preparation Time
                            </p>

                            <h3 className="font-bold">
                                {food.preparationTime}
                            </h3>

                        </div>

                        <div className="rounded-2xl bg-yellow-50 p-5">

                            <FaBoxes className="mb-2 text-2xl text-yellow-500" />

                            <p className="text-sm text-gray-500">
                                Available
                            </p>

                            <h3 className="font-bold">
                                {food.quantity} Items
                            </h3>

                        </div>

                    </div>

                    <div>

                        <h3 className="mb-3 text-2xl font-bold text-red-500">
                            Description
                        </h3>

                        <p className="leading-8 text-gray-600">
                            {food.description}
                        </p>

                    </div>

                    <button className="btn btn-warning btn-lg w-full text-white transition hover:btn-error">

                        <FaShoppingCart />

                        Add to Cart

                    </button>

                </div>

            </div>

        </section>
    );
};

export default FoodDetails;