"use client";

import {
    FaLeaf,
    FaBurger,
    FaIceCream,
    FaDrumstickBite,
    FaGlassWater,
    FaArrowTrendUp,
    FaAppleWhole,
} from "react-icons/fa6";

const categories = [
    {
        name: "Vegetarian",
        score: 95,
        icon: FaLeaf,
        color: "bg-green-500",
        bg: "from-green-50 to-green-100",
        description: "Rich in vegetables, vitamins and dietary fiber.",
    },
    {
        name: "Healthy Bowl",
        score: 90,
        icon: FaAppleWhole,
        color: "bg-lime-500",
        bg: "from-lime-50 to-lime-100",
        description: "Balanced meals with protein and fresh ingredients.",
    },
    {
        name: "Non-Vegetarian",
        score: 76,
        icon: FaDrumstickBite,
        color: "bg-orange-500",
        bg: "from-orange-50 to-orange-100",
        description: "High-quality protein with moderate nutrition.",
    },
    {
        name: "Beverage",
        score: 68,
        icon: FaGlassWater,
        color: "bg-sky-500",
        bg: "from-sky-50 to-sky-100",
        description: "Hydration and refreshing drinks.",
    },
    {
        name: "Dessert",
        score: 45,
        icon: FaIceCream,
        color: "bg-pink-500",
        bg: "from-pink-50 to-pink-100",
        description: "Sweet treats best enjoyed occasionally.",
    },
    {
        name: "Fast Food",
        score: 35,
        icon: FaBurger,
        color: "bg-red-500",
        bg: "from-red-50 to-red-100",
        description: "Great for cravings, but enjoy in moderation.",
    },
];

const getLabel = (score: number) => {
    if (score >= 90) return "Excellent";
    if (score >= 75) return "Very Good";
    if (score >= 60) return "Good";
    if (score >= 45) return "Average";
    return "Occasional";
};

const HealthCategoryCards = () => {
    return (
        <div className="space-y-5">
            {categories.map((category) => {
                const Icon = category.icon;

                return (
                    <div
                        key={category.name}
                        className={`group rounded-3xl border border-white/70 bg-gradient-to-r ${category.bg} p-5 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    className={`${category.color} flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white shadow-lg transition duration-300 group-hover:rotate-6 group-hover:scale-110`}
                                >
                                    <Icon />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">
                                        {category.name}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white px-4 py-2 shadow">
                                <p className="text-2xl font-extrabold text-red-500">
                                    {category.score}
                                </p>

                                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                                    Score
                                </span>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm font-semibold text-gray-600">
                                    Health Rating
                                </span>

                                <span className="flex items-center gap-1 text-sm font-bold text-red-500">
                                    <FaArrowTrendUp />
                                    {getLabel(category.score)}
                                </span>
                            </div>

                            <div className="h-3 overflow-hidden rounded-full bg-white">
                                <div
                                    className={`${category.color} h-full rounded-full transition-all duration-1000`}
                                    style={{
                                        width: `${category.score}%`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default HealthCategoryCards;