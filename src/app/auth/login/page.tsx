"use client";

import { useState } from "react";
import Logo from "@/components/Home page/Logo";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

type LoginForm = {
    email: string;
    password: string;
};

const LoginPage = () => {
    const [formData, setFormData] = useState<LoginForm>({
        email: "",
        password: "",
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

        const { data, error } = await authClient.signIn.email({
            email: formData.email,
            password: formData.password,
            callbackURL: "/",
        });

        if (error) {
            toast.error(error.message || "Invalid email or password.");
            return;
        }

        toast.success(`Welcome back, ${data?.user?.name}! 🎉`);

        setTimeout(() => {
            window.location.href = "/";
        }, 1500);
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
                            Welcome Back 👋
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Login to continue ordering your favorite meals.
                        </p>
                    </div>

                    <form
                        className="space-y-5"
                        onSubmit={handleSubmit}
                    >

                        {/* Email */}
                        <div>
                            <label className="label font-semibold text-gray-700">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="input input-bordered w-full focus:border-red-400"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label font-semibold text-gray-700">
                                Password
                            </label>

                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="input input-bordered w-full focus:border-red-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-secondary w-full text-white text-base"
                        >
                            Login
                        </button>

                    </form>

                    <div className="divider text-gray-400">
                        OR
                    </div>

                    <p className="text-center text-sm text-gray-600">
                        Don not have an account?{" "}
                        <Link
                            href="/auth/signup"
                            className="font-semibold text-red-500 hover:text-pink-500 transition"
                        >
                            Sign Up
                        </Link>
                    </p>

                </div>

            </div>

        </section>
    );
};

export default LoginPage;