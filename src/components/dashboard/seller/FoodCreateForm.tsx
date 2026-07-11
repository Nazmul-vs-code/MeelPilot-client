"use client";

import { useState } from "react";
import Image from "next/image";
import {
    FaHamburger,
    FaDollarSign,
    FaClock,
    FaLayerGroup,
    FaBoxes,
    FaStore,
} from "react-icons/fa";
import toast from "react-hot-toast";
import { Router } from "next/router";
import { CreateFood } from "@/lib/actions/food";

type Restaurant = {
    _id: string;
    restaurantName: string;
    image: string;
    status: "pending" | "approved" | "rejected";
};

type Props = {
    restaurant: Restaurant;
    sellerEmail: string;
};

const FoodCreateForm = ({
    restaurant,
    sellerEmail,
}: Props) => {
    const [formData, setFormData] = useState({
        restaurantId: restaurant._id,
        restaurantName: restaurant.restaurantName,
        restaurantStatus: restaurant.status,
        sellerEmail,

        foodName: "",
        image: "",
        category: "",
        price: "",
        quantity: "",
        preparationTime: "",
        description: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        console.log(formData);

        try {
            const result = await CreateFood(formData);

            if (result.insertedId) {
                toast.success("Food added successfully! 🍔");

                // Router.push("/dashboard/seller");
                window.location.reload()
                // or router.refresh();

                setFormData({
                    ...formData,
                    foodName: "",
                    image: "",
                    category: "",
                    price: "",
                    quantity: "",
                    preparationTime: "",
                    description: "",
                });
            } else {
                toast.error("Failed to add food.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong.");
        }

    };



    return (
        <section className="space-y-8">
            {/* Header */}

            <div className="rounded-3xl bg-gradient-to-r from-red-500 to-yellow-500 p-8 text-white shadow-xl">
                <h1 className="text-4xl font-bold">
                    Add New Food 🍕
                </h1>

                <p className="mt-2">
                    Add delicious food to your restaurant.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Restaurant Card */}

                <div className="rounded-3xl border border-red-100 bg-white p-5 shadow">
                    <Image
                        src={restaurant.image}
                        alt={restaurant.restaurantName}
                        width={500}
                        height={300}
                        className="h-52 w-full rounded-2xl object-cover"
                    />

                    <div className="mt-5">
                        <h2 className="text-2xl font-bold text-red-500">
                            {restaurant.restaurantName}
                        </h2>

                        <p className="mt-2 flex items-center gap-2 text-gray-500">
                            <FaStore />
                            Restaurant Selected
                        </p>
                    </div>
                </div>

                {/* Form */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 rounded-3xl border border-red-100 bg-white p-6 shadow lg:col-span-2"
                >
                    {/* Readonly Restaurant Name */}

                    <input
                        readOnly
                        name="restaurantName"
                        value={formData.restaurantName}
                        className="input input-bordered w-full bg-gray-100"
                    />

                    {/* Hidden Fields */}

                    <input
                        type="hidden"
                        name="restaurantStatus"
                        value={formData.restaurantStatus}
                    />

                    <input
                        type="hidden"
                        name="restaurantId"
                        value={formData.restaurantId}
                    />

                    <input
                        type="hidden"
                        name="sellerEmail"
                        value={formData.sellerEmail}
                    />

                    <div className="grid gap-5 md:grid-cols-2">
                        {/* Food Name */}

                        <label className="input input-bordered flex items-center gap-2">
                            <FaHamburger className="text-red-500" />

                            <input
                                type="text"
                                name="foodName"
                                placeholder="Food Name"
                                value={formData.foodName}
                                onChange={handleChange}
                            />
                        </label>

                        {/* Category */}

                        <label className="flex items-center gap-3 rounded-xl border border-base-300 bg-white px-4">
                            <FaLayerGroup className="text-red-500" />

                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="select w-full border-none bg-yellow-200 focus:outline-none"
                            >
                                <option value="" disabled>
                                    Select Category
                                </option>

                                <option value="Vegetarian">
                                    🥗 Vegetarian
                                </option>

                                <option value="Non-Vegetarian">
                                    🍗 Non-Vegetarian
                                </option>

                                <option value="Fast Food">
                                    🍔 Fast Food
                                </option>

                                <option value="Dessert">
                                    🍰 Dessert
                                </option>

                                <option value="Beverage">
                                    🥤 Beverage
                                </option>
                            </select>
                        </label>

                        {/* Price */}

                        <label className="input input-bordered flex items-center gap-2">
                            <FaDollarSign className="text-yellow-500" />

                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </label>

                        {/* Quantity */}

                        <label className="input input-bordered flex items-center gap-2">
                            <FaBoxes className="text-yellow-500" />

                            <input
                                type="number"
                                name="quantity"
                                placeholder="Available Quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                            />
                        </label>

                        {/* Preparation Time */}

                        <label className="input input-bordered flex items-center gap-2">
                            <FaClock className="text-red-500" />

                            <input
                                type="text"
                                name="preparationTime"
                                placeholder="Preparation Time (e.g. 20 mins)"
                                value={formData.preparationTime}
                                onChange={handleChange}
                            />
                        </label>

                        {/* Food Image */}

                        <input
                            className="input input-bordered"
                            type="text"
                            name="image"
                            placeholder="Food Image URL"
                            value={formData.image}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Description */}

                    <textarea
                        name="description"
                        rows={5}
                        value={formData.description}
                        className="textarea textarea-bordered w-full"
                        placeholder="Food Description"
                        onChange={handleChange}
                    />

                    <button className="btn btn-warning w-full text-white transition-all duration-300 hover:btn-error">
                        Add Food 🍔
                    </button>
                </form>
            </div>
        </section>
    );
};

export default FoodCreateForm;