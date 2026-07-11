"use client";

import { FaHeartbeat } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

import HealthRadarChart from "./HealthRadarChart";
import HealthCategoryCards from "./HealthCategoryCards";

const HelthAnalytics = () => {
    return (
        <section className="relative overflow-hidden rounded-[40px] border border-red-100 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 px-6 py-16 shadow-xl lg:px-12">

            {/* Background Glow */}

            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-red-300/20 blur-[120px]" />

            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-yellow-300/20 blur-[120px]" />

            {/* Grid */}

            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `
                    linear-gradient(#ef4444 1px, transparent 1px),
                    linear-gradient(90deg,#ef4444 1px,transparent 1px)
                `,
                    backgroundSize: "42px 42px",
                }}
            />

            <div className="relative z-10">

                {/* Badge */}

                <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border border-red-200 bg-white px-5 py-2 shadow">

                    <MdHealthAndSafety className="text-xl text-red-500" />

                    <span className="font-semibold text-red-500">
                        Healthy Food Insights
                    </span>

                </div>

                {/* Heading */}

                <h2 className="mx-auto max-w-4xl text-center text-4xl font-extrabold leading-tight text-gray-900 lg:text-5xl">

                    Our Health Calculation

                    <span className="block bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">

                        Based on Food Categories

                    </span>

                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-gray-600">

                    Every food category is evaluated using nutritional balance,
                    freshness, preparation habits and overall lifestyle impact,
                    helping you choose healthier meals with confidence.

                </p>

                {/* Main Content */}

                <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]">

                    {/* Left */}

                    <div className="rounded-3xl border border-red-100 bg-white/80 p-8 shadow-lg backdrop-blur-sm transition duration-500 hover:shadow-2xl">

                        <HealthRadarChart />

                    </div>

                    {/* Right */}

                    <HealthCategoryCards />

                </div>

                {/* Bottom Note */}

                <div className="mt-14 rounded-3xl border border-yellow-200 bg-gradient-to-r from-yellow-100 to-orange-100 p-6 shadow">

                    <div className="flex items-start gap-4">

                        <div className="rounded-full bg-white p-4 shadow">

                            <FaHeartbeat className="text-3xl text-red-500" />

                        </div>

                        <div>

                            <h3 className="text-xl font-bold text-red-500">

                                How We Calculate Health Scores

                            </h3>

                            <p className="mt-2 leading-8 text-gray-700">

                                Scores are based on general nutritional
                                characteristics of each food category,
                                preparation methods, calorie density,
                                ingredient balance and healthier eating
                                recommendations. These scores are intended to
                                help users compare categories and make informed
                                meal choices.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HelthAnalytics;