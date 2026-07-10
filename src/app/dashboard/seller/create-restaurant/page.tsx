"use client";

import { CreateRstaurants } from "@/lib/actions/restaurant";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type RestaurantForm = {
    restaurantName: string;
    ownerName: string;
    ownerEmail: string;
    location: string;
    image: string;
    phone: string;
    description: string;
};

const AddRestaurantPage = () => {
    const { data: session } = authClient.useSession();

    const [formData, setFormData] = useState<RestaurantForm>({
        restaurantName: "",
        ownerName: "",
        ownerEmail: "",
        location: "",
        image: "",
        phone: "",
        description: "",
    });

    useEffect(() => {
        if (session?.user) {
            setFormData((prev) => ({
                ...prev,
                ownerName: session.user.name ?? "",
                ownerEmail: session.user.email ?? "",
            }));
        }
    }, [session]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        console.log("Submitting:", formData);

        try {
            const result = await CreateRstaurants(formData);

            console.log("API Response:", result);
            if (result?.acknowledged) {
                toast.success("Your resturaunt was created!! Please wait for admin approval. ")
                
                window.location.reload()

            }
        } catch (error) {
            console.error("Submit Error:", error);
            toast.error(error + " occured ")


        }
    };

    return (
        <section className="w-full">
            <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="mb-2 text-3xl font-bold text-red-500">
                    Create Your Restaurant 🍽️
                </h1>

                <p className="mb-8 text-gray-500">
                    Fill in your restaurant information to start selling delicious food.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2"
                >
                    <div>
                        <label className="label font-semibold">
                            Restaurant Name
                        </label>

                        <input
                            required
                            type="text"
                            name="restaurantName"
                            value={formData.restaurantName}
                            onChange={handleChange}
                            placeholder="Burger House"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label font-semibold">
                            Owner Name
                        </label>

                        <input
                            type="text"
                            name="ownerName"
                            value={formData.ownerName}
                            readOnly
                            className="input input-bordered w-full bg-gray-100"
                        />
                    </div>

                    <div>
                        <label className="label font-semibold">
                            Owner Email
                        </label>

                        <input
                            type="email"
                            name="ownerEmail"
                            value={formData.ownerEmail}
                            readOnly
                            className="input input-bordered w-full bg-gray-100"
                        />
                    </div>

                    <div>
                        <label className="label font-semibold">
                            Location
                        </label>

                        <input
                            required
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Dhaka, Bangladesh"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label font-semibold">
                            Restaurant image URL
                        </label>

                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="https://..."
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="label font-semibold">
                            Contact Number
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+8801XXXXXXXXX"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="label font-semibold">
                            Restaurant Description
                        </label>

                        <textarea
                            rows={5}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Tell customers something about your restaurant..."
                            className="textarea textarea-bordered w-full"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="btn btn-secondary w-full text-white"
                        >
                            Create Restaurant
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddRestaurantPage;