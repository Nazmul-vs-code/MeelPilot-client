"use client";

import { useState } from "react";
import Logo from "@/components/Home page/Logo";
import Link from "next/link";
import {
    FaUser,
    FaImage,
    FaEnvelope,
    FaLock,
} from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

type SignUpForm = {
    name: string;
    image: string;
    email: string;
    password: string;
    role: "buyer" | "seller";
};

const SignUpPage = () => {
    const [formData, setFormData] = useState<SignUpForm>({
        name: "",
        image: "",
        email: "",
        password: "",
        role: "buyer",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
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

        // console.log(formData);

        // Better Auth signup will go here

        const { data, error } = await (authClient.signUp.email as any)({
            name: formData.name, // required
            email: formData.email, // required
            password: formData.password, // required
            image: formData.image,
            role: formData.role,
            callbackURL: '/'
        });

        console.log(data, error, ' data and error here ')
        if (data) {

            toast.success(
                "Welcome Mr./miss " +
                data?.user?.name +
                ". Your account was created!! "
            )

            setTimeout(() => {
                window.location.href = '/'
            }, 2000);
        }
        else {
            toast.error("error occured")
        }
    };

    return (
        <section className="min-h-screen bg-yellow-50 flex items-center justify-center px-5 py-10">

            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="flex justify-center mb-8">
                    <Logo />
                </div>

                {/* Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-red-100 p-8">

                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-red-500">
                            Create Account 🎉
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Join MealPilot and start discovering amazing meals.
                        </p>
                    </div>

                    <form
                        className="space-y-5"
                        onSubmit={handleSubmit}
                    >

                        {/* Name */}
                        <div>
                            <label className="label font-semibold text-gray-700">
                                Full Name
                            </label>

                            <label className="input input-bordered flex items-center gap-3">
                                <FaUser className="text-red-400" />

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="grow"
                                />
                            </label>
                        </div>

                        {/* Profile */}
                        <div>
                            <label className="label font-semibold text-gray-700">
                                Profile image URL
                            </label>

                            <label className="input input-bordered flex items-center gap-3">
                                <FaImage className="text-pink-500" />

                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    placeholder="https://example.com/profile.jpg"
                                    className="grow"
                                />
                            </label>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="label font-semibold text-gray-700">
                                Email
                            </label>

                            <label className="input input-bordered flex items-center gap-3">
                                <FaEnvelope className="text-yellow-500" />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="grow"
                                />
                            </label>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label font-semibold text-gray-700">
                                Password
                            </label>

                            <label className="input input-bordered flex items-center gap-3">
                                <FaLock className="text-red-400" />

                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="grow"
                                />
                            </label>
                        </div>

                        <div>
                            <label className="label font-semibold text-gray-700">
                                Sign Up As
                            </label>

                            <select
                                name="role"
                                value={formData.role}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        role: e.target.value as "buyer" | "seller",
                                    }))
                                }
                                className="select select-bordered w-full"
                            >
                                <option value="buyer">Buyer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-secondary w-full text-white text-base"
                        >
                            Create Account
                        </button>

                    </form>

                    <div className="divider text-gray-400">
                        OR
                    </div>

                    <p className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            href="/auth/login"
                            className="font-semibold text-red-500 hover:text-pink-500 transition"
                        >
                            Login
                        </Link>
                    </p>

                </div>

            </div>

        </section>
    );
};

export default SignUpPage;